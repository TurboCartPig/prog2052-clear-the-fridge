import { debouncedFetch } from "./debouncedFetch";
import { IngredientData, IngredientInRecipe, IngredientWithAmount, TempRecipeData } from "./types";

// URL for the backend
const backend = process.env.BACKEND_URL;

// The api version we are currently using
const api_version = "/api/v1"

/**
 * Search for ingredients.
 * @param term Search term
 * @returns Array of ingredients
 */
export async function searchIngredients(
	term: string
): Promise<IngredientData[]> {
	// Construct the url to GET
	let url: URL;
	if (term !== "") {
		url = new URL(api_version + "/ingredients/search", backend);
		url.searchParams.append("query", term);
	} else {
		url = new URL(api_version + "/ingredients", backend);
	}

	let res;
	try {
		// Use debounced fetch in order to abort any incomplete search.
		// Avoids concurrency issue where the request that takes the longest ends up being displayed,
		// instead of the latest one.
		res = await debouncedFetch(url);
		if (!res.ok) throw Error();
	} catch {
		// Rethrow the error with an abstracted error message
		return Promise.reject("Search cancelled");
	}

	// Deserialize the returned json
	const results = await res.json();
	return results;
}

export async function searchRecipes(ingredients: IngredientData[], amountFilter: boolean, limitFilter: number): Promise<TempRecipeData[]> {
	let base_url = api_version + "/recipes/search";
	
	if (ingredients.length > 0) {
		let ingredientIDs: number[] = [];
		let ingredientAmounts: number[] = [];
		for (var ingredient of ingredients) {
			ingredientIDs.push(ingredient.id);
			ingredientAmounts.push(ingredient.amount)
		}
		base_url += "?ingredients=" + ingredientIDs.toString();
		base_url += "&amounts=" + ingredientAmounts.toString();
		base_url += "&limitFilter=" + limitFilter.toString();
		base_url += "&amountFilter=" + amountFilter.toString();
	}
	let uri = encodeURI(base_url)
	let url = new URL(uri,backend);
	let res;
	try {
		res = await debouncedFetch(url);
		if (!res.ok) throw Error()
	} catch {
		return Promise.reject("Recipe search cancelled")
	}

	const results = await res.json();
		return results;
}

export async function getIngredientsInfo(ingredients: IngredientInRecipe[]): Promise<IngredientWithAmount[]> {
	let base_url = api_version + "/ingredients/search/id"

	if (ingredients.length > 0) {
		ingredients.sort((first, second) => {
			if (first.id < second.id)
				return -1
			else
				return 1
		})

		let ingredientIDs: number[] = [];
		for (var ingredient of ingredients) {
			ingredientIDs.push(ingredient.id);
	    }
		base_url += "?values=" + ingredientIDs.toString();
	}
	let url = new URL(base_url,backend);
	let res;
	try {
		res = await debouncedFetch(url);
		if (!res.ok) throw Error()
	} catch {
		return Promise.reject("Recipe search cancelled")
	}

	const ingredientResults = await res.json();
	var results: IngredientWithAmount[] = []
	for (var i = 0; i < ingredients.length; i++) {
		results.push({
			ingredient: ingredientResults[i],
			amount: ingredients[i].amount})
	}
	return results;
}

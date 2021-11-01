import { debouncedFetch } from "./debouncedFetch";
import { IngredientData } from "./types";

// URL for the backend
const backend =
	// "https://4e05fc26-03b8-451a-9ca3-369c57c52186.mock.pstmn.io";
	"http://localhost:3080";

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
		url = new URL("/api/v1/ingredients/search", backend);
		url.searchParams.append("query", term);
	} else {
		url = new URL("/api/v1/ingredients", backend);
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
		return Promise.reject("Search canceled");
	}

	// Deserialize the returned json
	const results = await res.json();

	return results;
}

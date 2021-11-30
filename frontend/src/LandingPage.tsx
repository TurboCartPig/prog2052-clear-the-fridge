import React from "react";
import Search from "./Search";
import Logo from "./res/logo.svg";
import RecipeList from "./RecipeList";
import IngredientList from "./IngredientList";
import { IngredientData, RecipeData } from "./types";
import "./tailwind.css";
import { getIngredientsInfo, searchRecipes } from "./api";
import _ from "lodash";
import LimitFilter from "./LimitFilter";
import AmountFilter from "./AmountFilter";

type LandingPageProps = {};

type LandingPageState = {
	ingredients: IngredientData[];
	recipes: RecipeData[];
	limitFilter: number;
	amountFilter: boolean;
};

class LandingPage extends React.Component<LandingPageProps, LandingPageState> {
	constructor(props: LandingPageProps) {
		super(props);

		this.state = {
			ingredients: [],
			recipes: [],
			limitFilter: 0,
			amountFilter: false,
		};

		this.addIngredient = this.addIngredient.bind(this);
		this.removeIngredient = this.removeIngredient.bind(this);
		this.recipeSearch = this.recipeSearch.bind(this);
		this.ingredientExists = this.ingredientExists.bind(this);
		this.modifyIngredientAmount = this.modifyIngredientAmount.bind(this);
	}

	render() {
		return (
			<div className="grid grid-cols-8 justify-center bg-clearthefridge">
				<div className="col-start-2 col-end-8 mx-auto my-auto">
					<img
						className="m-12"
						width="100px"
						height="100px"
						src={Logo}
						aria-hidden
					/>
				</div>
				<div className="col-start-2 col-end-8">
					<Search onAdd={this.addIngredient} />
				</div>
				<div className="grid col-start-2 col-end-8 justify-items-center divide-solid divide-gray-100 divide-y-2">
					<h2 className="lg:mt-20 mt-5 mb-3">Filters</h2>
					<div className="w-8/12">
						<LimitFilter />
						<AmountFilter />
					</div>
				</div>
				<div className="grid col-start-2 col-end-8 justify-items-center divide-solid divide-gray-100 divide-y-2">
					<h2 className="lg:mt-20 mt-5 mb-3">Ingredients</h2>
					<IngredientList
						ingredients={this.state.ingredients}
						remove={this.removeIngredient}
						recipeSearch={this.recipeSearch}
						modifyIngredient={this.modifyIngredientAmount}
					/>
				</div>
				<div className="grid col-start-2 col-end-8 justify-items-center divide-solid divide-gray-100 divide-y-2">
					<h2 className="lg:mt-20 mt-5 mb-3">Results</h2>
					<RecipeList recipeData={this.state.recipes} />
				</div>
			</div>
		);
	}

	/**
	 * Add an ingredient to the list
	 * @param ingredient Ingredient to add
	 */
	addIngredient(ingredient: IngredientData) {
		if (!this.ingredientExists(ingredient)) {
			this.setState(
				(prev, _) => {
					return { ingredients: [...prev.ingredients, ingredient] };
				},
				() => this.recipeSearch()
			);
		}
	}

	/**
	 * Removes an ingredient with the provided ID
	 * @param The ingredient ID to be removed
	 */
	removeIngredient(ingredientID: number) {
		this.setState((prev, _) => {
			return {
				ingredients: prev.ingredients.filter(
					(ing) => ing.id != ingredientID
				),
			};
		});
	}

	/**
	 * Check if an ingredient already exists in the ingredientlist
	 * @param The ingredient to check
	 */
	ingredientExists(ingredient: IngredientData): boolean {
		return this.state.ingredients.find((ing) => ingredient.id == ing.id) !=
			undefined
			? true
			: false;
	}

	/**
	 * Modifies the amount of a given ingredient
	 */
	modifyIngredientAmount(ingredient: IngredientData, newAmount: number) {
		if (newAmount <= 0) {
			this.removeIngredient(ingredient.id);
		} else {
			const index = this.state.ingredients.indexOf(ingredient);
			this.setState((prev, _) => ({
				ingredients: [
					...prev.ingredients.slice(0, index),
					{
						...prev.ingredients[index],
						amount: newAmount,
					},
					...prev.ingredients.slice(index + 1),
				],
			}));
		}
	}

	/**
	 * Searches for recipes based on the provided ingredients
	 */
	async recipeSearch() {
		try {
			const res = await searchRecipes(
				this.state.ingredients,
				this.state.amountFilter,
				this.state.limitFilter
			);

			var recipes: RecipeData[] = [];

			//Convert to 'real' recipe
			for (var recipe of res) {
				const ing = await getIngredientsInfo(recipe.ingredients);
				recipes.push({
					id: recipe.id,
					ingredients: ing,
					instructions: recipe.instructions,
					name: recipe.name,
				});
			}

			this.setState({ recipes: recipes });
		} catch {
			return;
		}
	}
}

export default LandingPage;

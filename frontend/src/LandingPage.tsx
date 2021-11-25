import React from "react";
import Search from "./Search";
import Navigation from "./Navigation";
import Logo from "./res/logo.svg";
import RecipeList from "./RecipeList";
import IngredientList from "./IngredientList";
import { IngredientData, RecipeData } from "./types";
import "./tailwind.css";
import { getIngredientsInfo, searchRecipes } from "./api";
import _ from "lodash";

type LandingPageProps = {};

type LandingPageState = {
	ingredients: IngredientData[];
	recipes: RecipeData[];
};

class LandingPage extends React.Component<LandingPageProps, LandingPageState> {
	constructor(props: LandingPageProps) {
		super(props);

		this.state = {
			ingredients: [],
			recipes: [],
		};

		this.addIngredient = this.addIngredient.bind(this);
		this.recipeSearch = this.recipeSearch.bind(this);
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
					<div className="w-8/12"></div>
				</div>
				<div className="grid col-start-2 col-end-8 justify-items-center divide-solid divide-gray-100 divide-y-2">
					<h2 className="lg:mt-20 mt-5 mb-3">Ingredients</h2>
					<IngredientList ingredients={this.state.ingredients} />
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
		/* console.log(ingredient); */
		this.setState(
			(prev, _) => {
				return { ingredients: [...prev.ingredients, ingredient] };
			},
			() => this.recipeSearch()
		);
	}

	async recipeSearch() {
		try {
			const res = await searchRecipes(this.state.ingredients);

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

			this.setState({ recipes: recipes }, () =>
				console.log(this.state.ingredients)
			);
		} catch {
			return;
		}
	}
}

export default LandingPage;

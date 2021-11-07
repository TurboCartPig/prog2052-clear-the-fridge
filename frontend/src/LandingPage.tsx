import React from "react";
import Search from "./Search";
import Navigation from "./Navigation";
import Logo from "./res/logo.svg";
import RecipeList from "./RecipeList";
import IngredientList from "./IngredientList";
import { IngredientData, RecipeData } from "./types";
import "./tailwind.css";
import { searchRecipes } from "./api";
import _ from "lodash";

type LandingPageProps = {};

type LandingPageState = {
	ingredients: IngredientData[];
	recipes: RecipeData[];
};

class LandingPage extends React.Component<LandingPageProps, LandingPageState> {
	onChange = _.debounce(this.recipeSearch, 150);

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
			<div className="grid justify-center bg-clearthefridge">
				<Navigation />
				<div className="mx-auto my-auto">
					<img
						className="m-12"
						width="100px"
						height="100px"
						src={Logo}
					/>
				</div>
				<Search onAdd={this.addIngredient} />
				<div className="grid justify-items-center divide-solid divide-gray-100 divide-y-2">
					<h2 className="lg:mt-20 mt-5 mb-3">Ingredients</h2>
					<IngredientList ingredients={this.state.ingredients} />
				</div>
				<div className="grid justify-items-center divide-solid divide-gray-100 divide-y-2">
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
		console.log(ingredient);
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
			console.log(res);
			this.setState({ recipes: res });
		} catch {
			return;
		}
	}
}

export default LandingPage;

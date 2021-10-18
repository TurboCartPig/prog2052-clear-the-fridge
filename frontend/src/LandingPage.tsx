import React from "react";
import Search from "./Search";
import Logo from "./res/logo.svg";
import RecipeList from "./RecipeList";
import IngredientList from "./IngredientList";
import { IngredientData } from "./types";
import "./tailwind.css";

type LandingPageProps = {};

type LandingPageState = {
	ingredients: IngredientData[];
};

class LandingPage extends React.Component<LandingPageProps, LandingPageState> {
	constructor(props: LandingPageProps) {
		super(props);

		this.state = {
			ingredients: [],
		};

		this.addIngredient = this.addIngredient.bind(this);
	}

	render() {
		return (
			<div className="grid justify-center bg-clearthefridge">
				<div className="grid justify-center">
					<img
						className="m-12"
						width="100px"
						height="100px"
						src={Logo}
					/>
				</div>
				<Search onAdd={this.addIngredient} />
				<div className="grid justify-items-center divide-solid divide-gray-100 divide-y-2">
					<h2 className="md:mt-20 mt-5 mb-3">Ingredients</h2>
					<IngredientList ingredients={this.state.ingredients} />
				</div>
				<div className="grid justify-items-center divide-solid divide-gray-100 divide-y-2">
					<h2 className="md:mt-20 mt-5 mb-3">Results</h2>
					<RecipeList />
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
		this.setState((prev, _) => {
			return { ...prev, ingredients: [...prev.ingredients, ingredient] };
		});
	}
}

export default LandingPage;

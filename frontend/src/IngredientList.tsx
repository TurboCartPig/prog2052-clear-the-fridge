import React from "react";
import Ingredient from "./Ingredient";
import { IngredientData, Unit } from "./types";

type IngredientListProps = {
	ingredients: IngredientData[];
	remove: (ingredientID: number) => void;
	recipeSearch: () => void;
	modifyIngredient: (ingredient: IngredientData, newAmount: number) => void;
};

type IngredientListState = {};

class IngredientList extends React.Component<
	IngredientListProps,
	IngredientListState
> {
	constructor(props: IngredientListProps) {
		super(props);
	}

	render() {
		// Render help tip if the list is empty
		if (this.props.ingredients.length === 0) {
			return (
				<div className="py-8 w-10/12 lg:w-8/12 text-center text-sm opacity-60">
					Ingredients added from search will appear here
				</div>
			);
		}

		return (
			<div className="grid w-10/12 lg:w-8/12">
				{this.props.ingredients.map((data, index) => {
					const unit = Unit[data.unit as keyof typeof Unit];
					return (
						<Ingredient
							key={index}
							data={data}
							unit={unit}
							remove={this.props.remove}
							updateRecipes={this.props.recipeSearch}
							modifyIngredient={this.props.modifyIngredient}
						/>
					);
				})}
			</div>
		);
	}
}

export default IngredientList;

import React from "react";
import Ingredient from "./Ingredient";
import { IngredientData, Unit } from "./types";

type IngredientListProps = {
	ingredients: IngredientData[];
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
				{this.props.ingredients.map((data, key) => {
					const unit = Unit[data.unit as keyof typeof Unit];
					const img =
						window.location.href +
						"/images/" +
						(data.img ? data.img : "beef.svg");

					return (
						<Ingredient
							key={key}
							name={data.name}
							unit={unit}
							imgPath={img}
						/>
					);
				})}
			</div>
		);
	}
}

export default IngredientList;

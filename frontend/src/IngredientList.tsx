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
		return (
			<div className="grid w-10/12 lg:w-2/5">
				{this.props.ingredients.map((data, key) => {
					return (
						<Ingredient
							key={key}
							name={data.name}
							unit={Unit[data.unit as keyof typeof Unit]}
							imgPath={data.imgPath}
						/>
					);
				})}
			</div>
		);
	}
}

export default IngredientList;

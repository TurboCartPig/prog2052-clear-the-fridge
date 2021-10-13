import React from "react";
import "./tailwind.css";

/**
 * Properties of an ingredient result.
 */
type IngredientResultProps = {
	// Name of the ingredient
	name: string;
	// Called when the ingredient is added
	onAdd: (name: string) => void;
};

/**
 * State of the ingredient result component.
 */
type IngredientResultState = {};

class IngredientResult extends React.Component<
	IngredientResultProps,
	IngredientResultState
> {
	constructor(props: IngredientResultProps) {
		super(props);
	}

	render() {
		return (
			<div className="px-3 py-3 mx-auto my-1 w-98/100 rounded-lg bg-white">
				{this.props.name}
			</div>
		);
	}
}

export default IngredientResult;

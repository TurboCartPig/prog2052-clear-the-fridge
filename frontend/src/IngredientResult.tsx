import React from "react";
import Plus from "./res/plus.svg";
import { IngredientData } from "./types";
import "./tailwind.css";

/**
 * Properties of an ingredient result.
 */
type IngredientResultProps = {
	// Data about the ingredient
	data: IngredientData;
	// Called when the ingredient is added
	onAdd: (data: IngredientData) => void;
};

/**
 * State of the ingredient result component.
 */
type IngredientResultState = {
	// Has this ingredient been added?
	added: boolean;
};

/**
 * Component for representing a single search result.
 */
class IngredientResult extends React.Component<
	IngredientResultProps,
	IngredientResultState
> {
	constructor(props: IngredientResultProps) {
		super(props);

		this.state = {
			added: false,
		};

		this.onAdd = this.onAdd.bind(this);
	}

	render() {
		return (
			<div
				className={`grid justify-items-center py-3 mx-2 my-2 rounded-lg bg-white ${
					this.state.added && "opacity-50"
				}`}
			>
				<div className="col-span-1">{this.props.data.name}</div>
				<img
					className="col-span-1 col-start-10 my-auto"
					src={this.state.added ? undefined : Plus}
					onClick={this.onAdd}
				></img>
			</div>
		);
	}

	/**
	 * Called when the user clicks `add`.
	 */
	onAdd() {
		this.setState({ added: true });
		this.props.onAdd(this.props.data);
	}
}

export default IngredientResult;

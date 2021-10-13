import React from "react";
import Edit from "./res/edit.svg";
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
type IngredientResultState = {
	// Has this ingredient been added?
	added: boolean;
};

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
			<div className="grid justify-items-center py-3 mx-auto my-1 w-98/100 rounded-lg bg-white">
				<div className="col-span-1">{this.props.name}</div>
				<img
					className="col-span-1 col-start-10"
					src={this.state.added ? undefined : Edit}
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
		this.props.onAdd(this.props.name);
	}
}

export default IngredientResult;

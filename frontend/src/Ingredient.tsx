import React from "react";
import Edit from "./res/edit.svg";
import HorRule from "./res/horizontal_rule.svg";
import { Unit, printUnit } from "./types";
import "./tailwind.css";

type IngredientProps = {
	id: number;
	name: string;
	unit: Unit;
	imgPath: string;
	remove: (ingredientID: number) => void;
};

type IngredientState = {
	amount: number;
	isOpen: boolean;
};

class Ingredient extends React.Component<IngredientProps, IngredientState> {
	constructor(props: IngredientProps) {
		super(props);
		this.state = {
			amount: 1,
			isOpen: false,
		};
	}

	render() {
		return (
			<div
				className="mt-3 bg-ingredient-bar w-full text-sm rounded-lg border"
				onClick={() => {
					this.setState({ isOpen: !this.state.isOpen });
				}}
			>
				<div className="grid grid-cols-10 justify-items-center items-center h-12">
					<img
						className="col-start-1 col-span-1"
						width="24px"
						height="24px"
						src={this.props.imgPath}
						aria-hidden
					></img>

					<div className="col-start-2 col-span-2 justify-self-start">
						{this.props.name}
					</div>

					{!this.state.isOpen && (
						<div className="col-start-8 col-span-2 justify-self-end">
							{this.currentAmount()}
						</div>
					)}

					<img
						className="col-start-10 col-span-1"
						width="24px"
						height="24px"
						src={this.state.isOpen ? HorRule : Edit}
						alt="Edit ingredient"
						tabIndex={0}
					></img>
				</div>
				{this.state.isOpen && this.modifyIngredient()}
			</div>
		);
	}

	currentAmount() {
		return printUnit(this.props.unit, this.state.amount);
	}

	modifyIngredient() {
		return (
			<div className="grid grid-cols-10 h-12 text-xs">
				<button
					className="bg-gray-300 col-span-4 m-2 rounded-lg"
					type="button"
					aria-label="Decrement ingredient count"
					onClick={(e) => {
						// Stop the click event from bubbeling up to parent div
						e.stopPropagation();
						if (this.state.amount <= 1)
							this.props.remove(this.props.id);
						else
							this.setState((prev, _) => {
								return { amount: prev.amount - 1 };
							});
					}}
				>
					-{printUnit(this.props.unit, 1)}
				</button>

				<button
					className="bg-gray-100 col-span-2 my-2 cursor-default"
					disabled={true} // Disable so that keyboard navigation skips it
				>
					{this.currentAmount()}
				</button>

				<button
					className="bg-gray-300 col-span-4 m-2 rounded-lg"
					type="button"
					aria-label="Increment ingredient count"
					onClick={(e) => {
						// Stop the click event from bubbeling up to parent div
						e.stopPropagation();
						this.setState((prev, _) => {
							return { amount: prev.amount + 1 };
						});
					}}
				>
					+{printUnit(this.props.unit, 1)}
				</button>
			</div>
		);
	}
}

export default Ingredient;

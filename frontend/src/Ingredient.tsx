import React from "react";
import Edit from "./res/edit.svg";
import HorRule from "./res/horizontal_rule.svg";
import { Unit, printUnit, IngredientData, calculateUnit } from "./types";
import "./tailwind.css";
import { svgs } from "./main";

type IngredientProps = {
	data: IngredientData;
	unit: Unit;
	remove: (ingredientID: number) => void;
	updateRecipes: () => void;
	modifyIngredient: (ingredient: IngredientData, newAmount: number) => void;
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
				<div className="grid grid-cols-10 justify-items-center items-center h-12 pl-2 pr-2 md:p-0">
					<img
						className="col-start-1 col-span-1"
						width="24px"
						height="24px"
						src={svgs["./" + this.props.data.img]}
						aria-hidden
					></img>

					<div className="col-start-2 col-span-2 justify-self-start ml-3 md:m-0">
						{this.props.data.name}
					</div>

					{!this.state.isOpen && (
						<div className="col-start-8 col-span-2 justify-self-end mr-3 md:m-0">
							{this.printUnit(this.props.data.amount)}
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
						this.props.modifyIngredient(
							this.props.data,
							this.props.data.amount - calculateUnit(1, this.props.data.unit)
						);
						this.render();
					}}
				>
					-{this.printUnit(calculateUnit(1, this.props.data.unit))}
				</button>

				<button
					className="bg-gray-100 col-span-2 my-2 cursor-default"
					disabled={true} // Disable so that keyboard navigation skips it
				>
					{this.printUnit(this.props.data.amount)}
				</button>

				<button
					className="bg-gray-300 col-span-4 m-2 rounded-lg"
					type="button"
					aria-label="Increment ingredient count"
					onClick={(e) => {
						// Stop the click event from bubbeling up to parent div
						e.stopPropagation();
						this.props.modifyIngredient(
							this.props.data,
							this.props.data.amount + calculateUnit(1, this.props.data.unit)
						);
						this.render();
					}}
				>
					+{this.printUnit(calculateUnit(1, this.props.data.unit))}
				</button>
			</div>
		);
	}

	printUnit(num: number): string {
		return num + " " + this.props.data.unit
	}
}

export default Ingredient;

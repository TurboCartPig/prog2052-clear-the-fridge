import React from "react";
import Edit from "./res/edit.svg";
import HorRule from "./res/horizontal_rule.svg";
import { Unit, printUnit } from "./types";
import "./tailwind.css";

type IngredientProps = {
	name: string;
	unit: Unit;
	imgPath: string;
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
			<div className="grid justify-items-center mt-3">
				<button
					className={this.ingredientStyling()}
					onClick={() => {
						this.setState({ isOpen: !this.state.isOpen });
					}}
				>
					<img
						className="col-start-1 col-span-1"
						width="24px"
						height="24px"
						src={this.props.imgPath}
					></img>

					<div className="col-start-2 col-span-2">
						{this.props.name}
					</div>

					{!this.state.isOpen && (
						<div className="col-start-8 col-span-2">
							{this.currentAmount()}
						</div>
					)}

					<img
						className="col-start-10 col-span-1"
						width="24px"
						height="24px"
						src={this.state.isOpen ? HorRule : Edit}
					></img>
				</button>

				{this.state.isOpen && this.modifyIngredient()}

			</div>
		);
	}

	currentAmount() {
		return printUnit(this.props.unit, this.state.amount);
	}

	ingredientStyling() {
		return (
			"grid grid-cols-10 justify-items-center items-center bg-ingredient-bar w-full h-12 text-sm " +
			(this.state.isOpen ? "rounded-t-lg" : "rounded-lg")
		);
	}

	modifyIngredient() {
		return (
			<div className="grid grid-cols-10 bg-ingredient-bar h-12 w-full rounded-b-lg text-xs">
				<button
					className="bg-gray-300 col-span-4 m-2"
					onClick={() => {
						this.setState((prev, _) => {
							return { ...prev, amount: prev.amount - 1 };
						});
					}}
				>
					-{printUnit(this.props.unit, 1)}
				</button>
				<button className="bg-gray-100 col-span-2 my-2 place-self-stretch cursor-default">
					{this.currentAmount()}
				</button>
				<button
					className="bg-gray-300 col-span-4 m-2"
					onClick={() => {
						this.setState((prev, _) => {
							return { ...prev, amount: prev.amount + 1 };
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

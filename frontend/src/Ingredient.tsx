import React from "react";
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

export enum Unit {
	pcs,
	g,
	ml,
}

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
						className="col-span-1 w-3/5"
						src={this.props.imgPath}
					></img>
					<div className="col-span-1">{this.props.name}</div>

					{!this.state.isOpen && (
						<div className="col-start-9 col-span-1">
							{this.currentAmount()}
						</div>
					)}

					<img
						className="col-start-10 col-span-1"
						src={require(this.state.isOpen
							? "../src/res/horizontal_rule.svg"
							: "../src/res/edit.svg")}
					></img>
				</button>
				{this.state.isOpen && this.modifyIngredient()}
			</div>
		);
	}

	currentAmount() {
		return this.printUnit(this.state.amount);
	}

	printUnit(amount: number) {
		switch (this.props.unit) {
			case Unit.pcs:
				return amount + " pcs";
			case Unit.g:
				return amount * 100 + " g";
			case Unit.ml:
				return amount * 100 + " ml";
		}
	}

	ingredientStyling() {
		return (
			"grid grid-cols-10 justify-items-center items-center bg-red-200 w-10/12 lg:w-2/5 h-12 " +
			(this.state.isOpen ? "rounded-t-lg" : "rounded-lg") +
			" text-xs"
		);
	}

	modifyIngredient() {
		return (
			<div className="grid grid-cols-10 bg-red-200 w-10/12 lg:w-2/5 h-12 rounded-b-lg text-xs">
				<button
					className="bg-gray-300 col-span-4 m-2"
					onClick={() => {
						this.setState((prev, _) => {
							return { ...prev, amount: prev.amount - 1 };
						});
					}}
				>
					-{this.printUnit(1)}
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
					+{this.printUnit(1)}
				</button>
			</div>
		);
	}
}

export default Ingredient;

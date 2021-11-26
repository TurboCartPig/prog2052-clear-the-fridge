import React from "react";
import "./tailwind.css";
import Edit from "./res/edit.svg";
import HorRule from "./res/horizontal_rule.svg";

type LimitFilterProps = {};

type LimitFilterState = {
	amount: number;
	isOpen: boolean;
};

class LimitFilter extends React.Component<LimitFilterProps, LimitFilterState> {
	constructor(props: LimitFilterProps) {
		super(props);
		this.state = {
			amount: 0,
			isOpen: false,
		};
	}

	render() {
		return (
			<button
				className="mt-3 bg-indigo-200 w-full text-sm rounded-lg border"
				onClick={() => {
					this.setState({ isOpen: !this.state.isOpen });
				}}
			>
				<div className="grid grid-cols-10 justify-items-center items-center h-12">
					<div className="ml-2 col-start-1 col-span-7 justify-self-start">
						Antall tillatte manglende ingredienser
					</div>

					{!this.state.isOpen && (
						<div className="col-start-8 col-span-2 justify-self-end">
							{this.state.amount}
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
			</button>
		);
	}

	modifyIngredient() {
		return (
			<div className="grid grid-cols-10 h-12 text-xs">
				<button
					className="bg-gray-50 col-span-4 m-2 rounded-lg"
					type="button"
					aria-label="Decrement ingredient count"
					onClick={(e) => {
						// Stop the click event from bubbeling up to parent div
						e.stopPropagation();
						this.setState((prev, _) => {
							return { amount: prev.amount - 1 };
						});
					}}
				>
					-1
				</button>

				<button
					className="bg-white col-span-2 my-2 cursor-default rounded-lg"
					disabled={true} // Disable so that keyboard navigation skips it
				>
					{this.state.amount}
				</button>

				<button
					className="bg-gray-50 col-span-4 m-2 rounded-lg"
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
					+1
				</button>
			</div>
		);
	}
}

export default LimitFilter;

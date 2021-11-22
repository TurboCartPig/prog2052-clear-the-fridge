import React from "react";
import ReactDOM from "react-dom";
import "./tailwind.css";
import { RecipeData } from "./types";
import Image from "../src/res/img_01.png";

/**
 * The state of the Recipe component
 */
type RecipeState = {
	modalOpen: boolean;
};

/**
 * Recipe component for view a recipe as a modal window.
 */
class Recipe extends React.Component<RecipeData, RecipeState> {
	constructor(props: RecipeData) {
		super(props);

		this.state = {
			modalOpen: false,
		};

		this.toggleModal = this.toggleModal.bind(this);
		this.ingredientsToString = this.ingredientsToString.bind(this);
	}

	render() {
		return (
			<div className="m-5">
				<button
					className="modal w-full rounded-lg m-0"
					onClick={this.toggleModal}
					aria-label={`Open ${this.props.name} recipe modal`}
				>
					<img className="rounded-lg" src={Image} aria-hidden />
				</button>
				{this.state.modalOpen && this.modalContent()}
			</div>
		);
	}

	/**
	 * Toggles the state of the modal window
	 */
	toggleModal() {
		this.setState((prevState) => ({
			modalOpen: !prevState.modalOpen,
		}));
	}

	/**
	 * Function to get the content of the modal window
	 * @returns createModal()
	 */
	modalContent() {
		return this.createModal(
			<div className="m-5 bg-white grid col-span-full relative rounded-lg shadow-lg p-4 w-auto h-screen overflow-scroll">
				<div>
					<button
						className="float-right pr-2 md:mb-5 mb-2"
						onClick={this.toggleModal}
						aria-label="Close modal"
					>
						X
					</button>
				</div>
				<div className="grid">
					<h1 className="float-left md:mb-5 mb-2 font-bold text-2xl">
						{this.props.name}
					</h1>
					<img
						className="float-right rounded-lg mb-5"
						src={Image}
						alt={this.props.name}
					/>
				</div>
				<div className="grid">
					<h3 className="mb-5 font-semibold text-lg">Ingredients:</h3>
					{this.print(this.ingredientsToString())}
				</div>
				<div className="grid">
					<h3 className="mb-5 font-semibold text-lg">
						Instructions:
					</h3>
					{this.print(this.props.instructions)}
				</div>
			</div>
		);
	}

	ingredientsToString(): string[] {
		var ingredientsAsStrings: string[] = [];
		for (var ing of this.props.ingredients) {
			ingredientsAsStrings.push(ing.ingredient.name + " " + ing.amount);
		}
		console.log("Ingredienser: " + ingredientsAsStrings);
		return ingredientsAsStrings;
	}

	/**
	 * Function to create the modal window using the createPortal function
	 * @param content - React node used in the createPortal function
	 * @returns createPortal()
	 */
	createModal(content: React.ReactNode) {
		return ReactDOM.createPortal(
			<div
				className="bg-black bg-opacity-75 fixed top-0 left-0 w-full h-full grid items-center justify-center"
				onClick={this.toggleModal}
			>
				<div onClick={(e) => e.stopPropagation()}>{content}</div>
			</div>,
			document.getElementById("modal-root")!
		);
	}

	/**
	 * Function to print data into an unordered list
	 * @param list - string array with data
	 * @returns ul element with list elements
	 */
	print(list: string[]) {
		const data = list!;
		const items = data.map((d) => <li key={d}>{d}</li>);

		return <ul className="mb-5 space-y-6">{items}</ul>;
	}
}

export default Recipe;

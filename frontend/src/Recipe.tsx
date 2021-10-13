import React from "react";
import ReactDOM from "react-dom";
import "./tailwind.css";

/**
 * The properties of the Recipe component
 */
type RecipeProps = {
	name: string;
	imgPath: string;
	ingredients: string[];
	instructions: string[];
};

/**
 * The state of the Recipe component
 */
type RecipeState = {
	modalOpen: boolean;
};

/**
 * Recipe component for view a recipe as a modal window.
 */
class Recipe extends React.Component<RecipeProps, RecipeState> {
	constructor(props: RecipeProps) {
		super(props);
		this.state = {
			modalOpen: false,
		};
	}

	render() {
		return (
			<div className="grid justify-center m-2">
				<button
					className="modal w-full rounded-lg md:mb-24 mb-0"
					onClick={() => {
						this.setState((prev, _): { modalOpen: boolean } => {
							return { ...prev, modalOpen: !prev.modalOpen };
						});
					}}
				>
					<img
						className="rounded-lg"
						src={require("./img/img_01.png")}
						alt=""
					/>
				</button>
				{this.state.modalOpen && this.modalContent()}
			</div>
		);
	}

	/**
	 * Function to get the content of the modal window
	 * @returns createModal()
	 */
	modalContent() {
		if (!this.state.modalOpen) {
			return null;
		}

		return this.createModal(
			<div className="m-5 bg-white grid col-auto items-center relative rounded-lg shadow-lg p-4 w-auto h-screen md:h-auto overflow-scroll md:overflow-auto">
				<div>
					<button
						className="float-right pr-2 mb-5"
						onClick={() => {
							this.setState((prev, _): { modalOpen: boolean } => {
								return {
									...prev,
									modalOpen: !prev.modalOpen,
								};
							});
						}}
					>
						X
					</button>
				</div>
				<div>
					<h1 className="float-left mb-5 font-bold">
						{this.props.name}
					</h1>
					<img
						className="float-right rounded-lg mb-5"
						src={require("./img/img_01.png")}
						alt=""
					/>
				</div>
				<div>
					<h3 className="mb-5 font-semibold">Ingredienser:</h3>
					{this.print(this.props.ingredients)}
				</div>
				<div>
					<h3 className="mb-5 font-semibold">Instruksjoner:</h3>
					{this.print(this.props.instructions)}
				</div>
			</div>
		);
	}

	/**
	 * Function to create the modal window using the createPortal function
	 * @param content - React node used in the createPortal function
	 * @returns createPortal()
	 */
	createModal(content: React.ReactNode) {
		return ReactDOM.createPortal(
			<div
				className="bg-black bg-opacity-75 fixed top-0 left-0 w-full h-full flex items-center justify-center"
				onClick={() => {
					this.setState((prev, _): { modalOpen: boolean } => {
						return { ...prev, modalOpen: !prev.modalOpen };
					});
				}}
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

import React from "react";
import IngredientResult from "./IngredientResult";
import "./tailwind.css";

/**
 * All the data about one ingredient that we received from the backend.
 */
type IngredientData = {
	// Name of the ingredient
	name: string;
};

/**
 * The state of the Search component.
 */
type SearchState = {
	// Is the search field focused?
	focused: boolean;
	// The results of a search
	results: IngredientData[];
};

/**
 * Search component for searching ingredients.
 */
class Search extends React.Component<{}, SearchState> {
	constructor(props: {}) {
		super(props);

		this.state = {
			focused: false,
			results: [
				{
					name: "Gulrot",
				},
				{
					name: "Løk",
				},
				{
					name: "Kål",
				},
				{
					name: "Tomat",
				},
				{
					name: "Agurk",
				},
				{
					name: "Død",
				},
			],
		};

		// Setup event handler for blurring
		const body = document.getElementsByTagName(
			"body"
		)[0] as HTMLBodyElement;
		body.addEventListener("click", (_) => this.onBlur());

		this.onFocus = this.onFocus.bind(this);
		this.onBlur = this.onBlur.bind(this);
		this.setFocus = this.setFocus.bind(this);
	}

	render() {
		return (
			<div className="flex justify-center justify-items-center">
				<div
					className={`${
						this.state.focused ? "pb-1" : "h-12"
					} w-10/12 lg:w-2/5 rounded-lg bg-green-100`}
					// Stop propagation of click event bubbling up to the body.
					// Prevents the search component from closing immediately
					onClick={(e) => e.stopPropagation()}
				>
					<input
						type="text"
						placeholder="Search"
						onFocus={this.onFocus}
						onChange={this.onChange}
						className="px-3 py-3 w-full h-12 rounded-lg bg-transparent"
					></input>
					{this.state.focused && (
						<div>
							<hr></hr>
							<h6 className="my-1 px-3 w-98/100">Results:</h6>
							<ul>
								{this.state.results
									.slice(0, 4)
									.map((item: any) => (
										<li key={item.name}>
											<IngredientResult
												name={item.name}
												onAdd={(name) => {
													console.log(name);
												}}
											/>
										</li>
									))}
							</ul>
						</div>
					)}
				</div>
			</div>
		);
	}

	/**
	 * Called when the search component gains focus.
	 */
	onFocus() {
		this.setFocus(true);
	}

	/**
	 * Called when the search component blurs, i.e. loses focus.
	 */
	onBlur() {
		this.setFocus(false);
	}

	/**
	 * Set the focused state.
	 * @param focused New focused value
	 */
	setFocus(focused: boolean) {
		// Update the state of the component by only changing the `focused` field
		this.setState((prev, _) => {
			return { ...prev, focused: focused };
		});
	}

	/**
	 * Called when the input elements value changes, e.i. the user types in the search field.
	 * @param e Change event
	 */
	async onChange(e: React.ChangeEvent<HTMLInputElement>) {
		const term = e.target.value;
		console.log(term);

		// Search with term
		// const res = await fetch(backend + "/ingredients/" + term)

		// Update results
		// const results = ?
		// this.setState((prev, _) => {
		// 	return { ...prev, results: results };
		// });
	}
}

export default Search;

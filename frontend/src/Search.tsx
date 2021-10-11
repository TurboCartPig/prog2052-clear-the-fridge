import React from "react";

/**
 * The state of the Search component.
 */
type SearchState = {
	focused: boolean;
};

/**
 * Search component for searching ingredients.
 */
class Search extends React.Component<{}, SearchState> {
	constructor(props: {}) {
		super(props);

		this.state = {
			focused: false,
		};

		this.onFocus = this.onFocus.bind(this);
	}

	render() {
		return (
			<div className="flex flex-column justify-center align-center">
				<div
					className={`${
						this.state.focused ? "h-48" : "h-12"
					} w-10/12 lg:w-2/5 mx-auto rounded-lg bg-green-100`}
				>
					<input
						type="text"
						placeholder="Search"
						onFocus={() => this.onFocus(true)}
						onBlur={() => this.onFocus(false)}
						onChange={this.onChange}
						className="px-3 py-3 w-full h-12 rounded-lg bg-transparent"
					></input>
					{this.state.focused && (
						<div className="px-3 py-3 mx-auto w-full rounded-lg bg-red-200">
							Hidden
						</div>
					)}
				</div>
			</div>
		);
	}

	/**
	 * Called when the input element gains or looses focus.
	 * @param focused New focused value
	 */
	onFocus(focused: boolean) {
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

		// Create some list component based on response
	}
}

export default Search;

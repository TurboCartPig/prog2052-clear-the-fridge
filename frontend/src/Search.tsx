import _, { DebouncedFunc } from "lodash";
import React from "react";
import IngredientResult from "./IngredientResult";
import { IngredientData } from "./types";
import "./tailwind.css";

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
	/**
	 * Debounced lateinit function called when the search term changes.
	 */
	onChange: DebouncedFunc<(term: string) => void>;

	constructor(props: {}) {
		super(props);

		// Set initial state
		this.state = {
			focused: false,
			results: [],
		};

		// Get default search recommendations from backend
		this.search("");

		// Create a debounced function for rate limiting searching
		this.onChange = _.debounce(this.search, 300);

		// Setup event handler for blurring
		const body = document.querySelector("body") as HTMLBodyElement;
		body.addEventListener("click", (_) => this.onBlur());

		// Setup binds
		this.onFocus = this.onFocus.bind(this);
		this.onBlur = this.onBlur.bind(this);
		this.setFocus = this.setFocus.bind(this);
	}

	render() {
		return (
			<div className="flex justify-center justify-items-center">
				<div
					className={`${
						this.state.focused ? "" : "h-12"
					} w-10/12 lg:w-2/5 rounded-lg bg-green-100`}
					// Stop propagation of click event bubbling up to the body.
					// Prevents the search component from closing immediately
					onClick={(e) => e.stopPropagation()}
				>
					<input
						type="text"
						placeholder="Search"
						onFocus={this.onFocus}
						onChange={(e) => this.onChange(e.target.value)}
						className="px-3 py-3 w-full h-12 rounded-lg bg-transparent"
					></input>
					{this.state.focused && (
						<div>
							<hr></hr>
							<h6 className="my-1 px-3 w-98/100">Results:</h6>
							<ul>
								{this.state.results.slice(0, 4).map((item) => (
									<li key={item.name}>
										<IngredientResult
											data={item}
											onAdd={(data) => {
												console.log(data.name);
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
		this.onChange.cancel();
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
	 * Search for ingredients by querying the backend rest api for ingredients, and updating the list of search results accordingly.
	 * @param term Search term
	 */
	async search(term: string) {
		const backend =
			"https://4e05fc26-03b8-451a-9ca3-369c57c52186.mock.pstmn.io";

		// Only query if we have a search term
		// NOTE: this is a workaround for postman mock server
		if (term !== "") term = "?query=" + term;

		// Search with term
		const res = await fetch(backend + "/api/v1/ingredients" + term);

		// Early return if the search failed
		if (res.status != 200) return;

		// Deserialize the returned json
		const data = await res.json();

		console.log(data);

		// Turn the data into an array of ingredients
		let results: IngredientData[];
		if (Array.isArray(data)) {
			results = data;
		} else {
			results = [data];
		}

		// Update results
		this.setState((prev, _) => {
			return { ...prev, results: results };
		});
	}
}

export default Search;

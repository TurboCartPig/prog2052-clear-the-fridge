import _, { DebouncedFunc } from "lodash";
import React from "react";
import IngredientResult from "./IngredientResult";
import SearchIcon from "./res/search.svg";
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
	onChange = _.debounce(this.search, 300);

	constructor(props: {}) {
		super(props);

		// Set initial state
		this.state = {
			focused: false,
			results: [],
		};

		// Setup binds
		this.onFocus = this.onFocus.bind(this);
		this.onBlur = this.onBlur.bind(this);
		this.setFocus = this.setFocus.bind(this);
	}

	componentDidMount() {
		// Setup event handler for blurring
		const body = document.querySelector("body");
		body?.addEventListener("click", this.onBlur);

		// Get default search recommendations from backend
		this.search("");
	}

	componentWillUnmount() {
		// Tear down event handler for blurring
		const body = document.querySelector("body");
		body?.removeEventListener("click", this.onBlur);
	}

	render() {
		return (
			<div className="flex justify-center justify-items-center">
				<div
					className={`${
						this.state.focused ? "" : "h-12"
					}  w-10/12 lg:w-2/5 rounded-lg bg-search-bar`}
					// Stop propagation of click event bubbling up to the body.
					// Prevents the search component from closing immediately
					onClick={(e) => e.stopPropagation()}
				>
					<div className="flex flex-row">
					<img className="flex-initial m-2" src={SearchIcon} />
					<input
						type="text"
						placeholder="Search"
						onFocus={this.onFocus}
						onChange={(e) => this.onChange(e.target.value)}
						className="flex px-3 py-3 w-full h-12 rounded-lg bg-transparent outline-none"
					></input>
					</div>
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

		// Construct the url to GET
		let url;
		if (term !== "") {
			url = new URL("/api/v1/ingredients/search", backend);
			url.searchParams.append("query", term);
		} else {
			url = new URL("/api/v1/ingredients", backend);
		}

		// Search with term
		const res = await fetch(url.toString());

		// Early return if the search failed
		if (res.status != 200) return;

		// Deserialize the returned json
		const results = await res.json();

		// Update results
		this.setState((prev, _) => {
			return { ...prev, results: results };
		});
	}
}

export default Search;

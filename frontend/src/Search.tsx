import _ from "lodash";
import React from "react";
import IngredientResult from "./IngredientResult";
import { IngredientData } from "./types";
import SearchIcon from "./res/search.svg";
import "./tailwind.css";
import { searchIngredients } from "./api";

type SearchProps = {
	onAdd: (ingredient: IngredientData) => void;
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
class Search extends React.Component<SearchProps, SearchState> {
	/**
	 * Debounced lateinit function called when the search term changes.
	 */
	onChange = _.debounce(this.search, 150);

	constructor(props: SearchProps) {
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
					}  w-full lg:w-8/12 rounded-lg bg-search-bar`}
					// Stop propagation of click event bubbling up to the body.
					// Prevents the search component from closing immediately
					onClick={(e) => e.stopPropagation()}
				>
					<div className="flex flex-row" role="search">
						<img
							className="m-2"
							width="24px"
							height="24px"
							src={SearchIcon}
							aria-hidden
						/>
						<input
							type="search"
							placeholder="Søk etter ingredienser.."
							onFocus={this.onFocus}
							onChange={(e) => this.onChange(e.target.value)}
							className="flex px-3 py-3 w-full h-12 rounded-lg bg-transparent outline-none"
						></input>
					</div>
					{this.state.focused && (
						<div>
							<hr></hr>
							<h6 className="my-1 px-3">Resultater:</h6>
							<ul>
								{this.state.results.slice(0, 4).map((item) => (
									<li key={item.id}>
										<IngredientResult
											data={item}
											onAdd={this.props.onAdd}
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
		this.setState({ focused: focused });
	}

	/**
	 * Search for ingredients by querying the backend rest api for ingredients, and updating the list of search results accordingly.
	 * @param term Search term
	 */
	async search(term: string) {
		try {
			const results = await searchIngredients(term);

			// Update results and rerender
			this.setState({ results: results });
		} catch {
			// Fail silently
			return;
		}
	}
}

export default Search;

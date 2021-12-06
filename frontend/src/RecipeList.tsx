import React from "react";
import Recipe from "./Recipe";
import { RecipeData } from "./types";

type RecipeListProps = {
	recipeData: RecipeData[];
};

type RecipeListState = {};

/**
 * Recipe list component for viewing a list of recipes.
 */
class RecipeList extends React.Component<RecipeListProps, RecipeListState> {
	constructor(props: RecipeListProps) {
		super(props);
	}

	render() {
		return (
			<div className="grid md:grid-cols-2 w-full lg:w-8/12">
				{this.props.recipeData.map((data, key) => {
					return (
						<Recipe
							key={key}
							id={data.id}
							name={data.name}
							ingredients={data.ingredients}
							instructions={data.instructions}
							img={data.img}
						/>
					);
				})}
			</div>
		);
	}
}

export default RecipeList;

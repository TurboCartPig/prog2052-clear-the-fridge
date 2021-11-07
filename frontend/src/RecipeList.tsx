import React from "react";
import Recipe, { RecipeData } from "./Recipe";

type RecipeListProps = {};

type RecipeListState = {
	recipeData: RecipeData;
};

/**
 * Recipe list component for viewing a list of recipes.
 */
class RecipeList extends React.Component<RecipeListProps, RecipeListState> {
	constructor(props: RecipeListProps) {
		super(props);
	}

	render() {
		return (
			<div className="grid grid-cols-2 w-10/12 lg:w-8/12">
				{RecipeData.map((data, key) => {
					return (
						<Recipe
							key={key}
							name={data.name}
							imgPath={data.imgPath}
							ingredients={data.ingredients}
							instructions={data.instructions}
						/>
					);
				})}
			</div>
		);
	}
}

export default RecipeList;

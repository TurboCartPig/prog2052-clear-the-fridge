import React from "react";
import Recipe from "./Recipe";
import { RecipeData } from "./test/data";

/**
 * Recipe list component for viewing a list of recipes.
 */
class RecipeList extends React.Component {
	render() {
		return (
			<div className="grid grid-cols-2 w-10/12 lg:w-2/5">
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

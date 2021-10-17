import React from "react";
import Recipe from "./Recipe";
import img from "./res/img_01.png";
import { RecipeData } from "./test/data";

/**
 * Recipe list component for viewing a list of recipes.
 */
class RecipeList extends React.Component {
	render() {
		return (
			<div className="grid grid-cols-2 justify-center m-2">
				{RecipeData.map((data, key) => {
					return (
						<Recipe
							key={key}
							name={data.name}
							imgPath={img}
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

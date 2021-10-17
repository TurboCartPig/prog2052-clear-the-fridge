import React from "react";
import Recipe from "./Recipe";
import { RecipeData } from "./test/data";

class RecipeList extends React.Component {
	render() {
		return <div className="grid grid-cols-2">{this.getData()}</div>;
	}

	getData() {
		return (
			<div>
				{RecipeData.map((data, key) => {
					return (
						<div key={key}>
							{data.name +
								" , " +
								data.imgPath +
								" ," +
								data.ingredients +
								", " +
								data.instructions}
						</div>
					);
				})}
			</div>
		);
	}
}

export default RecipeList;

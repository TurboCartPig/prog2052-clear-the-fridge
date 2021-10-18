import React from "react";
import Ingredient, { Unit } from "./Ingredient";
import { IngredientData } from "./test/data";

class IngredientList extends React.Component {
	render() {
		return (
			<div className="grid w-10/12 lg:w-2/5">
				{IngredientData.map((data, key) => {
					return (
						<Ingredient
							key={key}
							name={data.name}
							unit={data.unit}
							imgPath={data.imgPath}
						/>
					);
				})}
			</div>
		);
	}
}

export default IngredientList;

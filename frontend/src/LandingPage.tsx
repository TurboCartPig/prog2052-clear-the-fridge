import React from "react";
import Search from "./Search";
import Logo from "./res/logo.svg";
import "./tailwind.css";
import RecipeList from "./RecipeList";
import IngredientList from "./IngredientList";

class LandingPage extends React.Component {
	render() {
		return (
			<div className="grid justify-center bg-clearthefridge">
				<div className="grid justify-center">
					<img
						className="m-12"
						width="100px"
						height="100px"
						src={Logo}
					/>
				</div>
				<Search />
				<div className="grid justify-items-center divide-solid divide-gray-100 divide-y-2">
					<h2 className="md:mt-20 mt-5 mb-3">Ingredients</h2>
					<IngredientList />
				</div>
				<div className="grid justify-items-center divide-solid divide-gray-100 divide-y-2">
					<h2 className="md:mt-20 mt-5 mb-3">Results</h2>
					<RecipeList />
				</div>
			</div>
		);
	}
}

export default LandingPage;

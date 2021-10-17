import React from "react";
import Search from "./Search";
import Ingredient, { Unit } from "./Ingredient";
import Carrot from "./res/carrot.svg";
import Milk from "./res/milk.svg";
import Beef from "./res/beef.svg";
import Logo from "./res/logo.svg";
import "./tailwind.css";
import RecipeList from "./RecipeList";

class LandingPage extends React.Component {
	render() {
		return (
			<div className="grid justify-center">
                <div className="grid justify-center">
				<img
					className="m-12"
					width="200px"
					height="200px"
					src={Logo}
				/>
                </div>
				<Search />
				<Ingredient name="Carrot" unit={Unit.pcs} imgPath={Carrot} />
				<Ingredient name="Milk" unit={Unit.ml} imgPath={Milk} />
				<Ingredient name="Beef" unit={Unit.g} imgPath={Beef} />
				<RecipeList />
			</div>
		);
	}
}

export default LandingPage;

import React from "react";
import Search from "./Search";
import Ingredient, { Unit } from "./Ingredient";
import Recipe from "./Recipe";
import Carrot from "./res/carrot.svg";
import Milk from "./res/milk.svg";
import Beef from "./res/beef.svg";
import "./tailwind.css";

function App() {
	return (
		<div>
			<Search />
			<Ingredient name="Carrot" unit={Unit.pcs} imgPath={Carrot} />
			<Ingredient name="Milk" unit={Unit.ml} imgPath={Milk} />
			<Ingredient name="Beef" unit={Unit.g} imgPath={Beef} />
			<Recipe
				name="Oppskrift 1"
				imgPath="123"
				ingredients={["ingrediens 1", "ingrediens 2"]}
				instructions={[
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
					"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.",
				]}
			/>
			<Recipe
				name="Oppskrift 2"
				imgPath="123"
				ingredients={["ingrediens 1", "ingrediens 2"]}
				instructions={[
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
					"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.",
				]}
			/>
		</div>
	);
}

export default App;

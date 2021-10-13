import React from "react";
import Recipe from "./Recipe";
import Button from "./Button";
import Ingredient, { Unit } from "./Ingredient";
import "./tailwind.css";

function App() {
	return (
		<div>
			<Button />
			<Ingredient name="Carrot" unit={Unit.pcs} />
			<Ingredient name="Milk" unit={Unit.ml} />
			<Ingredient name="Beef" unit={Unit.g} />
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
				name="Oppskrift 1"
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

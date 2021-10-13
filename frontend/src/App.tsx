import React from "react";
import Search from "./Search";
import Ingredient, { Unit } from "./Ingredient";
import "./tailwind.css";

const carrot = require("./res/carrot.svg");
const milk = require("./res/milk.svg");
const beef = require("./res/beef.svg");

function App() {
	return (
		<div>
			{" "}
			<Button />
			<Ingredient name="Carrot" unit={Unit.pcs} imgPath={carrot} />
			<Ingredient name="Milk" unit={Unit.ml} imgPath={milk} />
			<Ingredient name="Beef" unit={Unit.g} imgPath={beef} />
		</div>
	);
}

export default App;

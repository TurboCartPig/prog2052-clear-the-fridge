import React from "react";
import Search from "./Search";
import Ingredient, { Unit } from "./Ingredient";
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
		</div>
	);
}

export default App;

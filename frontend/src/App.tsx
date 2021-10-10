import React from "react";
import Button from "./Button";
import Ingredient, {Unit} from "./Ingredient";
import "./tailwind.css";

function App() {
	return (
		<div>
		<Button/>
        <Ingredient name='Carrot' unit={Unit.pcs}/>
        <Ingredient name='Milk' unit={Unit.ml}/>
        <Ingredient name='Beef' unit={Unit.g}/>
		</div>
	);
}

export default App;

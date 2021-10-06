import React from "react";
import Button from "./Button";
import Ingredient from "./Ingredient";
import "./tailwind.css";

function App() {
	return (
		<div>
			<h1>Hello and welcome</h1>
		<Button />
        <Ingredient name='Gulrot' unit="stk"/>
		</div>
	);
}

export default App;

import React from "react";
import Button from "./Button";
import Ingredient from "./Ingredient";
import "./tailwind.css";

function App() {
	return (
		<div>
		<Button/>
        <Ingredient name='Gulrot' unit="stk"/>
        <Ingredient name='Løk' unit="stk"/>
		</div>
	);
}

export default App;

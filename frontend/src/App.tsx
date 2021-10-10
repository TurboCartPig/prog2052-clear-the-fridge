import React from "react";
import ModalWindow from "./components/ModalWindow";
import ExpandRecipe from "./components/ExpandRecipe";
import "./tailwind.css";

function App() {
	return (
		<div className="grid grid-cols-2 content-center">
			<ModalWindow />
			<ModalWindow />
		</div>
	);
}

export default App;

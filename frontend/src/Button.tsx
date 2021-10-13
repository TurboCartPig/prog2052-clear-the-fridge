import React from "react";
import "./tailwind.css";

function Button() {
	return (
		<div className="flex px-2 py-2">
			<button className="btn" type="button">
				Search
			</button>
		</div>
	);
}

export default Button;

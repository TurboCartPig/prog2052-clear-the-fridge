import React from "react";
import "./tailwind.css";

class Navigation extends React.Component {
	render() {
		return (
			<nav>
				<button className="md:hidden float-right m-4">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-9 w-9"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
				</button>
				<ul>
					<button className="invisible md:visible float-right p-6">
						Login
					</button>
				</ul>
			</nav>
		);
	}
}

export default Navigation;

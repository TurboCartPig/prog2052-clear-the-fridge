import React from "react";
import "./tailwind.css";

type navProps = {};

type navState = {
	menuToggled: boolean;
};

class Navigation extends React.Component<navProps, navState> {
	constructor(props: navProps) {
		super(props);
		this.state = {
			menuToggled: false,
		};
		this.toggleMenu = this.toggleMenu.bind(this);
	}

	render() {
		return (
			<nav>
				<button
					className="md:hidden float-right m-4"
					onClick={this.toggleMenu}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-7 w-7"
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
					<button
						className={
							(this.state.menuToggled ? "" : "invisible ") +
							"md:visible float-right m-4 hover:underline"
						}
					>
						Login
					</button>
				</ul>
			</nav>
		);
	}

	toggleMenu() {
		this.setState((prevState) => ({
			menuToggled: !prevState.menuToggled,
		}));
	}
}

export default Navigation;

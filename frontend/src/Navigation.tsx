import React from "react";
import ReactDOM from "react-dom";
import "./tailwind.css";

type navProps = {};

type navState = {
	menuToggled: boolean;
	loginToggled: boolean;
};

class Navigation extends React.Component<navProps, navState> {
	constructor(props: navProps) {
		super(props);
		this.state = {
			menuToggled: false,
			loginToggled: false,
		};
		this.toggleMenu = this.toggleMenu.bind(this);
		this.toggleLogin = this.toggleLogin.bind(this);
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
				<button
					onClick={this.toggleLogin}
					className={
						(this.state.menuToggled ? "" : "invisible ") +
						"md:visible float-right m-4 hover:underline"
					}
				>
					Login
				</button>
				{this.state.loginToggled && this.renderModal()}
			</nav>
		);
	}

	/**
	 * Toggles the menu state
	 */
	toggleMenu() {
		this.setState((prevState) => ({
			menuToggled: !prevState.menuToggled,
		}));
	}

	/**
	 * Toggles the login state
	 */
	toggleLogin() {
		this.setState((prevstate) => ({
			loginToggled: !prevstate.loginToggled,
		}));
	}

	/**
	 * Renders the login window
	 */
	renderModal() {
		return this.createModal(
			<div className="grid grid-rows-2 content-between justify-between bg-white h-3/6">
				<div className="bg-white h-1/4 self-stretch">
					<div className="m-1 row-start-1">
						<label htmlFor="username">Username</label>
						<input
							className="focus:bg-gray-200 m-1"
							type="text"
							id="username"
						></input>
					</div>
					<div className="m-1 row-start-3 bg-green">
						<label htmlFor="password">Password</label>
						<input
							className="focus:bg-gray-200 m-1"
							type="password"
							id="password"
						></input>
					</div>
				</div>
				<button className="bg-gray-300 hover:bg-gray-400 m-2 rounded-md">
					Login
				</button>
			</div>
		);
	}

	/**
	 * Function to create the modal window using the createPortal function
	 * @param content - React node used in the createPortal function
	 * @returns createPortal()
	 */
	createModal(content: React.ReactNode) {
		return ReactDOM.createPortal(
			<div
				className="bg-black bg-opacity-75 fixed top-0 left-0 w-full h-full grid items-center justify-center"
				onClick={this.toggleLogin}
			>
				<div onClick={(e) => e.stopPropagation()}>{content}</div>
			</div>,
			document.getElementById("modal-root")!
		);
	}
}

export default Navigation;

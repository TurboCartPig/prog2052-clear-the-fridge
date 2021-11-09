import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const reqSvgs = require.context("./res/icons", true, /\.svg$/);

export const svgs = reqSvgs.keys().reduce((images: any, path: string) => {
	images[path] = reqSvgs(path);
	return images;
}, {});

ReactDOM.render(<App />, document.getElementById("root"));

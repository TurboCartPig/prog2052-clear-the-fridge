module.exports = {
	// mode: "jit",
	purge: ["./src/**/*.js", "./src/**/*.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		fontFamily: {
			sans: ["Nunito Regular", "sans-serif"],
			serif: ["serif"],
		},
		extend: {
			transitionProperty: {
				height: "height",
			},
			colors: {
				clearthefridge: "#FCFFFB",
				"search-bar": "#E7F1E1",
				"ingredient-bar": "#FCFFFB",
			},
		},
	},
	variants: {
		extend: {
			backgroundColor: ["active"],
		},
	},
	plugins: [],
};

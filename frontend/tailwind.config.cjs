module.exports = {
	// mode: "jit",
	purge: ["./src/**/*.js", "./src/**/*.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			transitionProperty: {
				height: 'height'
			},
			colors: {
				'clearthefridge' : '#FCFFFB',
				'search-bar' : '#E7F1E1',
				'ingredient-bar' : '#E8CECE',
			}
		},
	},
	variants: {
		extend: {
			backgroundColor: ["active"],
		},
	},
	plugins: [],
};

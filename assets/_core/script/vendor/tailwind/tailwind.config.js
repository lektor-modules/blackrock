/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		/* relevant files from the blog + theme */
		"./content/**/*.{html,md}",
		"./layouts/**/*.html",
		"./assets/_dev/model/dev/*.json",

		/* relevant files from the theme */
		"./layouts/**/*.html",

		/* also pick nested css from theme */
		"../../assets/css/*.css",
	],
	theme: {
		extend: {},
	},
	plugins: [],
}


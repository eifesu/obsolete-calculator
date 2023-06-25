/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
                "primary": "#0055FF",
                "secondary": "#00256F",
                "white": "#E3E3E3",
                "background": "#000818",
                "green-primary": "#00FF38",
                "green-secondary": "#006F18",
                "red-primary": "#FF0000",
                "red-secondary": "#6F0000",
            },
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
		},
	},
	plugins: [],
};

module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		fontFamily: {
			raleway: ['Raleway', 'sans-serif'],
			opensans: ['Open Sans', 'sans-serif'],
		},
		extend: {
			colors: {
				primary: {
					400: '#ffbf85',
					500: '#ffa451',
				},
				secondary: {
					400: '#355dab',
					500: '#1f4590',
				},
				tundora: {
					400: '#535353',
					500: '#4a4a4a',
				},
				dark: '#292929',
			},
		},
	},
	plugins: [require('@tailwindcss/forms')],
};

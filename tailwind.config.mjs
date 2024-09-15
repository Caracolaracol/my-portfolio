/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: "class",
	theme: {
		extend: {
			fontFamily: {
				chrono: ['chronoType'],
				tommyBlack: ['tommyBlack'],
				tommyBold: ['tommyBold'],
				tommyLight: ['tommyLight'],
				tommyMedium: ['tommyMedium'],
				tommyRegular: ['tommyRegular']
			},
		},
		colors: {
			// COLORS
			cerise: '#D94A6D', //  DC3E65,
			ocre: '#DE7F26',
			timberwolf: '#c0a8a2',
			darkpurple: '#332230',
			violet: '#312559',
			// TEXT
			platinum: "#E8CFD4", // DARK
			raisinblack: "#232031", // LIGHT
			// BLACK AND WHITE
			dark: "#232031", // DARK
			snow: "#F4EFF1", // LIGHT

			/* 
			
			// COLORS
			cerise: '#D94A6D',
			ocre: '#DE7F26',
			timberwolf: '#c0a8a2',
			darkpurple: '#332230',
			violet: '#312559',
			// TEXT
			platinum: "#D8D1D4", // DARK
			raisinblack: "#292736", // LIGHT
			// BLACK AND WHITE
			dark: "#211F2A", // DARK
			snow: "#F4EFF1", // LIGHT
			*/

		},
		screens: {
			tablet: '640px',
			laptop: '1024px',
			desktop: '1280px',
			widescreen: '1920px',
			fullhd: '1440px',
		}
	},
	plugins: [require('@tailwindcss/typography')],
}

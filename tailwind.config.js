/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./wp-templates/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
     /* Override the default theme */
     container: {
      center: true,
    },
    fontFamily: {
			firaCode: "Fira Code, monospace",
      inconsolata: "Inconsolata, monospace",
      inter: "Inter, sans-serif",
		},
    colors: {
      main: '#111827',
      secondary: '#0F1117',
      white: '#FFF'
    },
    extend: {},
  },
  plugins: [],
}


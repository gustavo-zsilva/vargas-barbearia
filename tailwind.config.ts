import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'grey': '#F8F7FF',
      'grey-dark': '#9C9C9C',
      'yellow': '#F6B928',
      'brown': '#251605',
      'green': '#1B998B',
      'green-dark': '#198C7F',
      'green-darker': '#11635A',
      'red': '#D64045',
      'red-dark': '#CA2E33',
      'red-darker': '#B93B3F',
    },
    fontSize: {
      'base': '1.125rem', // 18 px
      'lg': '1.5rem',     // 24 px
      'xl': '2.625rem',   // 42 px
    },
    extend: {
      
    },
  },
  plugins: [],
};
export default config;

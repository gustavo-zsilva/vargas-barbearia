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
      "yellow": "#F6B928",
      "brown": "#251605",
      "green": "#1B998B",
      "green-dark": "#198C7F",
      "green-darker": "#11635A",
      "red": "#D64045",
      "red-dark": "#CA2E33",
      "red-darker": "#B93B3F",
    },
    fontFamily: {

    },
    extend: {
      
    },
  },
  plugins: [],
};
export default config;

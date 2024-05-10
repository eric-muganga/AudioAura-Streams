// Import the `withMT` function from the Material Tailwind package using ES Module syntax
import withMT from '@material-tailwind/react/utils/withMT';

/** @type {import('tailwindcss').Config} */
const config = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
});

// Export the configuration using ES Module syntax
export default config;

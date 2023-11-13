// Codes by mahdi tasha
// Importing config type of tailwindCSS
import type { Config } from 'tailwindcss';

// Defining configs of tailwindCSS
const config: Config = {
  content: [
      './app/*.{jsx,tsx,ts,js}',
      './app/**/*.{jsx,tsx,ts,js}',
      './component/*.{jsx,tsx,ts,js}',
      './component/**/*.{jsx,tsx,ts,js}',
      './chunk/*.{jsx,tsx,ts,js}',
      './chunk/**/*.{jsx,tsx,ts,js}',
  ],
  theme: {},
  plugins: [],
}

// Exporting configs of tailwindCSS
export default config;
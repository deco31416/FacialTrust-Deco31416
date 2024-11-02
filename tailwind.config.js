// tailwind.config.js
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      borderRadius: {
        'vento-md': '20px',
        'vento-lg': '25px',
      },
      colors: {
        'vento-primary': '#1e90ff', // Color para enlaces y botones
        'vento-secondary': '#007acc', // Color de hover
        'vento-bg': '#f2f4f6', // Color de fondo en modo claro
        'vento-text': '#333', // Color de texto en modo claro
      },
    },
  },
  plugins: [],
};

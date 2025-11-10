/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'flame': '#FF6B35',
        'spice': '#FF9F1C',
        'leaf': '#2EC4B6',
        'neutral-600': '#374151'
      }
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        "foodie": { 
          "primary": "#FF6B35",
          "secondary": "#2EC4B6",
          "accent": "#FF9F1C",
          "neutral": "#111827",
          "base-100": "#ffffff",
          "info": "#3ABFF8",
          "success": "#36D399",
          "warning": "#FBBD23",
          "error": "#F87272",
        },
      },
      "dark",
      "cupcake"
    ],
  }
}

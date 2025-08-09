import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-text': 'var(--text)',
        'custom-background': 'var(--background)',
        'custom-primary': 'var(--primary)',
        'custom-secondary': 'var(--secondary)',
        'custom-accent': 'var(--accent)',
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        light: {
          "primary": "#29e723",
          "secondary": "#7af0e4",
          "accent": "#5bc5ec",
          "neutral": "#021202",
          "base-100": "#f6fef6",
          "base-200": "#e8f7e8",
          "base-300": "#d1f0d1",
          "base-content": "#021202",
          "info": "#3abff8",
          "success": "#36d399",
          "warning": "#fbbd23",
          "error": "#f87272",
        },
      },
      {
        dark: {
          "primary": "#1fdc18",
          "secondary": "#0f8579",
          "accent": "#137ea4",
          "neutral": "#edfded",
          "base-100": "#010901",
          "base-200": "#1a1f1a",
          "base-300": "#2a3f2a",
          "base-content": "#edfded",
          "info": "#3abff8",
          "success": "#36d399",
          "warning": "#fbbd23",
          "error": "#f87272",
        },
      },
    ],
  },
}
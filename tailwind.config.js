import daisyui from "daisyui"

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#6366f1",          // Modern indigo - used by companies like Discord, Slack
          "primary-focus": "#4f46e5",   // Deeper indigo
          "primary-content": "#ffffff", // White text on primary
          secondary: "#8b5cf6",         // Modern purple - used by Twitch, GitHub
          "secondary-focus": "#7c3aed", // Deeper purple
          "secondary-content": "#ffffff",
          accent: "#06b6d4",            // Modern cyan - used by Tailwind CSS
          "accent-focus": "#0891b2",    // Deeper cyan
          "accent-content": "#ffffff",
          neutral: "#374151",           // Modern gray
          "neutral-focus": "#1f2937",   // Darker gray
          "neutral-content": "#f9fafb", // Light gray text
          "base-100": "#ffffff",        // Pure white background
          "base-200": "#f8fafc",        // Very light gray - used by modern apps
          "base-300": "#e2e8f0",        // Light gray borders
          "base-content": "#1e293b",    // Dark text for good contrast
          info: "#0ea5e9",              // Modern blue
          success: "#10b981",           // Modern green - used by WhatsApp
          warning: "#f59e0b",           // Modern amber
          error: "#ef4444",             // Modern red
        },
      },
      {
        dark: {
          primary: "#818cf8",           // Lighter indigo for dark mode
          "primary-focus": "#6366f1",   // Standard indigo
          "primary-content": "#1e1b4b", // Dark indigo text
          secondary: "#a78bfa",         // Lighter purple for dark mode
          "secondary-focus": "#8b5cf6", // Standard purple
          "secondary-content": "#2e1065", // Dark purple text
          accent: "#22d3ee",            // Lighter cyan for dark mode
          "accent-focus": "#06b6d4",    // Standard cyan
          "accent-content": "#083344",  // Dark cyan text
          neutral: "#1f2937",           // Dark gray background
          "neutral-focus": "#111827",   // Darker gray
          "neutral-content": "#f3f4f6", // Light text
          "base-100": "#1e293b",        // Dark background - used by modern dark themes
          "base-200": "#334155",        // Medium dark gray
          "base-300": "#475569",        // Lighter dark gray
          "base-content": "#f1f5f9",    // Light text for dark backgrounds
          info: "#38bdf8",              // Lighter blue for dark mode
          success: "#34d399",           // Lighter green for dark mode
          warning: "#fbbf24",           // Lighter amber for dark mode
          error: "#f87171",             // Lighter red for dark mode
        },
      },
    ],
  },
}

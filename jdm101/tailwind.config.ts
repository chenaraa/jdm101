import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        // Design tokens — "Shakotan Garage" theme
        graphite: {
          950: "#0a0b0d",
          900: "#111316",
          800: "#181b1f",
          700: "#22262b",
          600: "#2e3339",
          500: "#3d444c"
        },
        redline: {
          DEFAULT: "#c81e3a",
          dim: "#8f1329",
          bright: "#e63955"
        },
        steel: {
          DEFAULT: "#3e5c76",
          light: "#6d8fac"
        },
        chalk: {
          DEFAULT: "#e9e9e4",
          dim: "#a8a9a4"
        }
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
        mono: ["var(--font-mono)"]
      },
      backgroundImage: {
        "grain": "radial-gradient(circle at 1px 1px, rgba(233,233,228,0.045) 1px, transparent 0)"
      },
      keyframes: {
        sweep: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" }
        }
      },
      animation: {
        sweep: "sweep 2.2s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;

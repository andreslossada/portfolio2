/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Fira Code", "system-ui", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#f92672",
          foreground: "hsl(var(--primary-color))",
        },
        secondary: {
          DEFAULT: "#61aeee",
          foreground: "hsl(var(--secondary-color))",
        },
        dark: {
          DEFAULT: "#0a0d1e",
          foreground: "hsl(var(--dark))",
        },
        light: {
          DEFAULT: "#344078",
          foreground: "hsl(var(--light))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      dropShadow: {
        white: "0px 0px 10px #fff",
      },
      shadow: {
        orange: "0px 0px 15px #f59e0b",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
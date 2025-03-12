/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: "true",
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      screens: {
        "dash-2xl": "1300px",
        tablet: "992px",
        "3xl": "1400px",
        alarmheader: "calc(var(--fault-management-all-alarm-header))", // '1912px'
        dashAllAlarmHeader: "calc(var(--dash-all-alarm-header))", //1595px
        dashUrgentOutagesHeader: "calc(var(--dash-urgent-outages-header))", //1840px
      },
      colors: {
        border: "#2A2931",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        "bg-dark-primary": "#060610",
        "text-light-gray": "#9ca3af",
        "bg-dark-secondary": "#0D101A",
        "bg-dark-sidebar": "#17171C",
        primary: "#34EFF7",
        lavender: {
          100: "#bdc8ff",
          200: "#d4e4fe",
        },
        lightSlate: {
          100: "#00003B",
          200: "#01012E",
        },
        "bg-light": "#f2f2f2",
        firebrick: "#9D3737",
        "deep-carmine": "#EC3737",
        "congo-pink": "#F98880",
        golden: "#FCC400",
        "maya-blue": "#7BC0FF",
        "light-green": "#7BFF98",
        "dark-blue": "#00bfff",
        // 'dark-orange': '#ffe502',
        "dark-orange": "#ffa500",
        "dark-grey": "#ffffff",
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
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
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "caret-blink": {
          "0%,70%,100%": {
            opacity: "1",
          },
          "20%,50%": {
            opacity: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "caret-blink": "caret-blink 1.25s ease-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

module.exports = {
  theme: {
    extend: {
      colors: {
        purple: "#4876F6",
        grey: "#888888",
        "highlight-grey": "#ECECEE",
        orange: "#FF8A00",
        "purple-light": "#A559C0",
        "bubble-grey": "#313131",
        "bubble-blue": "#327CFF",
        "code-green": "#02C093",
      },
      lineHeight: {
        "extra-tight": "1.15",
        normal: "1.4",
      },
      fontSize: {
        "7xl": "3.5rem",
        larger: "2rem",
        "mobile-big": "2.6rem",
        massive: "5.38rem",
      },
      linearGradientColors: {
        "black-grey": ["#000000", "#313131"],
      },
      inset: {
        full: "100%",
        "-24": "-24%",
        "12": "12%",
        "40": "40%",
        "6": "6em",
      },
      maxHeight: {
        620: "620px",
      },
    },
    fontFamily: {
      body: ["HK Grotesk", "Helvetica Neue", "Arial", "sans-serif"],
    },
    container: {
      center: true,
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "980px",
      xl: "980px",
    },
    linearGradientColors: theme => theme("colors"),
    radialGradientColors: theme => theme("colors"),
    conicGradientColors: theme => theme("colors"),
  },
  variants: {
    rounded: ["responsive", "first", "last", "hover"],
  },
  plugins: [require("tailwindcss-gradients")],
}

module.exports = {
  theme: {
    extend: {
      colors: {
        "light-grey": "#F6F6F6",
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
      linearGradientColors: {
        "black-grey": ["#000000", "#313131"],
      },
      inset: {
        full: "100%",
        double: "200%",
        "-24": "-24%",
        "12": "12%",
        "40": "40%",
        "6": "6em",
      },
      maxHeight: {
        620: "620px",
      },
      minWidth: {
        245: "245px",
      },
      spacing: {
        "6vw": "6vw",
        full: "100%",
        "32p": "32px",
      },
    },
    fontFamily: {
      body: ["HK Grotesk", "Helvetica Neue", "Arial", "sans-serif"],
    },
    container: {
      center: true,
    },
    fontSize: {
      xxs: "14px",
      xs: "18px",
      sm: "20px",
      base: "24px",
      md: "28px",
      lg: "32px",
      xl: "42px",
      "2xl": "48px",
      "3xl": "72px",
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

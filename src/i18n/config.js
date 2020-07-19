import i18next from "i18next"

i18next.init({
  fallbackLng: "en",
  resources: {
    en: {
      translations: require("../locales/en.json"),
    },
    sv: {
      translations: require("../locales/sv.json"),
    },
  },
  ns: ["translations"],
  defaultNS: "translations",
  returnObjects: true,
  debug: process.env.NODE_ENV === "development",
  interpolation: {
    escapeValue: false,
  },
  react: {
    wait: true,
  },
})

i18next.languages = ["en", "sv"]

export default i18next

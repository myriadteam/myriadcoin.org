import i18next from "i18next"
import numeral from "numeral"
import LanguageDetector from "i18next-browser-languagedetector"

i18next.use(LanguageDetector).init({
  fallbackLng: "en",
  supportedLngs: ["en", "eo", "es", "sv"],
  resources: {
    en: {
      translations: require("../locales/en.json"),
    },
    eo: {
      translations: require("../locales/eo.json"),
    },
    es: {
      translations: require("../locales/es.json"),
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
    format: function (value, format) {
      if (format === "uppercase") return value.toUpperCase()
      if (format === "0,0") return numeral(value).format(format)
      return value
    },
  },
  react: {
    wait: true,
    transSupportBasicHtmlNodes: true,
    transKeepBasicHtmlNodesFor: ["br", "strong", "i"],
  },
})

i18next.languages = ["en", "eo", "sv", "es"]

export default i18next

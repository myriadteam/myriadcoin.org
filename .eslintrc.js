module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: `react-app`,
  rules: {
    "no-unused-vars": ["warn", { varsIgnorePattern: "^tw$|^css$" }],
  },
}

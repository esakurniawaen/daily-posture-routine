/** @type {import("prettier").Config} */
module.exports = {
  plugins: [require.resolve("prettier-plugin-tailwindcss")],
  printWidth: 80,
  trailingComma: "all",
  useTabs: false,
  tabWidth: 4,
  semi: true,
  singleQuote: true,
};

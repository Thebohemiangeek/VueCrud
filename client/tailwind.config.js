module.exports = {
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
  "scripts": {
    //... place these after the four scripts created by CRA
    "build:styles": "postcss src/tailwind.css -o src/styles.css",
    "prebuild": "yarn build:styles",
    "prestart": "yarn build:styles"
  }
}

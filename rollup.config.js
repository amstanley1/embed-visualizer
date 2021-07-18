import resolve from "rollup-plugin-node-resolve";
import babel from "rollup-plugin-babel";
import postcss from "rollup-plugin-postcss";

export default {
  input: "src/index.js",
  output: {
    file: "dist/bundle.js",
    format: "cjs",
  },
  // All the used libs needs to be here
  external: [
    "react",
    "react-proptypes",
    "react-color",
    "react-dom",
    "react-addons-css-transition-group",
    "simple-markdown",
    "twemoji",
    "moment",
    "lodash.debounce",
    "highlight.js",
    "codemirror",
    "ajv",
  ],
  plugins: [
    resolve({
      extensions: [".js", ".jsx"],
    }),
    babel({
      exclude: "node_modules/**",
    }),
    postcss({
      extensions: [".css"],
    }),
  ],
};

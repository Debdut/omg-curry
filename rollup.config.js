import babel from "rollup-plugin-babel";
import { terser } from "rollup-plugin-terser";

export default {
  input: "./src/index.js",
  output: {
    file: "index.js",
    format: "umd",
    name: "curry",
  },
  plugins: [babel({ exclude: "node_modules/**" }), terser()],
};

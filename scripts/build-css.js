import fs from "node:fs";
import postcssJs from "postcss-js";
import { utilities } from "../src/utilities.js";

const rules = Object.fromEntries(
  Object.entries(utilities).map(([name, styles]) => [`.${name}`, styles]),
);

// Read static animation styles
const animationsCSS = fs.readFileSync("src/animations.css", "utf8");

const generatedCSS = postcssJs.parse(rules).toResult().css;

// Combine both sources
const css = [
  "/* Generated utility classes */",
  generatedCSS,
  "/* Animations */",
  animationsCSS,
].join("\n\n");

fs.mkdirSync("dist", { recursive: true });
fs.writeFileSync("dist/fe-utilities.css", css);

console.log("Generated dist/fe-utilities.css");

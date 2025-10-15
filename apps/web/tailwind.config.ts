import type { Config } from "tailwindcss";
import baseConfig from "@collabverse/ui/tailwind.preset";

const config: Config = {
  presets: [baseConfig],
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
    "../../packages/ui/src/**/*.{js,ts,jsx,tsx}"
  ]
};

export default config;

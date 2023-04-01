import fs from "fs";
import path from "path";
import { extractStyle } from "@ant-design/static-style-extract";
import withTheme from "../theme";

const outputDir = "./theme/output";

const outputStylePath = path.resolve(outputDir, "antdStyle.ts");
const outputCssPath = path.resolve(outputDir, "antd.min.css");

if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

// 1. default theme

// const css = extractStyle();

// 2. With custom theme

const css = extractStyle(withTheme);

fs.writeFileSync(outputStylePath, `export default \`${css.replace(/\\/g, '\\\\')}\``);
fs.writeFileSync(outputCssPath, css);

console.log(`🎉 Antd CSS generated at \n- ${outputStylePath}: if you want to inject style into html to optimize the first screen rendering experience.\n- ${outputCssPath}: If you want to import extra css file in js.`);

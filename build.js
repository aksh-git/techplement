import { readFileSync, writeFileSync } from "fs";
import { marked, Renderer } from "marked";
import generateTableOfContents from "./lib/tmpl.js";
import slugger from "github-slugger";

const readmeFilePath = `./README.md`;
const templateFilePath = "./template/tmpl_docs.html";
const outputFilePath = `./static/index.html`;

const readmeContent = readFileSync(readmeFilePath, "utf-8");
// Generate the table of contents dynamically
const tableOfContents = generateTableOfContents(readmeContent);

const renderer = new Renderer();
const sluggerInstance = new slugger();

renderer.heading = function (text, level, raw) {
  const slug = sluggerInstance.slug(raw);
  return `<h${level} id="${slug}">${text}</h${level}>\n`;
};

const htmlContent = marked(readmeContent, { gfm: true, renderer });

// Inject the generated table of contents into the HTML template
let templateContent = readFileSync(templateFilePath, "utf-8");
templateContent = templateContent.replace("<!--TOC-->", tableOfContents);
const finalHtml = templateContent.replace("<!--HTML_CONTENT-->", htmlContent);

// Write the final HTML to a file
writeFileSync(outputFilePath, finalHtml);

console.log("HTML content generated successfully.");

var fs = require("fs");

const now = new Date();
const dateString = `${now.getFullYear()}-${now.getMonth()}-${now.getDay()}`;

const title = process.argv[process.argv.indexOf("--post") + 1];

if (!title) {
  throw "必须添加标题";
}

const dirPath = `src/pages/${dateString}-${title}/`;
const filePath = `${dirPath}${title}.md`;
const content = `---
title: 
date: "${new Date().toISOString()}"
path: "/${title}/"
tags:
- 
- 
- 
---`;

fs.mkdirSync(dirPath, 0755);
fs.writeFileSync(filePath, content);

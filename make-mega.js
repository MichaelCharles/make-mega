#!/usr/bin/env node
"use strict";
const fs = require("fs"),
  mb = 1000000,
  size = process.argv[2] || 100;

let content = "0";

function main() {
  if (size > 700) throw new Error("Sorry, I can only make files up to 700mb.");

  console.log("Generating base string...");
  while (content.length < size * mb) {
    let additive = content;
    if (additive.length > mb * 600) additive = additive.substring(0, 10 * mb);
    if (additive.length > mb * 500) additive = additive.substring(0, 50 * mb);
    content = `${content}${additive}`;
  }

  console.log(`Trimming to ${size}mb...`);
  const offset = content.length - mb * size;
  content = content.substring(0, content.length - offset);

  console.log(`Attempting to write...`);
  // eslint-disable-next-line node/prefer-promises/fs
  fs.writeFile(
    Math.floor(content.length / 1000 / 1000) + "-mb.txt",
    content,
    error => {
      if (error) throw error;
      console.log(`${size}mb file successfully created.`);
    }
  );
}

try {
  main();
} catch ({ message }) {
  console.log(message);
}

#!/usr/bin/env node

const program = require("commander");
const banter = require("./index");
const package = require("./package.json");
const cowsay = require("cowsay");
const fs = require("fs");

program
  .description("banter - lighthearted remarks for when you need to break up the monotony")
  .version(package.version, "-v, --version")
  .option("-l, --list", "list all the jokes")
  .option("-t, --tag <value>", "filter banter with tag")
  .option("-j, --jokes", "return jokes only (WIP)")
  .option("-q, --quotes", "return quotes only (WIP)")
  .option("-a, --add", "interactively add a record (WIP)");

program.on("--help", () => {
  console.log("");
  console.log("Examples:");
  console.log("  $ banter");
  console.log("  $ banter --tag react");
  console.log("  $ banter -t javascript");
  console.log("  $ banter --list");
  console.log("  $ banter -l");
  console.log("  $ banter -lt react");
  console.log("");
});

program.parse(process.argv);

const cowFolder = "./node_modules/cowsay/cows/";
let possibleCows = [];

fs.readdir(cowFolder, (err, files) => {
  files.forEach(file => {
    possibleCows.push(file.slice(0, -4));
  });
  const randomIndex = Math.floor(Math.random() * possibleCows.length)
  console.log(
    "\n",
    program.list
      ? banter.list(program.tag).join("\n")
      : cowsay.say({
        text: banter.random(program.tag),
        W: 60, // Specifies roughly where the message should be wrapped. equivalent to cowsay -W
        f: possibleCows[randomIndex],
      }),
    "\n"
  );
});

#!/usr/bin/env node

const program = require("commander");
const banter = require("./index");
const package = require('./package.json');

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

console.log(
  program.list
    ? banter.list(program.tag).join("\n")
    : banter.random(program.tag)
);

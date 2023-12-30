#!/usr/bin/env node

const program = require("commander");
const banter = require("./index");
const package = require("./package.json");
const cowsay = require("cowsay");
const fs = require("fs");
const path = require("path");

program
  .description("banter - lighthearted remarks for when you need to break up the monotony")
  .version(package.version, "-v, --version")
  .option("-l, --list", "list all the jokes")
  .option("-t, --tag <value>", "filter banter with tag")
  .option("-j, --jokes", "return jokes only (WIP)")
  .option("-q, --quotes", "return quotes only (WIP)")
  .option("-a, --add", "interactively add a record (WIP)")
  .on("--help", () => {
    console.log("\nExamples:");
    ["", "--tag react", "-t javascript", "--list", "-l", "-lt react"].forEach(cmd => console.log(`  $ banter ${cmd}`));
    console.log("");
  })
  .parse(process.argv);

const cowFolder = "./node_modules/cowsay/cows/";
const route = path.resolve(__dirname, cowFolder);

fs.readdir(route, (err, files) => {
  if (files && files.length > 0) {
    const possibleCows = files.filter(file => {
      const cowPath = path.join(route, file);
      const cowContent = fs.readFileSync(cowPath, 'utf8');
      return cowContent.length <= 1100 && cowContent.length >= 100 &&
        // cow content doesn't contain 'you'
        cowContent.indexOf("you") === -1;
    }).map(file => file.slice(0, -4));

    const randomCow = possibleCows[Math.floor(Math.random() * possibleCows.length)] || "stegosaurus";
    const output = program.list ? banter.list(program.tag).join("\n") : cowsay.say({
      text: banter.random(program.tag),
      W: 50,
      f: randomCow,
    });

    console.log("\n", output, "\n");
  }
});

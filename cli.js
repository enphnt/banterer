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
  .option("-l, --list", "list all the banter")
  .option("-t, --tag <value>", "filter banter using a tag")
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
        cowContent.indexOf("you") === -1 &&
        cowContent.indexOf(" ;=") === -1 &&
        cowContent.indexOf(", .+X") === -1 &&
        cowContent.indexOf(". .)(,") === -1 &&
        cowContent.indexOf(":HHHHHHHHHHHHHHHHHHX,") === -1 &&
        cowContent.indexOf("ζ, ヘ /::(___)|/:(￣￣ )") === -1 &&
        cowContent.indexOf("X MM X") === -1 &&
        cowContent.indexOf("=-=:=") === -1 &&
        cowContent.indexOf(",;X@@X%/;=----=:/%X@@X/,") === -1 &&
        cowContent.indexOf(".,-, .-,.") === -1 &&
        cowContent.indexOf("OOOOOOOOOOOOOOOOOOOOOOOOO") === -1 &&
        cowContent.indexOf("Skywalker") === -1 &&
        cowContent.indexOf("Vader") === -1 &&
        cowContent.indexOf("BECAUSE") === -1 &&
        cowContent.indexOf(";;;ﾌ") === -1 &&
        cowContent.indexOf("International Business Machines") === -1 &&
        cowContent.indexOf("####$=") === -1;
    }).map(file => file.slice(0, -4));

    const randomCow = possibleCows[Math.floor(Math.random() * possibleCows.length)] || "stegosaurus";
    const output = program.list ? banter.list(program.tag).join("\n") : cowsay.say({
      text: "\n" + banter.random(program.tag) + "\n\n",
      W: 50,
      f: randomCow,
    });

    console.log("\n", output, "\n");
  }
});

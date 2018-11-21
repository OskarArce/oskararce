#!/usr/bin/env node

const inquirer = require("inquirer");
const cfonts = require("cfonts");
const opn = require("opn");

const actions = {
  Twitter() {
    opn("https://twitter.com/oscaruko");
  },
  LinkedIn() {
    opn("https://www.linkedin.com/in/oskar-arce-094aa334/");
  },
  Blog() {
    opn("http://oskararce.com/");
  },
  GitHub() {
    opn("https://github.com/oskararce");
  },
  JSON() {
    console.log(JSON.stringify(require('./me.json'), null, 3));
  },
  Quit() {
    process.exit(0);
  }
};

cfonts.say("Oskar Arce", {
  font: "chrome",
  colors: ["white", "red", "green"]
});

console.log(`Greetings, my name is Oskar Arce.
I am a tech enthusiastic and a chess game lover.
I specialize in Full-stack Web Development.
I work at Intelygenz on several projects.
`);

inquirer
  .prompt([
    {
      type: "list",
      name: "choice",
      message: "Where would you like to go?",
      choices: [
        "Twitter",
        "LinkedIn",
        "Blog",
        "GitHub",
        "JSON",
        "Quit"
      ]
    }
  ])
  .then(answers => {
    actions[answers.choice]();
    process.exit(0);
  });

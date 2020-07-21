const inq = require("inquirer");
const fs = require("fs");
//const generateMarkdown = require("./utils/generateMarkdown.js");


inq.prompt([
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "username"
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email"
    },
    {
        type: "input",
        message: "What is your project's name?",
        name: "projName"
    },
    {
        type: "input",
        message: "Please write a short descripiton of your project.",
        name: "desc"
    },
    {
        type: "list",
        message: "What kind of license should your project have?",
        choices: ["MIT", "Apache%202.0", "GPLv3", "BSD%203--Clause", "None",],
        name: "license"
    },
    {
        type: "input",
        message: "What command should be run to install dependencies?",
        default: "npm i",
        name: "depend"
    },
    {
        type: "input",
        message: "What command should be run to run tests?",
        name: "commands"
    },
    {
        type: "input",
        message: "What does the user need to know about using the repo?",
        name: "info"
    },
    {
        type: "input",
        message: "What does the user need to know about contributing to the repo?",
        name: "contributing"
    },
]).then(response => {
    const fileName = response.projName + ".md";

    const template =
        `
# Project - ${response.projName}

![GitHub license](https://img.shields.io/badge/License-${response.license}-blue.svg)

## Description
${response.desc}

## Table of Contents
Installation(#Installation)
Usage(#Usage)
License(#License)
Contributing(#Contributing)
Tests(#Tests)
Questions(#Questions)

## Installation / Dependencies
${response.depend}

## Usage
${response.info}

## License
${response.license}
    
## Contributing
${response.contributing}

## Tests
${response.commands}

## Questions
GitHub: https://github.com/${response.username}
Email: ${response.email}
    `
    fs.writeFile(fileName, template, (err) => {
        if (err) { console.log(err) }
    });
});

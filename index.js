const inq = require("inquirer");
//const fs = require("fs");
//const util = require('util');

inq.prompt([
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "username"
    },
    {
        type:"input",
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
        type: "input",
        message: "What kind of license should your project have?",
        name: "license"
    },
    {
        type: "input",
        message:"What command should be run to install dependencies?",
        name:"depend"
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
        name: "contributer"
    }
]).then(response => {
    console.log(response);
})



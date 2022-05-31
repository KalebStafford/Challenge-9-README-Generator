// Allows us to use util functions (needed for writeFileAsync function)
let util = require("util");

// Allows us to use file system functions (needed for writeFileAsync function)
let fs = require("fs");

// Convert a method that returns responses using a callback function to return responses in a promise object
let writeFileAsync = util.promisify(fs.writeFile);

// Allows us to use inquirer (must install first)
let inquirer = require("inquirer");

// creates generateMarkdown function from generateMarkdown.js in the Utils folder
let generateMarkdown = require("./utils/generateMarkdown");
// Array of questions for user input
let questions = [
    {
      type: "input",
      message: "Title?",
      name: "Title",
    },
    {
      type: "input",
      message: "Description?",
      name: "Description",
    },
    {
      type: "input",
      message: "Steps required to install your project?",
      name: "Installation",
    },
    {
      type: "input",
      message: "Instructions for use?",
      name: "Use",
    },
    {
      type: "input",
      message: "Your Github username?",
      name: "GithubUsername",
    },
    {
      type: "input",
      message: "Collaborators?",
      name: "Collaborators",
    },
    {
      type: "input",
      message: "License?",
      name: "License",
    },
    {
      type: "input",
      message: "Badge Label?",
      name: "BadgeLabel",
    },
    {
      type: "input",
      message: "Badge Message?",
      name: "BadgeMessage",
    },
    {
      type: "list",
      message: "Badge Color?",
      name: "BadgeColor",
      choices: [
        "brightgreen",
        "green",
        "yellowgreen",
        "yellow",
        "orange",
        "red",
        "lightgrey",
        "blue",
      ],
    },
  ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
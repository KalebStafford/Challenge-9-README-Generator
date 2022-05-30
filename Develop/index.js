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
// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
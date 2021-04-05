const inquirer = require("inquirer")
const jest = require("jest")
const generateHtml = require("./src/generateHtml")


//const employees = [];

const questions = [

    {
        type: 'list',
        name: 'member',
        message: 'What role would you like to chose?',
        choices: ["Engineer", "Intern", "Done adding team members"]
    },

    {
        type: 'input',
        name: 'name',
        message: 'Enter employee name',
    },

    {
        type: 'input',
        name: 'id',
        message: 'Enter employee ID number',
    },

    {
        type: 'input',
        name: 'officeNumber',
        message: 'Enter managers office number',
    },

    {
        type: 'input',
        name: 'github',
        message: 'Enter github username',
    },

    {
        type: 'input',
        name: 'school',
        message: 'Enter current school of intern',
    },

    {
        type: 'confirm',
        name: 'addEmployee',
        default: true,
    },


]
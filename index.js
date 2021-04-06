const inquirer = require("inquirer")
const jest = require("jest")
const generateHtml = require("./src/generateHtml")


const employees = [];

function addEmployee() {
    inquirer.prompt([

    {
        type: 'input',
        name: 'name',
        message: 'Enter team member name'
    },

    {
        type: 'list',
        name: 'role',
        message: 'Enter the employees role',
        choices: ["Engineer", "Intern", "Manager"]
    },

    {
        type: 'input',
        name: 'id',
        message: 'Enter employee ID number',
    },

    {
        type: 'input',
        name: 'email',
        message: 'Enter employees email',
    }])
    .then(function({name, role, id, email}) {
        if (role === "Engineer") {
            
        }
    }


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
        message: 'Enter current school'
    },

    {
        type: 'confirm',
        name: 'addEmployee',
        default: true,
    },

    ])
}
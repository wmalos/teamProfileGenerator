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
        }
    ])
        .then(function ({ name, role, id, email }) {
            let roleInfo = "";
            if (role === "Engineer") {
                roleInfo = "GitHub username";
            } else if (role === "Intern") {
                roleInfo = "school name";
            } else {
                roleInfo = "office number";
            }
            inquirer.prompt([

            {
                type: 'input',
                name: "roleInfo",
                message: `Enter team member's ${roleInfo}`,
            },

            {
                type: 'list',
                name: 'addMember',
                message: 'Do you want to add another team member?',
                choices: ["yes","no"]
            },

            then(function() {
                if (moreMembers === "yes") {
                    addEmployee();
                } else {
                    generateHtml();
                }
            })

        }




   // {
    //type: 'confirm',
    //    name: 'addEmployee',
   //     default: true,
    //},

    ])
}
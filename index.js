const inquirer = require("inquirer")
const fs = require("fs");
const jest = require("jest")
const generateHtml = require("./src/generateHtml")

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const intern = require('./lib/Intern');
const Intern = require("./lib/Intern");

const employees = [];

const questions = [
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
    },

    {
        type: 'input',
        message: 'Enter Managers office number',
        name: 'officeNumber',
        when: ( answers ) => answers.role === "Manager",
    },

    {
        type: 'input',
        message: 'Enter Github username',
        name: 'github',
        when: ( answers ) => answers.role === "Engineer",
    },

    {
        type: 'input',
        message: 'Enter the school of the intern',
        name: 'school',
        when: ( answers ) => answers.role === "Intern",
    },


];


const promptUser = () => {
    
    inquirer.prompt(questions)
        .then(userResponse => {

            switch (userResponse.role) {
                case "Manager":
                    const manager = new Manager(
                        userResponse.name,
                        userResponse.id, 
                        userResponse.email, 
                        userResponse.officeNumber)
                        employees.push(manager)
                    break;
                case "Engineer":
                    const engineer = new Engineer(
                        userResponse.name,
                        userResponse.id, 
                        userResponse.email, 
                        userResponse.github)
                        employees.push(engineer)
                    break;
                case "Intern":
                    const intern = new Intern(
                        userResponse.name,
                        userResponse.id, 
                        userResponse.email, 
                        userResponse.school)
                        employees.push(intern)
                    break;
            
                default:
                    break;
            }

            addEmployee();
        });
};

function addEmployee() {
    inquirer.prompt( [
        {
            type: 'list',
            name: 'addMember',
            message: 'Do you want to add another team member?',
            choices: ["yes", "no"]
        },
    ]).then(function (answers) {
        if (answers.addMember === "yes") {
            promptUser();
        } else {
            console.log (employees);
            generateHtml(employees);
        }
    })
}

const createProfile = (generateHtml) => {
    fs.writeFile('./dist/index.html', generateHtml, err => {
        if (err) {
            console.log("There was an error generating html")
            return;
        }
        console.log("Succesfully generated Team Profile!")
    })
}

promptUser();
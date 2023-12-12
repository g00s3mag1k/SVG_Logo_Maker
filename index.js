const inquirer = require("inquirer");

const fs = require("fs");

const {} = require ('');

function promptInput () {
    inquirer.prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Enter up to three characters for a text display',
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter a color keyword or hexadecimal number for text',
        },
        {
            type: 'input',
            name: 'backgroundColor',
            message: 'Enter a color keyword or hexadecimal number for background',
        },
        {
            type: 'list',
            name: 'shape',
            message: 'What shape would you like your logo?',
        },
    ])
}
.then() => {
    
}
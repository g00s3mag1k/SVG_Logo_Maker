const inquirer = require("inquirer");
const fs = require("fs");
const { Circle, Square, Triangle } = require('./lib/shapes');

class SVG {
    constructor() {
        this.textVar = '';
        this.shapeVar = '';
    } render() {
        return
    }
}

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
.then((data) => {
    if (data.text.length > 3) {
        console.log('Must enter only three characters');
    } else {
        writeToFile('logo.svg', data);
    }
});
}

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            return console.log(err);
        }
        console.log('SVG logo has been created!');
    });
};

promptInput();
//calling function to execute inquirer prompts in command line application
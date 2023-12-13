const inquirer = require("inquirer");
const fs = require("fs");
const { Circle, Square, Triangle } = require('./lib/shapes.js');

class SVG {
    constructor() {
        this.textVar = ''
        this.shapeVar = ''
    } render() {
        return <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"></svg>
    }
    setText(text,color) {
        this.textVar = `<text x='150' y='125' font-size='60' text-anchor='middle' fill=${color}>${text}</text>`
    }
    setShape(shape) {
        this.shapeVar = shape.render()
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
            choices: ['Circle', 'Square', 'Triangle'],
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

module.exports = SVG
const fs = require("fs");
const inquirer = require("inquirer");
const { Circle, Square, Triangle } = require('./lib/shapes.js');

class SVG {
    constructor() {
        this.textVar = '';
        this.shapeVar = '';
    }

    render() {
        const svgContent = <svg width="300" height="250">${this.shapeVar}${this.textVar}</svg>;
        return svgContent;
    }

    setText(text, color) {
        this.textVar = <text x='150' y='125' font-size='60' text-anchor='middle' fill='${color}'>${text}</text>;
    }

    setShape(shape) {
        this.shapeVar = shape.render();
    }
}

function promptInput () {
    inquirer.prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Enter up to three characters for a text display',
            validate: function(input) {
                if (input.length > 3) {
                    return 'Must enter only three characters';
                }
                return true;
            }
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter a color keyword or hexadecimal number for text'
        },
        {
            type: 'input',
            name: 'backgroundColor',
            message: 'Enter a color keyword or hexadecimal number for background'
        },
        {
            type: 'list',
            name: 'shape',
            message: 'What shape would you like your logo?',
            choices: ['Circle', 'Square', 'Triangle']
        }
    ])
    .then((data) => {
        writeToFile('logo.svg', data);
    });
}

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log('SVG logo has been created!');
        }
    });
}

promptInput();
//calling function to execute inquirer prompts in command line application

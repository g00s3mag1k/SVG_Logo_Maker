const fs = require('fs');
const inquirer = require('inquirer');
const { Circle, Square, Triangle } = require('./lib/shapes');

class SVG {
    constructor() {
        this.textVar = '';
        this.shapeVar = '';
        this.backgroundColor = '';
    }

    render() {
        const svgContent = `<svg width="300" height="250" style="background-color: white">${this.shapeVar}${this.textVar}</svg>`;
        return svgContent;
    }

    setText(text, color) {
        this.textVar = `<text x='145' y='125' font-size='50' text-anchor='middle' fill='${color}'>${text}</text>`;
    }

    setShape(shape) {
        this.shapeVar = shape.render();
    }

    setBackgroundColor(color) {
        this.backgroundColor = color;
    }
}

function Init() {
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
            name: 'color',
            message: 'Enter a color keyword or hexadecimal number for background'
        },
        {
            type: 'list',
            name: 'shape',
            message: 'What shape would you like your logo?',
            choices: ['Circle', 'Square', 'Triangle']
        },
    ])
    .then(function(data) {
        const svg = new SVG();
        svg.setText(data.text, data.textColor);
        svg.setBackgroundColor(data.color);

        switch(data.shape) {
            case 'Circle':
                svg.setShape(new Circle(data.color));
                break;
            case 'Square':
                svg.setShape(new Square(data.color));
                break;
            case 'Triangle':
                svg.setShape(new Triangle(data.color));
                break;
            default:
                console.log('Invalid shape selected');
        }

        writeToFile('logo.svg', svg.render());
    });
}

function writeToFile(fileName, svgContent) {
    fs.writeFile(fileName, svgContent, function(err) {
        if (err) {
            console.log(err);
        } else {
            console.log('SVG logo has been created!');
        }
    });
}

Init();
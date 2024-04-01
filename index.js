// let inquirer;
// try {
//     inquirer = require('inquirer');
// } catch (err) {
//     inquirer = require('inquirer').default;
// }
const inquirer = require('inquirer');
const { Circle, Square, Triangle } = require('./lib/shapes');

class SVG {
    constructor() {
        this.textVar = '';
        this.shapeVar = '';
    }

    render() {
        const svgContent = `<svg width="300" height="250">${this.shapeVar}${this.textVar}</svg>`;
        return svgContent;
    }

    setText(text, color) {
        this.textVar = `<text x='150' y='125' font-size='60' text-anchor='middle' fill='${color}'>${text}</text>`;
    }

    // setColor(color) {
    //     this.color = color;
    // }

    setShape(shape) {
        this.shapeVar = shape.render();
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
            name: 'backgroundColor',
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
    
        switch(data.shape) {
            case 'Circle':
                svg.setShape(new Circle());
                break;
            case 'Square':
                svg.setShape(new Square());
                break;
            case 'Triangle':
                svg.setShape(new Triangle());
                break;
            default:
                console.log('Invalid shape selected');
        }
    
        writeToFile('logo.svg', svg.render());
    });
}

// function writeToFile(fileName, svgContent) {
//     // Write the SVG content to a file
// }

Init();

// const fs = require("fs");
// const inquirer = require('inquirer');
// const { Circle, Square, Triangle } = require('./lib/shapes');

// class SVG {
//     constructor() {
//         this.textVar = '';
//         this.shapeVar = '';
//     }

//     render() {
//         const svgContent = `<svg width="300" height="250">${this.shapeVar}${this.textVar}</svg>`;
//         return svgContent;
//     }

//     setText(text, color) {
//         this.textVar = `<text x='150' y='125' font-size='60' text-anchor='middle' fill='${color}'>${text}</text>`;
//     }

//     setShape(shape) {
//         this.shapeVar = shape.render();
//     }
// }

// function Init() {
//     inquirer.prompt([
//         {
//             type: 'input',
//             name: 'text',
//             message: 'Enter up to three characters for a text display',
//             validate: function(input) {
//                 if (input.length > 3) {
//                     return 'Must enter only three characters';
//                 }
//                 return true;
//             }
//         },
//         {
//             type: 'input',
//             name: 'textColor',
//             message: 'Enter a color keyword or hexadecimal number for text'
//         },
//         {
//             type: 'input',
//             name: 'backgroundColor',
//             message: 'Enter a color keyword or hexadecimal number for background'
//         },
//         {
//             type: 'list',
//             name: 'shape',
//             message: 'What shape would you like your logo?',
//             choices: ['Circle', 'Square', 'Triangle']
//         }
//     ])
//     .then((data) => {
//         const svg = new SVG();
//         svg.setText(data.text, data.textColor);

//         switch(data.shape) {
//             case 'Circle':
//                 svg.setShape(new Circle());
//                 break;
//             case 'Square':
//                 svg.setShape(new Square());
//                 break;
//             case 'Triangle':
//                 svg.setShape(new Triangle());
//                 break;
//             default:
//                 console.log('Invalid shape selected');
//         }

//         writeToFile('logo.svg', svg.render());
//     });
// }

// function writeToFile(fileName, svgContent) {
//     fs.writeFile(fileName, svgContent, function(err) {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log('SVG logo has been created!');
//         }
//     });
// }

// Init();

// module.exports = SVG;

// function writeToFile(fileName, data) {
//     const svgContent = 
//         `<svg width="200" height="200">
//             <rect width="100%" height="100%" fill="${data.backgroundColor}"></rect>
//             <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${data.textColor}">${data.text}</text>
//         </svg>`;
//     fs.writeFile(fileName, svgContent, function(err) {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log('SVG logo has been created!');
//         }
//     });
// }
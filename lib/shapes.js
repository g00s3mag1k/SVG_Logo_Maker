// class SVG {
//     constructor() {
//         this.textVar = '';
//         this.shapeVar = '';
//     }

//     render() {
//         const svgContent = <svg width="300" height="250">${this.shapeVar}${this.textVar}</svg>;
//         return svgContent;
//     }

//     setText(text, color) {
//         this.textVar = <text x='150' y='125' font-size='60' text-anchor='middle' fill='${color}'>${text}</text>;
//     }

//     setShape(shape) {
//         this.shapeVar = shape.render();
//     }
// }

// class Shape {
//     constructor(color, textColor, text) {
//         this.color = color;
//         this.textColor = textColor;
//         this.text = text;
//     }
//     setColor(color) {
//         this.color = color;
//       }
// }

// class Circle extends Shape {
//     render() {
//         return `<circle cx="160" cy="120" r="70" fill="${this.color}"/>
//                 <text x="50%" y="50%" fill="${this.textColor}" font-size="50" font-family="Arial" text-anchor="middle" dy=".3em">${this.text}</text>`;
//     }
// }

// class Square extends Shape {
//     render() {
//         return `<rect x="69" y="52" width="150" height="170" fill="${this.color}"/>
//                 <text x="150" y="150" text-anchor="middle" alignment-baseline="middle" font-family="Arial" font-size="30" fill="${this.textColor}">${this.text}</text>`;
//     }
// }

// class Triangle extends Shape {
//     render() {
//         return `<polygon points="140, 25 251, 190 61, 190" fill="${this.color}"/>
//                 <text x="150" y="130" text-anchor="middle" alignment-baseline="middle" font-family="Arial" font-size="30" fill="${this.textColor}">${this.text}</text>`;
//     }
// }

// module.exports = { Circle, Square, Triangle };

class Shape {
    constructor(color, textColor, text) {
        this.color = color;
        this.textColor = textColor;
        this.text = text;
    }

    setColor(color) {
        this.color = color;
    }
}

class Circle extends Shape {
    render() {
        return `<svg width="300" height="300">
                    <circle cx="150" cy="150" r="70" fill="${this.color}"/>
                    <text x="150" y="220" fill="${this.textColor}" font-size="20" text-anchor="middle">${this.text}</text>
                </svg>`;
    }
}

class Square extends Shape {
    render() {
        return `<svg width="300" height="300">
                    <rect x="50" y="50" width="200" height="200" fill="${this.color}"/>
                    <text x="150" y="280" fill="${this.textColor}" font-size="20" text-anchor="middle">${this.text}</text>
                </svg>`;
    }
}

class Triangle extends Shape {
    render() {
        return `<svg width="300" height="300">
                    <polygon points="150,50 250,250 50,250" fill="${this.color}"/>
                    <text x="150" y="280" fill="${this.textColor}" font-size="20" text-anchor="middle">${this.text}</text>
                </svg>`;
    }
}

module.exports = { Circle, Square, Triangle };
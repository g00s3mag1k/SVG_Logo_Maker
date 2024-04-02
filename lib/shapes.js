class Shape {
    constructor(color) {
        this.color = color;
        // this.textColor = textColor;
        // this.text = text;
    }

    setColor(color) {
        this.color = color;
    }
}

class Circle extends Shape {
    render() {
        return `<circle cx="160" cy="120" r="70" fill="${this.color}"/>`;
                // <text x="50%" y="50%" fill="${this.textColor}" font-size="50" font-family="Arial" text-anchor="middle" dy=".3em">${this.text}</text>`;
    }
}

class Square extends Shape {
    render() {
        return `<rect x="69" y="52" width="150" height="170" fill="${this.color}"/>`;
                // <text x="150" y="150" text-anchor="middle" alignment-baseline="middle" font-family="Arial" font-size="30" fill="${this.textColor}">${this.text}</text>`;
    }
}

class Triangle extends Shape {
    render() {
        return `<polygon points="140, 25 251, 190 61, 190" fill="${this.color}"/>`;
                // <text x="150" y="130" text-anchor="middle" alignment-baseline="middle" font-family="Arial" font-size="30" fill="${this.textColor}">${this.text}</text>`;
    }
}

module.exports = { Circle, Square, Triangle };
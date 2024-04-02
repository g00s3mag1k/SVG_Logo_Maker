class Shape {
    constructor(shapeColor) {
        this.shapeColor = shapeColor
        this.color = '';
    }
    setColor(color) {
        this.color = color;
    }
}

class Circle extends Shape {    
    render() {
        return `<circle cx="146" cy="120" r="70" fill="${this.shapeColor}"/>`;
    }
}

class Square extends Shape {
    render() {
        return `<rect x="70" y="43" width="150" height="150" fill="${this.shapeColor}"/>`;
    }
}

class Triangle extends Shape {
    render() {
        return `<polygon points="140, 25 240, 190 50, 190" fill="${this.shapeColor}"/>`;
    }
}

module.exports = { Circle, Square, Triangle };
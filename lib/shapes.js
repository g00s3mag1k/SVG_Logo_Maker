class Shape {  //Defines the shape attributes 
    constructor() {
        this.color = '';
    }
    setColor(color) {
        this.color = (color);
    }
}

class Circle extends Shape {
    render() {
        return `<circle cx='160' cy='120' r='70' fill='${this.color}'/>`;
    }
}

class Square extends Shape {
    render() {
        return `<rect x=69 y='52' width='150' height='170' fill='${this.color}'/> `;
    }
}

class Triangle extends Shape {
    render() {
        return `<polygon height='160' width='140' points='140, 25 251, 190 61, 190 fill='${this.color}'/>`;
    }
}

module.exports = { Circle, Square, Triangle };
//exports the shape classes
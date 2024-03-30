class Shape {
    constructor() {
        this.color = '';
    }

    setColor(color) {
        this.color = color;
    }
}

class Circle extends Shape {
    constructor() {
        super();
    }

    render() {
        return <circle cx="160" cy="120" r="70" fill="${this.color}"/>;
    }
}

class Square extends Shape {
    constructor() {
        super();
    }

    render() {
        return <rect x="69" y="52" width="150" height="170" fill="${this.color}"/>;
    }
}

class Triangle extends Shape {
    constructor() {
        super();
    }

    render() {
        return <polygon points="140, 25 251, 190 61, 190" fill="${this.color}"/>;
    }
}

module.exports = { Circle, Square, Triangle };

// function Shape() {
//     this.color = '';
// }

// Shape.prototype.setColor = function(color) {
//     this.color = color;
// }

// function Circle() {
//     Shape.call(this);
// }

// Circle.prototype = Object.create(Shape.prototype);
// Circle.prototype.constructor = Circle;
// Circle.prototype.render = function() {
//     return '<circle cx="160" cy="120" r="70" fill="' + this.color + '"/>';
// }

// function Square() {
//     Shape.call(this);
// }

// Square.prototype = Object.create(Shape.prototype);
// Square.prototype.constructor = Square;
// Square.prototype.render = function() {
//     return '<rect x="69" y="52" width="150" height="170" fill="' + this.color + '"/>';
// }

// function Triangle() {
//     Shape.call(this);
// }

// Triangle.prototype = Object.create(Shape.prototype);
// Triangle.prototype.constructor = Triangle;
// Triangle.prototype.render = function() {
//     return '<polygon points="140, 25 251, 190 61, 190" fill="' + this.color + '"/>';
// }

// module.exports = { Circle, Square, Triangle };

// function Shape() {
//     this.color = '';
//   }
  
//   Shape.prototype.setColor = function(color) {
//     this.color = color;
//   }
  
//   class Circle extends Shape {
//     render() {
//       return <circle cx="160" cy="120" r="70" fill="${this.color}"/>;
//     }
//   }
  
//   class Square extends Shape {
//     render() {
//       return <rect x="69" y="52" width="150" height="170" fill='${this.color}'/>;
//     }
//   }
  
//   class Triangle extends Shape {
//     render() {
//       return <polygon points="140, 25 251, 190 61, 190" fill="${this.color}"/>;
//     }
//   }
  
//   module.exports = { Circle, Square, Triangle };

// class Shape { // Defines the shape attributes
//     constructor() {
//         this.color = '';
//     }
//     setColor(color) {
//         this.color = color; // Removed unnecessary parentheses around color
//     }
// }

// class Circle extends Shape {
//     render() {
//         return <circle cx="160" cy="120" r="70" fill="${this.color}"/>
//     }
// }

// class Square extends Shape {
//     render() {
//         return <rect x="69" y="52" width="150" height="170" fill='${this.color}'/>
//     }
// }

// class Triangle extends Shape {
//     render() {
//         return <polygon points="140, 25 251, 190 61, 190" fill="${this.color}"/> // Removed unnecessary width and height attributes
//     }
// };

// module.exports = { Circle, Square, Triangle };
// //exports the shape classes
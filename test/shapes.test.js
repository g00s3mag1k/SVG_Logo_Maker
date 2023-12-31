const { Circle, Square, Triangle } = require('./lib/shapes.js');

describe('Circle test', () => {
    test('should render shape', () => {
        const circle = new Circle('blue');
        expect(circle.render()).toEqual('<circle cx="160" cy="120" r="70" fill="blue"/>');
    })
})

describe('Square test', () => {
    test('should render shape', () => {
        const square = new Square('red');
        expect(square.render()).toEqual('<rect x="69" y="52" width="150" height="170" fill="red"/>');
    })
})

describe('Triangle test', () => {
    test('should render shape', () => {
        const triangle = new Triangle('green');
        expect(triangle.render()).toEqual('<polygon height="160" width="140" points="140, 25 251, 190 61, 190" fill="green"/>');
    });
});
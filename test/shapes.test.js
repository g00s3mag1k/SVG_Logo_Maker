const { Circle, Square, Triangle } = require('./lib/shapes.js');

describe('Circle test', () => {
    test('should render shape', () => {
        const circle = new Circle('blue');
    })
})

describe('Square test', () => {
    test('should render shape', () => {
        const square = new Square('red');
    })
})

describe('Triangle test', () => {
    test('should render shape', () => {
        const triangle = new Triangle('green');
    })
})
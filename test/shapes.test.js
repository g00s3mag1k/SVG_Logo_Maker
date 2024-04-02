const { Circle, Square, Triangle } = require('../lib/shapes');

describe('Circle test', () => {
    test('should render shape with custom color', () => {
        const circle = new Circle();
        circle.setColor("blue");
        expect(circle.render()).toEqual(`<circle cx="146" cy="120" r="70" fill="blue"/>`);
    });
});

describe('Square test', () => {
    test('should render shape with custom color', () => {
        const square = new Square();
        square.setColor('red');
        expect(square.render()).toEqual(`<rect x="70" y="43" width="150" height="150" fill="red"/>`);
    });
});

describe('Triangle test', () => {
    test('should render shape with custom color', () => {
        const triangle = new Triangle();
        triangle.setColor('green');
        expect(triangle.render()).toEqual(`<polygon points="140, 25 240, 190 50, 190" fill="green"/>`);
    });
});
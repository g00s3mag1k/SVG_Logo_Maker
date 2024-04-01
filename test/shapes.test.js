// const { Circle, Square, Triangle } = require('./lib/shapes');

// describe('Circle test', () => {
//     test('should render shape', () => {
//         const circle = new Circle()
//         circle.setColor('blue')
//         expect(circle.render()).toEqual(`<circle cx="160" cy="120" r="70" fill="blue"/>`)
//     })
// })

// describe('Square test', () => {
//     test('should render shape', () => {
//         const square = new Square()
//         square.setColor('red')
//         expect(square.render()).toEqual(`<rect x="69" y="52" width="150" height="170" fill="red"/>`)
//     })
// })

// describe('Triangle test', () => {
//     test('should render shape', () => {
//         const triangle = new Triangle()
//         triangle.setColor('green')
//         expect(triangle.render()).toEqual(`<polygon points="140, 25 251, 190 61, 190" fill="green"/>`)
//     })
// })

const { Circle, Square, Triangle } = require('./lib/shapes');

describe('Circle test', () => {
    test('should render shape with default color', () => {
        const circle = new Circle();
        expect(circle.render()).toEqual(`<circle cx="160" cy="120" r="70" fill="black"/>`);
    });

    test('should render shape with custom color', () => {
        const circle = new Circle();
        circle.setColor('blue');
        expect(circle.render()).toEqual(`<circle cx="160" cy="120" r="70" fill="blue"/>`);
    });
});

describe('Square test', () => {
    test('should render shape with default color', () => {
        const square = new Square();
        expect(square.render()).toEqual(`<rect x="69" y="52" width="150" height="170" fill="black"/>`);
    });

    test('should render shape with custom color', () => {
        const square = new Square();
        square.setColor('red');
        expect(square.render()).toEqual(`<rect x="69" y="52" width="150" height="170" fill="red"/>`);
    });
});

describe('Triangle test', () => {
    test('should render shape with default color', () => {
        const triangle = new Triangle();
        expect(triangle.render()).toEqual(`<polygon points="140, 25 251, 190 61, 190" fill="black"/>`);
    });

    test('should render shape with custom color', () => {
        const triangle = new Triangle();
        triangle.setColor('green');
        expect(triangle.render()).toEqual(`<polygon points="140, 25 251, 190 61, 190" fill="green"/>`);
    });
});
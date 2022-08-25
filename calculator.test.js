const functions = require('./calculator')

describe('The function', () => {
    test('is add', () => {
        expect(functions.add(2,3)).toBe(5);
    })

    test('is substract', () => {
        expect(functions.substract(5,2)).toBe(3);
    })

    test('is add', () => {
        expect(functions.divide(3,3)).toBe(1);
    })

    test('is add', () => {
        expect(functions.multiply(4,2)).toBe(8);
    })
})
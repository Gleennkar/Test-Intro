const functions = require('./capitalize');

test ('Capitalize\'hello world\'', () => {
    expect(functions('hello world')).toBe('Hello world');
})
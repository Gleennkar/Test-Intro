const functions = require('./reverseString');


test ('check the reverse string of abcdef', () => {
    expect(functions('abcdef')).toBe('fedcba');
})

test ('check the reverse string of Hello', () => {
    expect(functions('Hello')).toBe('olleH');
})
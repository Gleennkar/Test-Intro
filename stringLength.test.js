const functions = require ('./stringLength')

test('Get the character countof Hi', () => {
    expect(functions('Hi')).toBe(2)
});

test('string must be at least 1 character longer and not longer than 10 characters', () => {
    expect(functions('')).toEqual('Error');
  })
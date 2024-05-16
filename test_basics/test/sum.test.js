const {sum} = require('../src/index.js');

it('should add 1 and 2 and return 3', () => {
    expect(sum(1,2)).toBe(3);
});
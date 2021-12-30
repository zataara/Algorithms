const constructNote = require('./solution')


describe("Testing function", ()=> {
test("functions properly", () => {
    expect(constructNote('aa', 'abc')).toBe(false);
    expect(constructNote('abc', 'dcba')).toBe(true);
    expect(constructNote('aabbcc', 'bcabcaddff')).toBe(true);
  });
});
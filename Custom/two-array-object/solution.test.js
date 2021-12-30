const twoArrayObject = require("./solution");

describe("Testing function", () => {
  test("functions properly", () => {
    expect(twoArrayObject(['a', 'b', 'c', 'd'], [1, 2, 3])).toEqual({'a': 1, 'b': 2, 'c': 3, 'd': null})
  });
});
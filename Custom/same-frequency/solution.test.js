const sameFrequency = require("./solution");

describe("Testing function", () => {
  test("functions properly", () => {
    expect(sameFrequency(182, 281)).toBe(true);
    expect(sameFrequency(34, 14)).toBe(false);
    expect(sameFrequency(3589578, 5879385)).toBe(true);
    expect(sameFrequency(22, 222)).toBe(false);
  });
});

const separatePositive = require("./solution");

describe("Testing function", () => {
  test("functions properly", () => {
    expect(separatePositive([2, -1, -3, 6, -8, 10])).toHave([
      2, 10, 6, -3, -1, -8,
    ]);
    expect(separatePositive([5, 10, -15, 20, 25])).toEqual([
      5, 10, 25, 20, -15,
    ]);
    expect(separatePositive([-5, 5])).toEqual([5, -5]);
    expect(separatePositive([1, 2, 3])).toEqual([1, 2, 3]);
  });
});

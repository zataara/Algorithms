const curriedAdd = require("./solution");

let firstAdder = curriedAdd();

describe("Testing function", () => {
  test("functions properly", () => {
    expect(firstAdder()).toBe(0);
    expect(firstAdder(1)).toBe(1);
    expect(firstAdder(2)).toBe(3);
    expect(firstAdder(5)).toBe(8);
    expect(firstAdder(2)).toBe(10);
  });
});

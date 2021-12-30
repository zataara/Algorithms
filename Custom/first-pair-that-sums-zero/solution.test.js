const sumZero = require('./solution.js')

describe("Tests", () => {
  it("test", () => {
    Test.assertEquals(sumZero([-3. -2, -1, 0, 1, 2, 3]), [3, 3]);
    Test.assertEquals(sumZero([-3. -2, -1, 0]), undefined);
  });
});

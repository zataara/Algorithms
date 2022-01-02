const createAccount = require("./solution");


const account = createAccount("1234", 1000)

describe("Testing function", () => {
  test("functions properly", () => {
    expect(account.checkBalance("1234")).toBe("$1000");
    
  });
});
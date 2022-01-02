function createAccount(pin, amount = 0) {
  return {
    checkBalance(input) {
      if ((input = pin)) {
        return `$${amount}`;
      } else {
        return "Invalid PIN";
      }
    },
    deposit(input, newAmount) {
      if ((input = pin)) {
        amount += newAmount;
      } else {
        return "Invalid PIN";
      }
    },
    withdraw(input, newAmount) {
      if ((input = pin)) {
        amount -= newAmount;
        return `Successfully withdrew ${newAmount}. Current balance is ${amount}`;
      } else {
        return "Invalid PIN";
      }
    },
    changePin(input, newPin) {
      if ((input = pin)) {
        pin = newPin;
        return "PIN successfully changed";
      } else {
        ("Invalid PIN");
      }
    },
  };
}

module.exports = createAccount;
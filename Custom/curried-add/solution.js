function curriedAdd(toAdd = 0) {
  let total = 0;
  return function (toAdd = 0) {
    return (total += toAdd);
  };
}

module.exports = curriedAdd;

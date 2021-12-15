function adjacentElementsProduct(array) {
  let max = -Infinity;
  let current;
  for(let i = 0; i < array.length - 1; i ++) {
    current = array[i] * array[i+1];
    if(current > max) {
      max = current
    }
  }
  return max;
}
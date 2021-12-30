function createFrequencyCounter(num) {
  num = num.toString();
  let frequencies = new Map();
  for (let digit of num) {
    let digitCount = frequencies.get(digit) || 0;
    frequencies.set(digit, digitCount + 1);
  }
  return frequencies
}

function sameFrequency(num1, num2) {
  if (num1.toString().length !== num2.toString().length) {
    return false;
  }

  let digitMap1 = createFrequencyCounter(num1);
  let digitMap2 = createFrequencyCounter(num2);

  if (digitMap1.size !== digitMap2.size) return false;

  for (let digit of digitMap1.keys()) {
    if (digitMap2.get(digit) !== digitMap1.get(digit)) return false;
  }
  return true;
}

module.exports = sameFrequency;

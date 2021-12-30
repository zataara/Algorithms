function createFrequencyCounter(string) {
  let frequencies = new Map();
  for (let char of string) {
    let charCount = frequencies.get(char) || 0;
    frequencies.set(char, charCount + 1);
  }
  return frequencies;
}

function constructNote(str1, str2) {
  let charMap1 = createFrequencyCounter(str1);
  let charMap2 = createFrequencyCounter(str2);

  for (let letter of charMap1.keys()) {
    if (charMap1.get(letter) > charMap2.get(letter)) return false;
  }
  return true;
}

module.exports = constructNote;

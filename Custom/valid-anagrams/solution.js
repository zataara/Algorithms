function createFrequencyCounter(string) {
  let frequencies = new Map();
  for (let char of string) {
    let charCount = frequencies.get(char) || 0;
    frequencies.set(char, charCount + 1)
  }
}


function validAnagram(str1, str2) {
  if(str1.length !== str2.length) return false;

  let charMap1 = createFrequencyCounter(str1);
  let charMap2 = createFrequencyCounter(str2);

  if(charMap1.size !== charMap2.size) return false;

  for (let letter of charMap1.keys()) {
    if(charMap2.get(letter) !== charMap1.get(letter)) return false;
  }

  return true
}

module.exports = validAnagram;
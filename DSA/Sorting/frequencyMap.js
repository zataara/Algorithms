function getFrequency(string) {
  const freq = {};

  for (let i = 0; i < string.length; i++) {
    let char = string.charAt(i);
    if (freq[char]) {
      freq[char]++;
    } else {
      freq[char] = 1;
    }
  }
  return freq;
}

function isAnagrams(str1, str2) {
  let freqMap1 = getFrequency(str1.split("").sort().join(""));
  let freqMap2 = getFrequency(str2.split("").sort().join(""));

  if (str1.length !== str2.length) return false;

  for (let i = 0; i < Object.keys(freqMap1).length; i++) {
    if (freqMap1[i] !== freqMap2[i]) {
      return false;
    }
  }
  return true;
}

const validAnagram = require('./solution.js')

describe("Tests", () => {
  it("test", () => {
    Test.assertEquals(validAnagram("", ""), true);
    Test.assertEquals(validAnagram("aaz", "zza"), false);
    Test.assertEquals(validAnagram("anagram", "nagaram"), true);
    Test.assertEquals(validAnagram("rat", "car"), false);
    Test.assertEquals(validAnagram("awesome", "awesom"), false);
    Test.assertEquals(validAnagram("qwerty", "qeywrt"), true);
    Test.assertEquals(validAnagram("texttwisttime", "timetwisttext"), true);
  });
});

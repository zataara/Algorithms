/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
let max = 0
let length = 0;
for(let sentence of sentences) {
  length = sentence.split(" ").length
  if(length > max) {
    max = length
    length = 0
  }
}

return max
};
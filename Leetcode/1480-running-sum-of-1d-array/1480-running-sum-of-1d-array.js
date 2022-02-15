/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
  let out = [];
  count = 0
  for (let num of nums) {
    count = num + count;
    out.push(count)
  }

  return out;
}

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  for(let j = 0; j < nums.length -1; j++){
    for(let i = j + 1; i < nums.length; i++) {
      if(nums[j] === nums[i]){
        return true
      }
    }
  }
  return false
};
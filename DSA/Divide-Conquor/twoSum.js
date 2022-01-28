function twoSum(nums, target) {
  nums = nums.sort((a,b) => a - b) // O(n log n)

  let i = 0;
  let j = nums.length - 1;

  while(i < j) { //o (n)
    if(nums[i] + nums[j] === target) {
      return true;
    } else if(nums[i] + nums[j] < target) {
      i++
    } else {
      j--
    }
  }
  return false;
}
function averagePair(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  
  while (left < right) {
    const average = (nums[left] + nums[right]) / 2;
    console.log(average)
    if (average === target) {
      return true;
    } else if (average > target) {
      right--;
    } else {
      left++;
    }
  }
  return false
}

module.exports = averagePair;
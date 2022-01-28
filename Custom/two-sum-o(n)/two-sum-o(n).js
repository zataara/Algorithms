// Check to see if an array of nums contains two numbers that 

// Time: O(n)
// Space: O(n)

function twoSum(nums, target) {
  let check = new Set();

  for (let num of nums) {
    if (check.has(target - num)) {
      return true;
    }
    check.add(num);
  }
  return false;
}

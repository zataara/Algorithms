/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function(nums) {
    nums = nums.sort(function(a, b){return a-b});
    console.log(nums)
    return Math.abs((nums[0] * nums[1]) - (nums[nums.length-1] * nums[nums.length-2]))};
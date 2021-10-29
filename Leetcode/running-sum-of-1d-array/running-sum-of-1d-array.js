/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let summedNums = [];
    nums.reduce(function(a,b,i){
        return summedNums[i] = a + b;
    }, 0);
    
    return summedNums;
};
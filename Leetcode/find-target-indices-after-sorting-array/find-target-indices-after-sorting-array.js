/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function(nums, target) {
    //sort the array
    let sorted = nums.sort((a,b) => a-b)
    let out = []
    //loop through the array looking for indices that equal target
    for (let i=0; i < sorted.length; i++) {
        if(sorted[i] === target) {
            out.push(i);
        }
    }
    return out;
};
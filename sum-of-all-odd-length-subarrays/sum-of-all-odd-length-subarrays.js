/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function(arr) {
     let sum = 0;
     let length = arr.length;
   
    for(let i = 0; i < length; i++) {
        for(let j = i; j < length; j += 2) {
            for(let k = i; k <= j; k++) {
                sum += arr[k];
            }
        }
    }
    return sum;
};
/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    let count = 0
    for(let op of operations) {
        if(op[1] == '+') {
            count ++;
        } else {
            count --;
        }
    }
    return count
};
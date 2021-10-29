/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    let output = [];
    let tested = [];
    for(let i = 0; i< arr.length; i++) {
        tested = []
        if(i === arr.length - 1) {
                output.push(-1)
                return output;
            }
        for(let j = i + 1; j < arr.length; j++) {
            tested.push(arr[j]);
        }
       
        output.push(Math.max(...tested))
    }
    
    
    return output;
};
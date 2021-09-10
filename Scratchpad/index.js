


// var maxArea = function(height) {
//     volumes = [];
//     function findVolume(arr, x,y) {
//         let distance = arr.indexOf(y) - arr.indexOf(x);
//         return Math.min(x,y) * distance
//     }
//     for(let i = 0; i < height.length; i++) {
//         for(let j = i + 1; j<height.length; j++) {
//             volumes.push(findVolume(height, height[i], height[j]))
//         }
//     }
//     return Math.max(...volumes);
// };
// debugger
// height = [1,1]
// maxArea(height)

// var lengthOfLongestSubstring = function(s) {
//     counts = [];
//     testArr = [];
//     let sub = Array.from(s)
//     if(s === "") {
//         return 0;
//     }
//     if(s === " ") {
//         return 1;
//     }
//     for (let char of sub) {
//         if(!(testArr.includes(char))){
//             testArr.push(char);
//         } else{
//             counts.push(testArr.length)
//             testArr.length = 0;
//             testArr.push(char)
//         }
//     }
//     counts.push(testArr.length)
//     return Math.max(...counts);
// };

// s = " "
// f = "abcabcbb"
// g = "pwwkew"
// h = "abcde"
// debugger
// console.log(lengthOfLongestSubstring(h))



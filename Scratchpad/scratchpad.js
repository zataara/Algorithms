

























// let maxArea = function maxArea(height) {
//     let area = 0;
//         for (let i = 0; i < height.length; i++) {
//             for (let j = i + 1; j < height.length; j++) {
//                 area = Math.max(area, Math.min(height[j], height[i]) * (j - i));
//             }
//         }
//         return area;
// };






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


// var countKDifference = function(nums, k) {
//     let count = 0;
//     for(let i = 0; i < nums.length - 1; i++) {
//         debugger
//         for(let j =1; j < nums.length; j++) {
//             if(Math.abs(nums[i] - nums[j]) === k) {
//                 count ++;
                
//                 console.log(nums[i])
//                 console.log(nums[j])
//             }
//         }
//     } 
//     return count;
// };
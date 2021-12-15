function adjacentElementsProduct(array) {
  let max = -Infinity;
  let current;
  for(let i = 0; i < array.length - 1; i ++) {
    current = array[i] * array[i+1];
    if(current > max) {
      max = current
    }
  }
  return max;
}



// var createTargetArray = function (nums, index) {
//   let out = [];
//   for (let i = 0; i < nums.length; i++) {
//     out.splice(index[i], 0, nums[i]);
//   }
//   return out;
// };

// function getMiddle(s) {
//   let arr = s.split('');
//   let n = s.length;

//   if(n % 2 !== 0) {
//     return s[(n/2) + 1];
//   } else {
//     return s[n/2] + s[(n/2) + 1]
//   }
// }

// function squareDigits(num){
//     num.split('')
//     let squares = num.map(n => n * n)

//     return squares.join('');
// }

// function sortThePile(pileOfTowels, weeklyUsedTowels) {
//     toSort = []
//     while(weeklyUsedTowels > 0) {
//         toSort.push(pileOfTowels.pop())
//         weeklyUsedTowels --;
//     }
//     toSort.sort().reverse()

//     return pileOfTowels.concat(toSort);
// }

// function autocomplete(input, dictionary){
//     let out = [];

//     for (let word of dictionary) {
//         compare = word.replace(/\W/g, '').slice(0,input.length)
//         if(compare === input) {
//             out.push(word)
//         }
//     }

//     return out;
// }

// var minMovesToSeat = function(seats, students) {
//     let seat = seats.sort((a,b) => a -b);
//     let student = students.sort((a,b) => a -b);
//     let dif = [];
//     for(let i = 0; i < seat.length; i++) {
//         dif.push(Math.abs(seat[i] - student[i]))
//     }
//     return dif.reduce((a,b) => a + b)

// };

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

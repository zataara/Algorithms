


// var runningSum = function(nums) {
//   let out = [];
//   count = 0
//   for (let num of nums) {
//     count = num + count;
//     out.push(count)
//   }

//   return out;
// }


// function numberOfPairs(gloves) {
//   let pairs = 0;
//   let counted = []
//   let count = 0
//   for(let glove of gloves) {
//     if(!glove in counted) {
      
//     }
//   }

//   return pairs
// }

// var flipAndInvertImage = function (img) {
//   let out = [];
//   function flipPixel(p) {
//     if (p === 1) {
//       return 0;
//     } else if (p === 0) {
//       return 1;
//     }
//   }

//   debugger;
//   for (let row of img) {
//     row.reverse();
//     let inner = [];
//     for (let pixel of row) {
//       inner.push(flipPixel(pixel));
//     }
//     out.push(inner);
//   }

//   return out;
// };

// function partsSums(ls) {
//   if(!ls.length) return [0]
//   let out = []

//   ls.reverse()
//   let totalSum = ls.reduce((a,b) => a + b)
//   out.push(totalSum)

//   while(ls.length) {
//     let toSubtract = ls.pop()
//     totalSum -= toSubtract
//     out.push(totalSum)
//   }
//   return out;
// }

// let max = 0
// let length = 0;
// for(let sentence in sentences) {
//   length = sentence.split(" ").length
//   if(length > max) {
//     max = length
//   }
// }

// return max

// function parse( data ) {
//   let x = 0;
//   let out = [];

//   for(let i of data) {
//     if(i === 'i') {
//       x ++;
//     } else if(i === 'd') {
//       x --;
//     } else if(i === 's') {
//       x = x * x;
//     } else if(i === 'o') {
//       out.push(x)
//     }
//   }
//   return out;
// }

// function meeting(s) {
//   let arr = s.split(";")

//   let out = [];
//   for(let fullName of arr) {
//     let nameArray = fullName.split(":").reverse()
//     nameArray[0] = '(' + nameArray[0];
//     nameArray[1] += ')';
//     let outString = nameArray.join(", ")
//     out.push(outString)
//   }

//   const localeSort = Array.from(out).sort((a,b) => {
//     return a.localeCompare(b, 'en', { sensitivity: 'base' });
//   });

//   let out2 = [];
//   for(let person of localeSort) {
//     out2.push(person.toUpperCase());
//   }

//   return out2.join('');
// }

// function validSolution(board) {
//   //function for checking if all numbers 1-9 are present in a given array
//   function helpCheck(arr) {
//     if (arr.length !== 9) {
//       return false;
//     }
//     let compare = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//     arr.sort();
//     let same;
//     for (let i = 0; i < arr.length; i++)
//       if (arr[i] === compare[i]) {
//         same = true;
//       } else {
//         same = false;
//         return same;
//       }
//     return true;
//     }

//   // prepare row for checking
//   let row = board.shift();
//   row.sort();

//   // prepare column for checking
//   let column = [];
//   for (let arr of board) {
//     column.push(arr.pop());
//   }
//   column.sort();

//   // prepare 3x3 for checking
//   function check(board) {
//     function checkNine(board) {
//       let arr = [];
//       for (let i = 0; i < 3; i++) {
//         for (let j = 0; j < 3; j++) {
//           arr.push(board[i][j]);
//         }
//       }
//       return helpCheck(arr);
//     }
//     function splitAndCheck(board) {
//       for(let i = 0;){
//         checkNine(split)
//       })
//     }
//   }

//   //check all three
//   if (helpCheck(row) && helpCheck(column) && check(board)) {
//     return true;
//   } else {
//     return false;
//   }
// }

// var containsDuplicate = function(nums) {
//   for(let j = 0; j < nums.length -1; j++){
//     for(let i = j + 1; i < nums.length; i++) {
//       if(nums[j] === nums[i]){
//         return false
//       }
//     }
//   }
//   return true
// };

// function maxDepth(root) {
//   function helper(root, level) {
//     if(!root) return level;
//     return Math.max(heper(rootleft, level + 1), helper(root.right, level +1));
//   }
//   return helper(root, 0);
// }

// function adjacentElementsProduct(array) {
//   let max = -Infinity;
//   let current;
//   for(let i = 0; i < array.length - 1; i ++) {
//     current = array[i] * array[i+1];
//     if(current > max) {
//       max = current
//     }
//   }
//   return max;
// }

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

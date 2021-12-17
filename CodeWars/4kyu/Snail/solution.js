snail = function (arr) {
  let out = [];

  //base case for recursion
  if (!arr.length) return out;

  //add top of square to out
  let next = arr.shift();
  if (next) {
    out = out.concat(next);
  }

  //add right hand column of square to out
  for (let i = 0; i < arr.length; i++) {
    out.push(arr[i].pop());
  }

  //add bottom of square to out
  next = arr.pop();
  if (next) {
    out = out.concat(next.reverse());
  }

  //add left hand column of square to out
  for (let i = arr.length - 1; i >= 0; i--) {
    out.push(arr[i].shift());
  }

  //recursively add next square (if any) to out
  return out.concat(snail(arr));
};

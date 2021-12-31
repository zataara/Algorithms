/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function(img) {
 let out = [];
  function flipPixel(p) {
    if (p === 1) {
      return 0;
    } else if (p === 0) {
      return 1;
    }
  }
  
  debugger
  for (let row of img) {
    row.reverse();
    let inner = []
    for (let pixel of row) {
      inner.push(flipPixel(pixel));
    }
    out.push(inner)
  }

  return out;
};
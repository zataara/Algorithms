function partsSums(ls) {
  // if we begin with an empty array, return the sum of empty which is 0
  if(!ls.length) return [0]
  
  let out = []
  // reverse the arry so we just have to pop() numbers off the end
  ls.reverse()
  
  let totalSum = ls.reduce((a,b) => a + b)
  out.push(totalSum)
  

  while(ls.length) {
    let toSubtract = ls.pop()
    totalSum -= toSubtract
    out.push(totalSum)
  }
  return out;
}

module.exports = partsSums;
function parse( data ) {
  let x = 0;
  let out = [];

  for(let i of data) {
    if(i === 'i') {
      x ++;
    } else if(i === 'd') {
      x --;
    } else if(i === 's') {
      x = x * x;
    } else if(i === 'o') {
      out.push(x)
    } 
  }
  return out;
}
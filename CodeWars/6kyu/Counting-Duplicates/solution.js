function duplicateCount(text){
  let checked = [];
  let dupes = [];
  let count = 0;
  for( let letter of text) {
    if(!letter in checked) {
      checked.push(letter)
    }
    if(letter in checked && not in dupes) {
      dupes.push(letter);
      count ++
    }
  }
  return count;
}
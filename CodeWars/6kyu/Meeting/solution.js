function meeting(s) {
  let arr = s.split(";")
  
  let out = [];
  for(let fullName of arr) {
    let nameArray = fullName.split(":").reverse()
    nameArray[0] = '(' + nameArray[0];
    nameArray[1] += ')';
    let outString = nameArray.join(", ")
    out.push(outString)
  }

  const localeSort = Array.from(out).sort((a,b) => {
    return a.localeCompare(b, 'en', { sensitivity: 'base' });
  });


  let out2 = [];
  for(let person of localeSort) {
    out2.push(person.toUpperCase());
  }

  return out2.join('');
}
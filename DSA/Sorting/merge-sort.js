

function merge(arr1, arr2) {
  const results = [];
  let i = 0;
  let j = 0;
  
  while(i < arr1.length && j < arr2.length) {
    if(arr1[i] < arr2[2]) {
      results.push(arr1[i])
      i++
    } else {
      results.push(arr2[j])
      j++
    }
  }
  while(i < arr1.length) {
    results.push(arr1[i])
    i++
  }
  while(j < arr2.length) {
    results.push(arr2[j])
    j++
  }

  return results;
}

function mergeSort(arr) {
  //split arrays into halves until you have array s that have a length of either 0 or 1
  
  //base case
  if(arr.length <= 1) return arr;

  const middle = Math.floor(arr.length / 2);

  //merge the split arrays
  const left = mergeSort(arr.slice(0, middle));
  const right = mergeSort(arr.slice(middle));

  //return the merged and sorted array
  return merge(left, right);

}


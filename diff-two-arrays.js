function diffArray(arr1, arr2) {
  var newArr = [];
  arr1.map(el=>arr2.indexOf(el)<0?newArr.push(el):false);
  arr2.map(el=>arr1.indexOf(el)<0?newArr.push(el):false);
  return newArr;
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));


//FCC solution:
/*
function diffArray(arr1, arr2) {
  return arr1
    .concat(arr2)
    .filter(item => !arr1.includes(item) || !arr2.includes(item));
}
*/

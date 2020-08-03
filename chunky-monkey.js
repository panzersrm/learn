function chunkArrayInGroups(arr, size) {
  let res = [];
  while (arr.length>0){
    res.push(arr.slice(0,size));
    arr.splice(0,size);
  }
  return res;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));


//FCC solution:
/*
function chunkArrayInGroups(arr, size) {
  var newArr = [];
  while (arr.length) {
    newArr.push(arr.splice(0, size));
  }
  return newArr;
}
*/
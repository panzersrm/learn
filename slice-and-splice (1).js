function frankenSplice(arr1, arr2, n) {
  let arr = [...arr2];
  for (let i=0;i<arr1.length;i++){
  arr.splice(n+i, 0, arr1[i]);
  }
return arr;

// FCC solution:
//  let localArr = arr2.slice();
//  localArr.splice(n, 0, ...arr1);
//  return localArr;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));

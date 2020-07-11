function frankenSplice(arr1, arr2, n) {
  let arr = [...arr2];
  return arr.splice(n, 1, 45, 44);
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));

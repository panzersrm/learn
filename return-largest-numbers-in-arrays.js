function largestOfFour(arr) {
  
  function max(ar){
    return ar.sort((a,b)=>b-a)[0];
  }
  
  let res = [];
  for (let i=0; i<arr.length; i++){
    res.push(max(arr[i]));
  }
  return res;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));

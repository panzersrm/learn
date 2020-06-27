function largestOfFour(arr) {
  
  let maxarr = [];
  for (let i=0; i<4; i++){
    let max = 0;
    for (let j=0; i<4; j++){
      if (max<arr[i][j]){
        console.log(arr[i][j]);
      }
    }
    maxarr.push(max);
  }

  return maxarr;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));


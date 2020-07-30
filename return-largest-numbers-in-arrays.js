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


//first attempt:
/*
function largestOfFour(arr) {

  let maxarr = [];
  //FCC solution
//    for (let i=0; i<arr.length; i++){
//	let max = arr[i][0];
//	for (let j=1; j<arr[i].length; j++){
//		if (max<arr[i][j]){
//			max = arr[i][j];
//		}
//	}
//maxarr.push(max);
//}
  for (let i=0; i<arr.length; i++){
    let max = 0;
    for (let j=0; j<arr[i].length; j++){
      if (arr[i][j]<0){
        if (max==0 || arr[i][j]>max){
        max = arr[i][j];
      }
      } else {
        if (max<arr[i][j]){
          max = arr[i][j];
        }
      } 
    }
    maxarr.push(max);
  }
  return maxarr;
}
*/
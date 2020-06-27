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

console.log(largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]));

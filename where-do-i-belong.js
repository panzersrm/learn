function getIndexToIns(arr, num) {
  let as = arr.sort(function(a, b){return a - b});
  for (let i=1;i<as.length+1;i++){
     if (num>as[i-1] && num<=as[i]){
      return i;
    } 
    }
    if (num>=as[as.length-1]){
      return as.length;
    } else {
      return 0;
    }
}

console.log(getIndexToIns([3, 10, 5], 3));

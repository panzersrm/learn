function pairwise(arr, arg) {
  let res =[];
  for (let i=0; i<arr.length; i++){
    for (let j=i+1; j<arr.length; j++){
      if (arr[i]+arr[j]===arg && res.indexOf(i)===-1 && res.indexOf(j)===-1){
        res.push(i,j);
      }
    }
  }
  if (res.length==0){
    return 0;
  }
  return res.reduce((ac,el)=>ac+=el);
}

console.log(pairwise([0, 0, 0, 0, 1, 1], 1));

console.log(pairwise([1, 4, 2, 3, 0, 5], 7));


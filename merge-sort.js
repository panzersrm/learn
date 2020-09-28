function merge(ar1, ar2){
  let merged =[];
  while (ar1.length && ar2.length){
    if (ar1[0]>ar2[0]){
      merged.push(ar2.shift());
    } else if (ar1[0]<ar2[0]){
      merged.push(ar1.shift());
    } else {
      merged.push(ar1.shift(), ar2.shift());
    }
  }
  return [...merged,...ar1,...ar2];
}

function mergeSort(array) {
  let n = array.length;
  if(n===1){
    return array;
  } else {
    let ar1 = array.slice(0,Math.floor(n/2));
    let ar2 = array.slice(Math.floor(n/2));
    return merge(mergeSort(ar1),mergeSort(ar2));
  }
  
}

//console.log(merge([10],[1]))

console.log(mergeSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]));
function bubbleSort(arr) {
  let extr;
  let i=0;
  let n=arr.length-1;
  function swap(ar,a,b){
    //if (ar[a]>ar[b]){
      extr = ar[a];
      ar[a]=arr[b];
      ar[b]=extr;
    //}
  }
  while (i<n){
    for (let j=0;j<n;j++){
      if (arr[j]>arr[j+1]){
        swap(arr,j,j+1);
      }
    }
    i++;
  }
  return arr;
}

console.log(bubbleSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]));
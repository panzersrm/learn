function selectionSort(arr) {
  function swap(ar,a,b){
      let temp = ar[a];
      ar[a] = ar[b];
      ar[b] = temp;
  }
    
  for (let i=0; i<arr.length-1; i++){
    let min=i;
    for (let j=i+1; j<arr.length; j++){
      if (arr[min]>arr[j]){
        min = j;
      }   
    }
    swap(arr,i,min)
  }
  return arr;
}


console.log(selectionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]));


//second try to solve the algo. I would say a more elegant solution than the first
/*
function selectionSort(array) {
  function swap(ar,a,b){ 
    let temp=ar[a];
    ar[a]=ar[b];
    ar[b]=temp;
  }
  function mini(ar){
    let min=ar[0]
    for (let i=1;i<ar.length;i++){
      if (ar[i]<min){
        min=ar[i];
      }
    }
    return ar.indexOf(min);
  }
  for (let i=0;i<array.length;i++){
    swap(array,i,(mini(array.slice(i))+i)); //with mini we find the index of the minimum in the unsorted part of the array  (starting with index i until the end of the array) to which we add i to find the index of this minimum in the initial array
  }
  return array;
}
*/
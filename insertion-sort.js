//Insertion Sort works by building up a sorted array at the beginning of the list.
//It begins the sorted array with the first element.
//Then it inspects the next element and swaps it backwards into the sorted array until it is in sorted position.
//It continues iterating through the list and swapping new items backwards into the sorted portion until it reaches the end.



function myInsertionSort(arr) {
  function swap(ar,a,b){
    let temp = ar[a];
    ar[a]=ar[b];
    ar[b]=temp;
  }
  
  for (let i=1; i<arr.length; i++){
    if(arr[i]<arr[i-1]){
      swap(arr,i-1,i);
      for (let j=0;j<i-1;j++){
        if(arr[i-1]<arr[j]){
          swap(arr,i-1,j);
        }
      }
    }
  }
  
  return arr;
}

console.log(myInsertionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]));


//FCC solution:
function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let curr = array[i];
    for (var j = i - 1; j >= 0 && array[j] > curr; j--) {
      array[j + 1] = array[j];
    }
    array[j + 1] = curr;
  }
  return array;
}


//second try to solve the algo:
function insertionSort(array) {
  function swap(ar,a,b){
    let temp = ar[a];
    ar[a]=ar[b];
    ar[b]=temp;
  }

  if(array[0]>array[1]){
    swap(array,0,1);
  }

  for (let i=2;i<array.length;i++){
    let curr = array[i]
    for (let j=i-1;j>=0 && array[j]>curr;j--){
      swap(array,j,j+1);
    }
  }
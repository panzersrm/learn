//Given an array of integers and a target number, return the two integers that add up to the target number


function sumOfTwo(arr,num) {
  let n = arr.length;
  let i = 0;
  while (i<n-1){
    if ((arr[i]+arr[n-1])==num){
      return [arr[i],arr[n-1]]
    } else if ((arr[i]+arr[n-1])>num) {
      n--;
    } else {
    i++;
    }
  }
  return [];
}



console.log(sumOfTwo([1,2,4,5,6,7,8,9],17));

console.log(sumOfTwo([1,2,4,5,6,7,8,9],20));

console.log(sumOfTwo([1,2,4,5,6,7,8,9],5));

console.log(sumOfTwo([1,2,4,5,6,7,8,9],4));
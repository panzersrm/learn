/*function sumAll(arr) {
  let st = arr[0];
  let nd = arr[1];
  let sum = 0;
  if (st<nd){
    for (let i=st;i<=nd;i++){
      sum += i;
    }
    } else {
      for (let i=nd;i<=st;i++){
      sum += i;
    }
    } 
  return sum;
}*/

/*function sumAll(arr) {
  let ar = arr.sort((a,b)=>a-b);
  let a = [];
  for (let i=ar[0];i<=ar[1];i++){
    a.push(i);
  }
  return a.reduce((acc,cw)=>acc+cw,0);
}*/

function sumAll(arr) {
  let ar = arr.sort((a,b)=>a-b);
  let sum = 0;
  for (let i=ar[0];i<=ar[1];i++){
      sum += i;
    }
  return sum;
}

console.log(sumAll([7, 4]));

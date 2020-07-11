function bouncer(arr) {
  let a=[];
  for (let i=0;i<arr.length;i++){
    if (Boolean(arr[i])){
      a.push(arr[i]);
    }
  }
  return a;
}

console.log(bouncer([7, "ate", "", false, 9]));

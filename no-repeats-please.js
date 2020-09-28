function permAlone(str) {
  let arr = str.split("");
  let res =[];
  for  (let i=0;i<arr.length-1;i++){
    if(arr[i]==arr[i+1]){
      res.push(false);
    } else {
      res.push(true);
    }
  }
  return calc(str, 0, 2);


  function swap(string, indexI, indexJ){
    let temp;
    let ar=string.split("");
    temp=ar[indexI];
    ar[indexI]=ar[indexJ];
    ar[indexJ]=temp;
    return ar.join("");
  }

  function calc(string, left, right){
    if (left==right){
      return string;
    } else {
      for (let i=left;i<=right;i++){
        let swapped=swap(string, left, i);
        calc(swapped, left+1, right);
      }
    }
  }

}

console.log(permAlone('aabc'));

function mutation(arr) {
  let one = arr[1].toLowerCase().match(/\w/g);
  let zero = arr[0].toLowerCase().match(/\w/g);
  let j = 0;
  for (let i=0; i<one.length; i++){
      if (zero.indexOf(one[i]) != -1){
        j++;
      }
    }
  return j==one.length;
}

console.log(mutation(["floor", "for"]));

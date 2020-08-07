function sym() {
  let args = Object.values(arguments);

  function sym2(arr1, arr2){
    let res=[];
    arr1.map(el=>arr2.indexOf(el)==-1 && res.indexOf(el)==-1?res.push(el):false);
    arr2.map(el=>arr1.indexOf(el)==-1 && res.indexOf(el)==-1?res.push(el):false);
    return res;
  }
  //FCC Solution:
  //return args.reduce(sym2)
  while (args.length>=2){
  let ar=sym2(args[0], args[1]);
  args.splice(0,2,ar)
  }

  return args[0];
}

console.log(sym([1, 2, 5], [2, 3, 5], [3, 4, 5]));


//filter method to get only unique items form an array
/*
return [1,2,3,3,2].filter(function(elem, index, self) {
    return index === self.indexOf(elem);
  });
*/


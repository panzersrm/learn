function uniteUnique() {
  let result = arguments[0];
  for (let i=1; i<arguments.length; i++){
    for (let j=0; j<arguments[i].length; j++){
      if (result.indexOf(arguments[i][j])<0){
        result.push(arguments[i][j]);
      }
    }
  }
  return result;
}

//FCC inspired solution:
/*
function uniteUnique() {
var args = Array.prototype.slice.call(arguments);
var newArr = args.reduce((arrA, arrB) => {
  return arrA.concat(
    arrB.filter(el => arrA.indexOf(el) === -1));
})
return newArr;
}
*/


console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));

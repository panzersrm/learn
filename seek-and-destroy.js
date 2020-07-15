function removeItemAll(arr, value) {
  var i = 0;
  while (i < arr.length) {
    if (arr[i] === value) {
      arr.splice(i, 1);
    } else {
      ++i;
    }
  }
  return arr;
}

function destroyer(arr) {
  for(let i=1; i<arguments.length; i++){
    removeItemAll(arr,arguments[i]);
  }
  return arr;
}


console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));

//FCC solution:
/*
function destroyer(arr) {
  var args = Array.from(arguments).slice(1); //variable args is an array of arguments exept the first one

  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < args.length; j++) {
      if (arr[i] === args[j]) { 
        delete arr[i];  //if an element from arr is the same with an argument, delete the value of that element inside arr
      }
    }
  }
  return arr.filter(Boolean); //return the modified array using the Boolean object as a filter for any null's created by the delete operator
}
*/
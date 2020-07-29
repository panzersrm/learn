function addTogether() {
  if (arguments.length==1 && Number.isInteger(arguments[0])){
    return n => (Number.isInteger(n) ? n + arguments[0] : undefined);
    
  } else if (arguments.length==2 && Object.values(arguments).every(el=>Number.isInteger(el))){
      return arguments[0]+arguments[1];
  } else {
    return undefined;
  }
}

console.log(addTogether(2)(5));
console.log(addTogether(23, 30));
console.log(addTogether(2)([5]));
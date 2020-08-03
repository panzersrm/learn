function factorialize(num) {
  let res = 1;
  for (let i=2;i<=num;i++){
    res*=i;
  }
  return res;
}

console.log(factorialize(5));


//FCC Recursive solution:
/*
function factorialize(num) {
  if (num === 0) {
    return 1;
  }
  return num * factorialize(num - 1);
}
*/
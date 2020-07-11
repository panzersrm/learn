const squareList = (arr) => {
  // Only change code below this line
//first attempt using filter+map
//  let sorted = arr.filter(item => item > 0 && !(item % 1));
//  let sqrt = sorted.map(item => item*item );
  let sortest = arr.reduce((acc, ci) => {
    if(ci>0 && !(ci%1)){
      acc.push(ci*ci);
    };
    return acc;
  }, [])
  return sortest;
  // Only change code above this line
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);

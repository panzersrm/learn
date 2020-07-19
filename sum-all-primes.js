//first attempt to check for primes using binary...failed
/*function sumPrimes(num) {
  function primes(){
    let pri = [2,3];
    for (let i=4; i<=num; i++){
      let bi = i.toString(2);
      let regex = /111$|001$|011$|101$/;
      if (bi[0]==1 && bi[bi.length-1]==1 && regex.test(bi)&& i%3){
        pri.push(i);
      }
    }
    return pri;
  }
  

  return primes()//.reduce((ac,el)=>ac+el);
}*/

function sumPrimes(num) {
  let arr = [2,3];
  for (let i=4;i<=num;i++){
    if(arr.every(el=>i%el)){
      arr.push(i);
    }
  }
  return arr.reduce((ac,el)=>ac+el);

}

console.log(sumPrimes(977));
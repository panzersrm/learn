function sumFibs(num) {
  let fibS = [1,1];
  for (let i=0; i<num; i++){
    fibS.push(fibS[i]+fibS[i+1])
  }
  let fib = fibS.filter(el=>el<=num);
  return fib.reduce((ac,el)=>el%2===1?ac+=el:ac,0);

  /*more simple to understand reduce function:
  return fib.reduce((ac,el)=>{
    if (el%2===1){
      ac+=el;
    } 
    return ac
  },0);
  */
}

console.log(sumFibs(4));


//Own solution after reading FCC solutions:
/*
function sumFibs(num) {
  let fibS = [1,1];
  for (let i=0; i<num; i++){
    fibS.push(fibS[i]+fibS[i+1])
  }
  let fib = fibS.filter(el=>el<=num && el%2==1);
  return fib.reduce((ac,el)=>ac+=el,0);
}
*/

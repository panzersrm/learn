function steamrollArray(arr) {
  //FCC solution
  /*
  let flat = [].concat(...arr);
  return flat.some(Array.isArray) ? steamrollArray(flat) : flat;
  */
  
  let res=[];

  function check(el){
    if (!Array.isArray(el)){
      res.push(el);
    } else {
      for (let i=0; i<el.length; i++){
        check(el[i]);
      }
    }
  }

  arr.map(e=>check(e))
  return res;
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));

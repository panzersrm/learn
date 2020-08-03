function pairElement(str) {
  let base = {
    A: "T",
    T: "A",
    C: "G",
    G: "C"
  };
  let arr = str.match(/\w/g);
  
  function ar(st){
    let res =[];
    res.push(st);
    res.push(base[st]);
    return res;
  }
  return arr.map(el=>ar(el));
}

console.log(pairElement("ATCGA"));

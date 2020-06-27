function repeatStringNumTimes(str, num) {
  if (num<=0){
    return "";
  } else {
    let res="";
    for (let i=0; i<num; i++){
      res+=str;
    }
    return res;
  }
}

console.log(repeatStringNumTimes("abc", 3));


// FCC solution:
// return num > 0 ? str + repeatStringNumTimes(str, num - 1) : '';
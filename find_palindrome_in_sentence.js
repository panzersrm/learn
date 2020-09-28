function palindrome(str) {
  function palCheck(str){
  let regex = /[a-z]|\d/g;
  let arr = str.toLowerCase().match(regex);
  let ar=arr.join("");
  let rra = arr.reverse();
  let ra=rra.join("");
  return ar === ra ? true : false;
  }

  let reg = /[^\s]+/g;
  let words = str.toLowerCase().match(reg);
  let res = words.map(el=>palCheck(el));
  return res.map((el,index) => el===true? words[index]:null).join("")
}


console.log(palindrome("Once apon an eye"));
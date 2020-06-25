function clearString(str) {
let fixRegex = /\W|\s|[_]/g; 
let replaceText = ""; 
return str.replace(fixRegex, replaceText).toLowerCase();
}


function reverseString(str) {
  let rts = [...str];
  let r=[];
  for (let i=0;i<rts.length;i++){
    r.unshift(rts[i]);
  }
  return r.join('').toLowerCase();
}


function palindrome(str) {
  if(clearString(str)===reverseString(clearString(str))){
  return true;
} else {
  return false;
}
}


console.log(palindrome("E_ y% e"));
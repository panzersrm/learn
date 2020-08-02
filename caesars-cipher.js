function rot13(str) {
  let a=[...Array(26)].map((el,i)=>String.fromCharCode(i+65));
  let al=a.concat(a);
  let res=[];
  let strArr=str.match(/\w|\W/g)
  for (let i=0;i<strArr.length;i++){
    if (al.indexOf(strArr[i])===-1){
      res.push(strArr[i]);
    } else {
        res.push(al[al.indexOf(strArr[i])+13]);
    }
  }

  return res.join("");
}

console.log(rot13("SERR PBQR PNZC"));

//FCC solution:
/*
function rot13(str) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return str
      .split('')
      .map(char => {  
        const pos = alphabet.indexOf(char);      
        return pos >= 0 ? alphabet[(pos + 13) % 26] : char;
      })
      .join('');
}
*/

//or:
/*
function rot13(str) {
  // LBH QVQ VG!
  return str.replace(/[A-Z]/g, L =>
    String.fromCharCode((L.charCodeAt(0) % 26) + 65)
  );
}*/

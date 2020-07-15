function translatePigLatin(str) {
  let mat = str.match(/\w/g);
  let vowels = ["a", "e", "i", "o", "u"]
  if (vowels.indexOf(mat[0]) >= 0){
    return mat.join("").concat("way");
  } else { 
      if (mat.every(el => vowels.indexOf(el) < 0)){
      return mat.join("").concat("ay");
    } else {
        let i=0;
        while (vowels.indexOf(mat[0]) < 0){
          let zero = mat[0];
          mat.shift(mat[0]);
          mat.push(zero);
          i++;
        } 
        return mat.join("").concat("ay");
    }
  }
}


//FCC solution:

//function translatePigLatin(str) {
//  return str
//    .replace(/^[aeiou]\w*/, "$&way")
//    .replace(/(^[^aeiou]+)(\w*)/, "$2$1ay");
//}



console.log(translatePigLatin("rhythm"));

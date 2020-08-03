function telephoneCheck(str) {
  let digits = str.match(/\d/g);
  
  if (digits.length==10){
    if (/[(]\d{3}[)]/.test(str)){
      if (/[^()-\d]/.test(str)){
          return false;
      }
      return true;
    } else if (/\d{10}/.test(str)){
        if (/^[(]/.test(str)){
          return false;
        }
        return true;
    } else if (/\d{3}[\s|-]\d{3}[\s|-]\d{4}/.test(str)){
        if (/^[(]/.test(str)){
          return false;
        }
        return true;
    }
  } else if (digits.length==11){
        if(/^1\s|^1\W/.test(str)) {
          if (/[(]\d{3}[)]/.test(str) || /\d{3}[\s|-]\d{3}[\s|-]\d{4}/.test(str)){
            return true;
          }
        } 
    }
  return false;
}

console.log(telephoneCheck("1 555)555-5555"));


//FCC solution:
/*
function telephoneCheck(str) {
  var regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
  return regex.test(str);
}
*/
function convertHTML(str) {
  
  var escapeChars = {
    '<' : '&lt;',
    '>' : '&gt;',
    '"' : '&quot;',
    '&' : '&amp;',
    '\'' : '&apos;'
  };
  
  let regex = /[^\w\s]/g;
  let matched = str.match(regex);
  
  //FCC solution... I was close to this but instead of writing a function as replace() second argument, I was trying to get directly the values out of the escapeChars object
  //return str.replace(regex, match=>escapeChars[match])

  //if no special carecters in string, return string
  if (!matched){
    return str;
  }

  let a = str.split(regex),
      result=[];
  for (let i=0; i<a.length; i++){
      result.push(a[i]);
      result.push(escapeChars[matched[i]]);   
  }
  return result.join("");
}

console.log(convertHTML("Hamburgers < Pizza > Tacos"));

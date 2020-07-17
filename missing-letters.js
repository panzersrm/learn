function fearNotLetter(str) {
  let order = "abcdefghijklmnopqrstuvwxyz";
  for (let i=0; i<str.length; i++){
    if (order.indexOf(str[i+1])-order.indexOf(str[i])>1){
      return order[order.indexOf(str[i])+1];
   /*Adapted after reading FCC solutions using ASCII code. This solution doesn't require explicitly providing the alphabet (i.e. var order)   
   if (str.charCodeAt(i+1)-str.charCodeAt(i)>1){
     return String.fromCharCode(str.charCodeAt(i)+1);
    */
    }
  }
  return undefined;
}

console.log(fearNotLetter("stvwx"));

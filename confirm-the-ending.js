function confirmEnding(str, target) {
  let l = str.length;
  let tl = target.length;
  let end = str.substring(l-tl)
//  if (end == target){  
//    return true;
//  } else {
//    return false;
//  }
// above my original solution; below more efficient & nicer code
  return end == target;
}

console.log(confirmEnding("Bastian", "n"));

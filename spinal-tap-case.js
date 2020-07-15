function spinalCase(str) {
  let regex = /\s|_/g;
  str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
  return str.replace(regex, "-")/*.join("-")*/.toLowerCase();
}

console.log(spinalCase('This Is Spinal Tap'));

console.log(spinalCase('thisIsSpinalTap'));

console.log(spinalCase("The_Andy_Griffith_Show"));
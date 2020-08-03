function findLongestWordLength(str) {
  let arr = str.split(" ");
  return Math.max(...arr.map(el=>el.length));
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"))


//FCC solution:
/*
function findLongestWordLength(str) {
  return str.split(' ')
    .reduce((ac, el) => Math.max(ac, el.length), 0);
}
*/
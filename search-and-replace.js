function myReplace(str, before, after) {
  let breg = /^[A-Z]/;
  if (breg.test(before)){
    let aft = after.charAt(0).toUpperCase()+after.slice(1);
    return str.replace(before, aft);
  }
  return str.replace(before, after);
}

console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));

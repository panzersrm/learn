function titleCase(str) {
  let ar = str.split(" ");
  let arL = ar.map(el=>el.toLowerCase());
  return arL
          .map(el=>el.charAt(0).toUpperCase()+el.slice(1))
          .join(" ");
}

console.log(titleCase("I'm a little tea pot"));
// The global variable
var globalTitle = "Winter Is Coming";

// Only change code below this line
function urlSlug(title) {
let arr = title.split(/\W/);
return arr.map(a => a.toLowerCase()).filter(a => a!=="").join("-");
}
// Only change code above this line


console.log(urlSlug(globalTitle));
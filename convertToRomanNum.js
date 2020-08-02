function convertToRoman(num) {
 let roman = 
  { 0: "",
    1: "I",
    2: "II",
    3: "III",
    4: "IV",
    5: "V",
    6: "VI",
    7:  "VII",
    8:  "VIII",
    9:  "IX"
  };

  let rep = 
  {
    2: ["X","L","XC"],
    3: ["C", "D","CM"],
  };

  let no = num.toString();
  let rank=no.length;
  let res="";

  if (rank==4){
    for (let i=1;i<=parseInt(no.charAt(0));i++){
      res+="M";
    }
    res+=conv(rank-1, no.slice(1));
    res+=conv(rank-2, no.slice(2));
    res+=roman[no.slice(3)];
  } else if (rank==3){
    res+=conv(rank, no);
    res+=conv(rank-1, no.slice(1));
    res+=roman[no.slice(2)];
  } else if (rank==2){
    res+=conv(rank, no);
    res+=roman[no.slice(1)];
  } else {
    res+=roman[num];
  }

  return res;

  function conv(n, str){
    let first = parseInt(str.charAt(0));
    if (first==9){
      return rep[n][2];
    }
    return roman[first].replace(/I/g,rep[n][0]).replace("V",rep[n][1])
  }

 
/*let ones = num%10;
let tens = num%100-ones;
let hundreds = num%1000-tens-ones;
let thousands = num%10000-hundreds-tens-ones;
*/
  
 //return res+roman[tens]+roman[ones];
}

console.log(convertToRoman(6541));


//FCC solution:
/*
var convertToRoman = function(num) {
  var decimalValue = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var romanNumeral = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I"
  ];

  var romanized = "";

  for (var index = 0; index < decimalValue.length; index++) {
    while (decimalValue[index] <= num) {
      romanized += romanNumeral[index];
      num -= decimalValue[index];
    }
  }

  return romanized;
};
*/
function checkCashRegister(price, cash, cid) {
  let change = [];
  let chValue = cash-price;
  let currency = {
    PENNY: 0.01,
    NICKEL: 0.05,
    DIME: 0.1,
    QUARTER: 0.25,
    ONE: 1,
    FIVE: 5,
    TEN: 10,
    TWENTY: 20,
    "ONE HUNDRED": 100
  }
  //create cidAvailable, an array of [currency unit, number of coins or bills in cid] 
  let cidAvailable = cid.map(el=>[el[0], Math.ceil(el[1]/currency[el[0]])]).reverse();
  let val = Object.values(currency).reverse();
  let key = Object.keys(currency).reverse();
  // ch is an array of currency units that the customer will receive as change
  let ch = [];
  
  for (let i = 0; i<val.length; i++){
    // iteration is needed to check that the change doesn't excede certain type of currency unit avalability in register
    let iteration = 0;
    while (chValue>=0 && chValue>=val[i] && iteration<cidAvailable[i][1]){  
      chValue-=val[i];
      console.log(chValue)
      ch.push(key[i]);
      iteration++;
    }
  }
  //cha is a 2D array from ch with same currency units grouped in subarrays
  let cha =[];
  for (let i=0;i<ch.length;i++){
    if (ch[i]!==ch[i+1]){
    cha.push(ch.filter(el=>el==ch[i]));
    }
  }
  //changeRes is a 2D array from cha with subarrays: [currency unit, number of coins or bills received as change]
  let changeRes = cha.map(el=>[el[0], el.length]);
  //changeResult is the required change 2D array with subarrays: [currency unit, total value of coins or bills received as change]
  let changeResult = changeRes.map(el=>[el[0], currency[el[0]]*el[1]])
  
  
  
  //console.log(changeResult);
  //console.log(cidAvailable);
  
  let changeResVer = changeRes.flat();
  let cidAvailableVer = cidAvailable.flat();
  
  //dif is a flatened cidAvailable array with only the currency units needed for the change
  let dif=[];
  for (let i=0; i<changeResVer.length; i++){
      if (cidAvailableVer.indexOf(changeResVer[i])){
        dif.push(changeResVer[i]);
        dif.push(cidAvailableVer[(cidAvailableVer.indexOf(changeResVer[i])+1)]);
        i++;
    }
  }

  //create changeResVerValues and difValues arrays that contain only the integer values in changeResVer and dif
  let changeResVerValues = [];
  changeResVer.map(el=>Number.isInteger(el)?changeResVerValues.push(el):false);
  let difValues = [];
  dif.map(el=>Number.isInteger(el)?difValues.push(el):false);
  
  let result = {
    status: "INSUFFICIENT_FUNDS",
    change: []
  }

  for (let i=0;i<difValues.length;i++){
    if(changeResVerValues[i]<difValues[i]){
      result.status="OPEN";
      result.change=changeResult;
      
    }
  }
  return result;
}

console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));

function checkCashRegister(price, cash, cid) {
  let change = cash-price;
  let chValue = change;
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
  };
  let result = {
    status: "INSUFFICIENT_FUNDS",
    change: []
  };

  //create cidAvailable, an array of [currency unit, number of coins or bills in cid] 
  let cidAvailable = cid.map(el=>[el[0], Math.ceil(el[1]/currency[el[0]])]).reverse();
  let val = Object.values(currency).reverse();
  let key = Object.keys(currency).reverse();
  
  // ch is an array of currency units that the customer could receive as change according to availability in register
  let ch = [];
  for (let i = 0; i<val.length; i++){
    // iteration is needed to check that the change doesn't excede certain type of currency unit avalability in register
    let iteration = 0;
    while (chValue>=0 && chValue>=val[i] && iteration<cidAvailable[i][1]){  
      chValue=chValue.toFixed(2)-val[i];
      ch.push(key[i]);
      iteration++;
    }
  }

  // calculate cashInRegister as total register value
  let cashInRegister = 0;
  for (let i=0;i<cidAvailable.length;i++){
    cashInRegister+=cid[i][1];
  }

  //calculate changeInRegister specific to change due as total available smaller units in register
  let changeInRegister = 0;
  for (let i=0;i<ch.length;i++){
    changeInRegister+=currency[ch[i]];
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

  //if total register value is smaller than change due or there are not enough small units to return exact change, print INSUFFICIENT_FUNDS
  if(cashInRegister.toFixed(2)<change || changeInRegister.toFixed(2)<change){
    return result;
  }
  //else if total register value is same as change due, print CLOSED
  else if (cashInRegister.toFixed(4)==change){
    result.status="CLOSED";
    result.change=cid;
    return result;
  } 
  // if there is enough chash in register for change due, print OPEN
  else {
      result.status="OPEN";
      result.change=changeResult;
      return result;
  }
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));

console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));

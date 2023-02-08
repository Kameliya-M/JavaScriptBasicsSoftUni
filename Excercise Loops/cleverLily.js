function cleverLily(input) {
  let age = Number(input[0]);
  let washerPrice = Number(input[1]);
  let toyPrice = Number(input[2]);

  let totalMoney = 0;
  let evenBirthdayMoney = 10;

  for (let i = 1; i <= age; i++) {
    if (i % 2 === 0) {
        totalMoney = totalMoney + (evenBirthdayMoney - 1);
        evenBirthdayMoney = evenBirthdayMoney + 10;
    }else{
        totalMoney = totalMoney + toyPrice;
    }
  }
  if(totalMoney >= washerPrice){
    let N = totalMoney - washerPrice;
    console.log(`Yes! ${N.toFixed(2)}`);
  }else{
    let M = washerPrice - totalMoney;
    console.log(`No! ${M.toFixed(2)}`);
  }
}
cleverLily(["10", "170.00", "6"]);

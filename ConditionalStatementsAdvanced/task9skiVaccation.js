function skiVaccationCalc(input) {
  let daysCount = Number(input[0]);
  let roomType = input[1];
  let grading = input[2];

  let price = 0;
  let priceDiscount=0;

  switch (roomType) {
    case "room for one person":
      price = 18;
      priceDiscount=18;
      break;
    case "apartment":
      price = 25;
    if(daysCount<10){
        priceDiscount=price*0.7
    }else if(daysCount>15){
        priceDiscount=0.5*price;
    }else if(daysCount<=15){
        priceDiscount=0.65*price;
    }
      break;
    case "president apartment":
      price = 35;
      if (daysCount < 10) {
        priceDiscount = price * 0.9;
      } else if (daysCount > 15) {
        priceDiscount = 0.8 * price;
      } else if (daysCount < 15) {
        priceDiscount = 0.85 * price;
      }
      break;
  }
  let totalPrice=0;
  let nights=1;
  if (daysCount >= 2) {
    nights = daysCount - 1;
  }
  if(grading==="positive"){

    totalPrice = priceDiscount * nights;
    let positiveDiscount=0.25*totalPrice
    totalPrice=totalPrice+positiveDiscount;
  }else if(grading==="negative"){
    totalPrice = priceDiscount * nights;
    let negativeDiscount = 0.1 * totalPrice;
    totalPrice = totalPrice - negativeDiscount;
  }
    console.log(totalPrice.toFixed(2));
}

skiVaccationCalc(["14", "apartment", "positive"]);


// function percentage(partialValue, totalValue) {
//   return (100 * partialValue) / totalValue;
// } 

// function percentage(percentage, totalValue) {
//   return (percentage / 100) * totalValue;
// } 
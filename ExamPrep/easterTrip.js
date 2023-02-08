function easterTrip(input) {
  let destination = input[0];
  let dates = input[1];
  let nightsCount = Number(input[2]);

  switch (destination) {
    case "France":
      switch (dates) {
        case "21-23":
          totalPrice = nightsCount * 30;
          break;
        case "24-27":
          totalPrice = nightsCount * 35;
          break;
        case "28-31":
          totalPrice = nightsCount * 40;
          break;
      }
      break;
    case "Italy":
      switch (dates) {
        case "21-23":
          totalPrice = nightsCount * 28;
          break;
        case "24-27":
          totalPrice = nightsCount * 32;
          break;
        case "28-31":
          totalPrice = nightsCount * 39;
          break;
      }
      break;
    case "Germany":
      switch (dates) {
        case "21-23":
          totalPrice = nightsCount * 32;
          break;
        case "24-27":
          totalPrice = nightsCount * 37;
          break;
        case "28-31":
          totalPrice = nightsCount * 43;
          break;
      }
      break;
    default:
      console.log("error");
  }
  console.log(`Easter trip to ${destination} : ${totalPrice.toFixed(2)} leva.`);
  
}

easterTrip(["Germany", "24-27", "5"]);

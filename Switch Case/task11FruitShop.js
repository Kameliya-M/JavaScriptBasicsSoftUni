function fruitShop(input) {
  let fruit = input[0];
  let day = input[1];
  let quantity = Number(input[2]);

  switch (fruit) {
    case "banana":
      switch (day) {
        case "Monday":
          console.log((quantity * 2.5).toFixed(2));
          break;
        case "Tuesday":
          console.log((quantity * 2.5).toFixed(2));
          break;
        case "Wednesday":
          console.log((quantity * 2.5).toFixed(2));
          break;
        case "Thursday":
          console.log((quantity * 2.5).toFixed(2));
          break;
        case "Friday":
          console.log((quantity * 2.5).toFixed(2));
          break;
        case "Saturday":
          console.log((quantity * 2.7).toFixed(2));
          break;
        case "Sunday":
          console.log((quantity * 2.7).toFixed(2));
          break;
        default:
          console.log("error");
          break;
      }
      break;
    case "apple":
      switch (day) {
        case "Monday":
          console.log((quantity * 1.2).toFixed(2));
          break;
        case "Tuesday":
          console.log((quantity * 1.2).toFixed(2));
          break;
        case "Wednesday":
          console.log((quantity * 1.2).toFixed(2));
          break;
        case "Thursday":
          console.log((quantity * 1.2).toFixed(2));
          break;
        case "Friday":
          console.log((quantity * 1.2).toFixed(2));
          break;
        case "Saturday":
          console.log((quantity * 1.25).toFixed(2));
          break;
        case "Sunday":
          console.log((quantity * 1.25).toFixed(2));
          break;
        default:
          console.log("error");
          break;
      }
      break;
    case "orange":
      switch (day) {
        case "Monday":
          console.log((quantity * 0.85).toFixed(2));
          break;
        case "Tuesday":
          console.log((quantity * 0.85).toFixed(2));
          break;
        case "Wednesday":
          console.log((quantity * 0.85).toFixed(2));
          break;
        case "Thursday":
          console.log((quantity * 0.85).toFixed(2));
          break;
        case "Friday":
          console.log((quantity * 0.85).toFixed(2));
          break;
        case "Saturday":
          console.log((quantity * 0.9).toFixed(2));
          break;
        case "Sunday":
          console.log((quantity * 0.9).toFixed(2));
          break;
        default:
          console.log("error");
          break;
      }
      break;
    case "grapefruit":
      switch (day) {
        case "Monday":
          console.log((quantity * 1.45).toFixed(2));
          break;
        case "Tuesday":
          console.log((quantity * 1.45).toFixed(2));
          break;
        case "Wednesday":
          console.log((quantity * 1.45).toFixed(2));
          break;
        case "Thursday":
          console.log((quantity * 1.45).toFixed(2));
          break;
        case "Friday":
          console.log((quantity * 1.45).toFixed(2));
          break;
        case "Saturday":
          console.log((quantity * 1.6).toFixed(2));
          break;
        case "Sunday":
          console.log((quantity * 1.6).toFixed(2));
          break;
        default:
          console.log("error");
          break;
      }
      break;
    case "kiwi":
      switch (day) {
        case "Monday":
          console.log((quantity * 2.7).toFixed(2));
          break;
        case "Tuesday":
          console.log((quantity * 2.7).toFixed(2));
          break;
        case "Wednesday":
          console.log((quantity * 2.7).toFixed(2));
          break;
        case "Thursday":
          console.log((quantity * 2.7).toFixed(2));
          break;
        case "Friday":
          console.log((quantity * 2.7).toFixed(2));
          break;
        case "Saturday":
          console.log((quantity * 3.0).toFixed(2));
          break;
        case "Sunday":
          console.log((quantity * 3.0).toFixed(2));
          break;
        default:
          console.log("error");
          break;
      }
      break;
    case "pineapple":
      switch (day) {
        case "Monday":
          console.log((quantity * 5.5).toFixed(2));
          break;
        case "Tuesday":
          console.log((quantity * 5.5).toFixed(2));
          break;
        case "Wednesday":
          console.log((quantity * 5.5).toFixed(2));
          break;
        case "Thursday":
          console.log((quantity * 5.5).toFixed(2));
          break;
        case "Friday":
          console.log((quantity * 5.5).toFixed(2));
          break;
        case "Saturday":
          console.log((quantity * 5.6).toFixed(2));
          break;
        case "Sunday":
          console.log((quantity * 5.6).toFixed(2));
          break;
        default:
          console.log("error");
          break;
      }
      break;
    case "grapes":
      switch (day) {
        case "Monday":
          console.log((quantity * 3.85).toFixed(2));
          break;
        case "Tuesday":
          console.log((quantity * 3.85).toFixed(2));
          break;
        case "Wednesday":
          console.log((quantity * 3.85).toFixed(2));
          break;
        case "Thursday":
          console.log((quantity * 3.85).toFixed(2));
          break;
        case "Friday":
          console.log((quantity * 3.85).toFixed(2));
          break;
        case "Saturday":
          console.log((quantity * 4.2).toFixed(2));
          break;
        case "Sunday":
          console.log((quantity * 4.2).toFixed(2));
          break;
        default:
          console.log("error");
          break;
      }
      break;

    default:
      console.log("error");
      break;
  }
}

fruitShop(["apple", "Workday", "2"]);

function calcFrutsprice(input) {
  let fruit = input[0];
  let day = input[1];
  let quantity = Number(input[2]);
  let currentFruitPrice = 0;
  let fruits = [
    "banana",
    "apple",
    "orange",
    "grapefruit",
    "kiwi",
    "pineapple",
    "grapes",
  ];
  let workDays = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday'
  ];
  let weekend = ["Saturday", "Sunday"];
  let isWorkDay = false;
  let isWeekend = false;
  let isFruitExist = false;
  
  for (let i = 0; i < workDays.length; i++) {
    if (workDays[i] === day) {
      isWorkDay = true;
    }
  }

  for (let i = 0; i < weekend.length; i++) {
    if (weekend[i] === day) {
      isWeekend = true;
    }
  }

  for (let i = 0; i < fruits.length; i++) {
    if (fruits[i] === fruit) {
      isFruitExist = true;
    }
  }


  // Check if the input in valid.
  if (isFruitExist === false || (isWeekend === false && isWorkDay === false)) {
      console.log('error');
      
      return
  }

    switch (fruit) {
      case "banana":
        switch (isWorkDay) {
          case true:
            currentFruitPrice = 2.50;
            break;
          case false:
            currentFruitPrice = 2.70;
            break;
        }
        break;
      case "apple":
        switch (isWorkDay) {
          case true:
            currentFruitPrice = 1.20;
            break;
          case false:
            currentFruitPrice = 1.25;
            break;
        }
        break;
      case "orange":
        switch (isWorkDay) {
          case true:
            currentFruitPrice = 0.85;
            break;
          case false:
            currentFruitPrice = 0.90;
            break;
        }
        break;
      case "grapefruit":
        switch (isWorkDay) {
          case true:
            currentFruitPrice = 1.45;
            break;
          case false:
            currentFruitPrice = 1.60;
            break;
        }
        break;
      case "kiwi":
        switch (isWorkDay) {
          case true:
            currentFruitPrice = 1.70;
            break;
          case false:
            currentFruitPrice = 3.00;
            break;
        }
        break;
      case "pineapple":
        switch (isWorkDay) {
          case true:
            currentFruitPrice = 5.50;
            break;
          case false:
            currentFruitPrice = 5.60;
            break;
        }
        break;
      case "grapes":
        switch (isWorkDay) {
          case true:
            currentFruitPrice = 3.85;
            break;
          case false:
            currentFruitPrice = 4.20;
            break;
        }
        break;

      default:
        console.log("error");
        break;
    }

  console.log((quantity * currentFruitPrice).toFixed(2));
}

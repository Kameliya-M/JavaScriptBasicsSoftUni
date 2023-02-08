function fruitShop(input) {
  let fruit = input[0];
  let day = input[1];
  let quantity = Number(input[2]);
  let price = 0;
  let validDay =
    day === "Monday" ||
    day === "Tuesday" ||
    day === "Wednesday" ||
    day === "Thursday" ||
    day === "Friday" ||
    day === "Saturday" ||
    day === "Sunday";
  let validFruit =
    fruit === "banana" ||
    fruit === "apple" ||
    fruit === "orange" ||
    fruit === "grapefruit" ||
    fruit === "kiwi" ||
    fruit === "pineapple" ||
    fruit === "grapes";
  if (!validFruit) {
    console.log("error");
  }
  if (!validDay) {
    console.log("error");
  }
  switch (day) {
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":
      if (fruit === "banana") {
        price = quantity * 2.5;
        console.log(price.toFixed(2));
      } else if (fruit === "apple") {
        price = quantity * 1.2;
        console.log(price.toFixed(2));
      } else if (fruit === "orange") {
        price = quantity * 0.85;
        console.log(price.toFixed(2));
      } else if (fruit === "grapefruit") {
        price = quantity * 1.45;
        console.log(price.toFixed(2));
      } else if (fruit === "kiwi") {
        price = quantity * 2.7;
        console.log(price.toFixed(2));
      } else if (fruit === "pineapple") {
        price = quantity * 5.5;
        console.log(price.toFixed(2));
      } else if (fruit === "grapes") {
        price = quantity * 3.85;
        console.log(price.toFixed(2));
      }
      break;

    case "Saturday":
    case "Sunday":
      if (fruit === "banana") {
        price = quantity * 2.7;
        console.log(price.toFixed(2));
      } else if (fruit === "apple") {
        price = quantity * 1.25;
        console.log(price.toFixed(2));
      } else if (fruit === "orange") {
        price = quantity * 0.9;
        console.log(price.toFixed(2));
      } else if (fruit === "grapefruit") {
        price = quantity * 1.6;
        console.log(price.toFixed(2));
      } else if (fruit === "kiwi") {
        price = quantity * 3.0;
        console.log(price.toFixed(2));
      } else if (fruit === "pineapple") {
        price = quantity * 5.6;
        console.log(price.toFixed(2));
      } else if (fruit === "grapes") {
        price = quantity * 4.2;
        console.log(price.toFixed(2));
      }
      break;
  }
}

fruitShop(["tomato", "Monday", "0.5"]);

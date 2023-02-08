function numberOperation(input) {
  let a = Number(input[0]);
  let b = Number(input[1]);
  let operator = input[2];

  let result = 0;
  switch (operator) {
    case "+":
      result = a + b;
      break;
    case "-":
      result = a - b;
      break;
    case "*":
      result = a * b;
      break;
    case "/":
      result = a / b;
      break;
    case "%":
      result = a % b;
      break;
  }
  if (operator === "+" || operator === "-" || operator === "*") {
    console.log(
      `${a} ${operator} ${b} = ${result} - ${result % 2 == 0 ? "even" : "odd"} `
    );
  } else if (operator === "/") {
    if (b === 0) {
        console.log("Cannot divide " + a + " by zero");

    } else {
        console.log(`${a} / ${b} = ${result.toFixed(2)}`);

    }

  } else if (operator === "%") {
     if (b === 0) {
       console.log("Cannot divide " + a + " by zero");
     } else{
        console.log(a + " " + operator + " " + b + " = " + result);
     }
    
  }
}

numberOperation(["10", "0", "%"]);

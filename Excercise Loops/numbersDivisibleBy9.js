function numbersDivisibleBy9(input) {
  let numberFirst = Number(input[0]);
  let numberSecond = Number(input[1]);

  let sum = 0;
  let outputNumbers = 0;

  for (let i = numberFirst; i <= numberSecond; i++) {
    if (i % 9 === 0) {
      sum = sum + i;
      outputNumbers = outputNumbers + i + "\n";
    }
  }
  console.log("The sum: " + sum);
  console.log(outputNumbers);
}

numbersDivisibleBy9(["100", "200"]);

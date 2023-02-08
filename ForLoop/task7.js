// function sumNumbers(input) {
//   let n = input[0];
//   let numAsString = n + "";
//   let sum = 0;
//   for (let i = 0; i < numAsString.length; i++) {
//     sum = sum + Number(numAsString[i]);
//   }
//   console.log(`The sum of the digits is:${sum}`);
// }

// sumNumbers(["1234"]);

function sumNumbers(input) {
  let number = input[0];
  let sum = 0;

  for (let i = 0; i < number.length; i++) {
    sum += Number(number[i]);
  }
  console.log(`The sum of the digits is:${sum}`);
}
sumNumbers(["1234"]);

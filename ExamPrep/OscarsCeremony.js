function oscarsCeremony(input){

let hallRent = Number(input[0]);

let statuesPrice = hallRent - (30/100 * hallRent);
let cateringPrice = statuesPrice - (15/100 * statuesPrice);
let soundPrice = cateringPrice * 0.5;

let expenses = hallRent + statuesPrice + cateringPrice + soundPrice;
console.log(expenses.toFixed(2));
}

oscarsCeremony(["3500"]);
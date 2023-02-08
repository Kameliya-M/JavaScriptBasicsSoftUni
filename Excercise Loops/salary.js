function salary(input) {
  let tabsOpen = Number(input[0]);
  let salary = Number(input[1]);

  for (let i = 2; i <= input.length; i++) {
    let nameTab = input[i];
    if (nameTab === "Facebook") {
      salary = salary - 150;
    } else if (nameTab === "Instagram") {
      salary = salary - 100;
    } else if (nameTab === "Reddit") {
      salary = salary - 50;
    }
  }
  if (salary <= 0) {
    console.log("You have lost your salary.");
  } else {
    console.log(salary);
  }
}

salary([
  "10",
  "750",
  "Facebook",
  "Dev.bg",

  "Instagram",

  "Facebook",

  "Reddit",

  "Facebook",

  "Facebook",
]);

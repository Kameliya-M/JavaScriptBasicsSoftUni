// function password(input){
//     let index = 0;
//     let username = input[0];
//     index++;
//     let realPassword = input[index];
//     index++;
//     let enteredPassword= input[index];
//     index++;
//     while(realPassword!==enteredPassword){
//         enteredPassword = input[index];
//         index++;
//     }
//     console.log(`Welcome ${username}!`)

// }

// password(["Nakov", "1234", "Pass", "1324", "1234"]);

function password(input) {
  let username = input[0];
  let password = input[1];
  let data = input[2];
  let index = 3;
  while (data !== password) {
    data = input[index];
    index++;
  }
  console.log(`Welcome ${username}!`);
}

password(["Nakov", "1234", "Pass", "1324", "1234"]);

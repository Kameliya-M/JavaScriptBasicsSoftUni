function darts(input) {
  let playerName = input[0];
  let index = 1;
  let field = input[index];
  index++;
  let score = Number(input[index]);
  index++;
  let success = 0;
  let unsuccess = 0;
  let startingPoints = 301;

  while (field !== "Retire") {
    switch (field) {
      case "Single":
        score = score * 1;
        if (startingPoints - score >= 0) {
          startingPoints = startingPoints - score;
          success++;
        } else {
          unsuccess++;
        }
        break;
      case "Double":
        score = score * 2;
        if (startingPoints  - score >= 0) {
          startingPoints = startingPoints - score;
          success++;
        } else {
          unsuccess++;
        }
        break;
      case "Triple":
        score = score * 3;
        if (startingPoints - score >= 0) {
          startingPoints = startingPoints - score;
          success++;
        } else {
          unsuccess++;
        }
        break;
        default:
            break;
    }
    if(startingPoints === 0){
        break;
    }
    field = input[index];
    index++;
    score = Number(input[index]);
    index++;

  }
  if (startingPoints === 0){
    console.log(`${playerName} won the leg with ${success} shots.`);
}else{
    console.log(`${playerName} retired after ${unsuccess} unsuccessful shots.`);

}
}

darts([
  "Michael van Gerwen Triple","20","Triple",
  "19",
  "Double",
  "10",
  "Single",
  "3",
  "Single",
  "1",
  "Triple",
  "20",
  "Triple",
  "20",
  "Double",
  "20",
]);

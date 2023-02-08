function tennisRanklist(input) {
  let tournamentCount = Number(input[0]);
  let initialPoints = Number(input[1]);
  let pointsWon=0;
  let tournamentsWon=0;

  for (i = 2; i < input.length; i++) {
    let status = input[i];

    if(status==="W"){
       pointsWon+=2000;
       tournamentsWon++;
    }else if(status==="F"){
        pointsWon+=1200;
    }else{
        pointsWon+=720;
    }
  }

  let totalPoints=initialPoints+pointsWon;
  console.log(`Final points: ${totalPoints}`);

  let avgPoints=Math.floor(pointsWon/tournamentCount);
  console.log(`Average points: ${avgPoints}`);
  
  let tournamentsWonPercent=(tournamentsWon/tournamentCount) * 100;
  console.log(`${tournamentsWonPercent.toFixed(2)}%`);


}

tennisRanklist(["5", "1400", "F", "SF", "W", "W", "SF"]);

function movieDay(input){
    let shotsTime = Number(input[0]);
    let scenesCount = Number(input[1]);
    let timePerScene = Number(input[2]);

    let preparationTime = shotsTime * 0.15;
    let timeShotsScene = scenesCount * timePerScene;
    let timeTotal = preparationTime + timeShotsScene;
    

    if(timeTotal >= shotsTime){
        let timeNeeded = timeTotal - shotsTime;
        console.log(`Time is up! To complete the movie you need ${timeNeeded} minutes.`);
    }
    if(timeTotal < shotsTime){
        let timeLeft = shotsTime - timeTotal;
        console.log(
          `You managed to finish the movie on time! You have ${Math.round(timeLeft)} minutes left!`);
    }

}

movieDay(["60","15","3"]);
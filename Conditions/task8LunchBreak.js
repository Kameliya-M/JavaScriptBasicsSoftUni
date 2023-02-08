

function lunchBreak(input){
    let episodeName=(input[0]);
    let episodeTime= Number(input[1]);
    let lunchBreakTime = Number(input[2]);

    let lunchTime=(1/8)*lunchBreakTime;
    let breakTime=(1/4)*lunchBreakTime;
    let timeLeft=lunchBreakTime-(lunchTime+breakTime);
    //console.log(timeLeft)
    if(timeLeft>=episodeTime){
        console.log(`You have enough time to watch ${episodeName} and left with ${Math.ceil(timeLeft-episodeTime)} minutes free time.`)
    }
    
    if(timeLeft<episodeTime){
        console.log(`You don't have enough time to watch ${episodeName}, you need ${Math.ceil(episodeTime-timeLeft)} more minutes.`)
    }
    
}

lunchBreak(["Game of Thrones","60","96"]);
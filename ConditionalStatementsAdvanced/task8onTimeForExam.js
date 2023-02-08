
function timeForTheExamCalc(input){

    let hourExam=Number(input[0]);
    let minuteExam=Number(input[1]);
    let hourArrive=Number(input[2]);
    let minuteArrive=Number(input[3]);

    let totalExamMins=hourExam*60+minuteExam;
    let totalArrrivalMins=hourArrive*60+minuteArrive;

    let totalMinsDiff=Math.abs(totalExamMins-totalArrrivalMins);
    let hoursDiff=Math.floor(totalMinsDiff/60);
    let minsDiff=totalMinsDiff%60;

    let timeDiff=""

    if(hoursDiff>0){
        if(minsDiff<10){
            timeDiff=`${hoursDiff}:0${minsDiff}`;
        }else{
            timeDiff = `${hoursDiff}:${minsDiff}`;
        }

        
    }else{
        timeDiff=minsDiff;
    }
    if(totalArrrivalMins<totalExamMins){
        if(totalMinsDiff<=30){
            console.log("On time");
            console.log(`${timeDiff} minutes before the start`);
            }else{
                console.log('Early');
            if(totalMinsDiff<60){
                console.log(`${timeDiff} minutes before the start`);
            }else{
                console.log(`${timeDiff} hours before the start`);
                
            }    
                
            }
    }else if(totalArrrivalMins>totalExamMins){
           console.log('Late');
           if(totalMinsDiff<60){
            console.log(`${timeDiff} minutes after the start`);
           }else{
            console.log(`${timeDiff} hours after the start`);
           }
           
    }else{
        console.log("On time");
    }



}

timeForTheExamCalc(["9", "30", "9", "50"]);


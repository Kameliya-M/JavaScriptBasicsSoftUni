//task 3 

function add15Minutes(input){
     let time1=Number(input[0]);
     let time2=Number(input[1]);

     let totalTime=time1*60+time2+15;
     //console.log(totalTime);
     

     let hours=Math.floor(totalTime/60);
     let minutes=totalTime%60;
        
     if (hours>23){
        hours = 0
     }
     
     if(minutes<10){
        minutes = `0${minutes}`  
     }
     
     console.log(`${hours}:${minutes}`)
}

add15Minutes(["23","45"]);
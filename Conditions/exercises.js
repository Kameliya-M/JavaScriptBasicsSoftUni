//task 1 Sum Seconds

function sumSeconds(input){
   let time1=Number(input[0]);
   let time2=Number(input[1]);
   let time3=Number(input[2]);

   let totalTime= time1+time2+time3
//    console.log(totalTime);
   
//124
//120s - 2m
//4s
//2:04

let mins=Math.floor(totalTime/60);
let secs=(totalTime%60);

if(secs<10){
    console.log(`${mins}:0${secs}`);
}else{
console.log(`${mins}:${secs}`);
}

}

sumSeconds(["35","45","44"]);


//task 2 Bonus Points

function bounusScore(input){
   let initialScore=Number(input[0]);
   let bonus=0;

   if (initialScore<=100){
    bonus=5;
   }else if(initialScore<=1000){
     bonus=0.20*initialScore;
   }else{
      bonus=0.10*initialScore;
   }
   
   if(initialScore %2===0){
    bonus=bonus+1;
   }else if(initialScore%10===5){
    bonus=bonus+2;
   }
   console.log(bonus);
   console.log(initialScore+bonus);
}

bounusScore(["20"]);




// task 4 Toy SHop

function toyShop(input){
     let tripPrice=Number(input[0]);
     let puzzleCount=Number(input[1]);
     let dollsCount=Number(input[2]);
     let teddyBears=Number(input[3]);
     let mignonCount=Number(input[4]);
     let trucksCount=Number(input[5]);

     let moneyEarned= 2.60*puzzleCount + 3*dollsCount + 4.10*teddyBears + 8.20*mignonCount + 2*trucksCount; 
     let toyCount=puzzleCount+dollsCount+teddyBears+mignonCount+trucksCount;

     if (toyCount>=50){
        moneyEarned=moneyEarned*0.75;
     }
     let moneyAfterRent=moneyEarned*0.90;
     if(moneyAfterRent>=tripPrice){
        let moneyLeft=moneyAfterRent-tripPrice;
        console.log(`Yes! ${moneyLeft.toFixed(2)} lv left.`)
     }else{
        let insufficientMoney=tripPrice-moneyAfterRent;
        console.log(`Not enough money! ${insufficientMoney.toFixed(2)} lv needed.`);
     }
}

toyShop(["40.8","20","25","30","50","10"])


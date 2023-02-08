

function shopping(input){

    let budgetPetar= Number(input[0]);
    let videocardCount= Number(input[1]);
    let processorCount= Number(input[2]);
    let ramCount= Number(input[3]);

    let videoCardPrice= videocardCount*250;
    let processorPrice = (videoCardPrice*0.35)*processorCount;
    //console.log(processorPrice);
    let ramPrice= (videoCardPrice*0.10)*ramCount;
    //console.log(ramPrice);
    let totalPrice= videoCardPrice+processorPrice+ramPrice;
    //console.log(totalPrice);

    if (videocardCount>processorCount){
        totalPrice= totalPrice -(totalPrice*0.15);
        //let moneyLeft= budgetPetar-totalPrice
        //console.log(moneyLeft);
    }

    if(budgetPetar>=totalPrice){
        console.log(`You have ${(budgetPetar-totalPrice).toFixed(2)} leva left!`);
    }

    if(totalPrice>budgetPetar){
        console.log(`Not enough money! You need ${(totalPrice-budgetPetar).toFixed(2)} leva more!`);
    }
}

shopping(["920.45","3","1","1"]);
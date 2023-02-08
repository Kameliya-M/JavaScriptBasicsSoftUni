


function godzillaKong(input){
    let filmBudget= Number(input[0]);
    let actorsCount= Number(input[1]);
    let costumePrice= Number(input[2]);

    let decorPrice= filmBudget*0.10;
    let costumeTotal=actorsCount*costumePrice;
    let filmTotalAmount=decorPrice+costumeTotal;
    //console.log(filmTotalAmount);

    if(actorsCount>150){
       filmTotalAmount=costumeTotal - (costumeTotal*0.10) + decorPrice;
    }
    
    if(filmTotalAmount>filmBudget){
        console.log("Not enough money!");
        console.log("Wingard needs " + (filmTotalAmount-filmBudget).toFixed(2) + " leva more.");
    }
    if(filmTotalAmount<=filmBudget){
        console.log("Action!");
        console.log("Wingard starts filming with " + (filmBudget-filmTotalAmount).toFixed(2) + " leva left.");
    }
    
}

godzillaKong(["9587.88","222","55.68"]);
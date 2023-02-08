// function squareArea(input){
//     let a = Number(input[0]);
//     let area = a*a;
//     console.log(area);
// }
// squareArea([5]);

// function convert(input){
    
//     let area= input*2.54
//     console.log(area);
// }
// convert(5);

// function greeting(input){
//     let name=input[0];
//     console.log(`Hello, ${name}!`);
// }
// greeting(["Kami"]);


function sum(first, second) {
    return first + second
}

console.log(sum(3, 4));


function concatenateData(input){
     let firstName= input[0];
     let lastName=input[1];
     let age=input[2];
     let town=input[3];

    let data=`You are ${firstName} ${lastName}, a ${age}-years old person from ${town}.`
    console.log(data);
}
concatenateData(["Kami", "Marinova", 36, "Varna"]);


function project(input){
    let name= input[0];
    let hoursPerProject= 3;
    let projects= input[1];
    let totalHours= projects*hoursPerProject;
    let text=`The architect ${name} will need ${totalHours} hours to complete ${projects} project/s.`;
     console.log(text);
}
project(["George", 4]);


function expenses (input){
    let dogFoodPrice=2.50;
    let catFoodPrice=4;
    let dogPackage= input[0];
    let catPackage= input[1];
    let amount= (dogFoodPrice * dogPackage) + (catFoodPrice *catPackage) + " lv.";
    console.log(amount);

}
expenses(['13','9']);




function planting(input){
    let house=input[0];
    let oneSquareMeterPrice= 7.61;
    let discount= 18/100;
    // calc the amount
    let amount = (oneSquareMeterPrice * house);
    // calc the total discount
    let totalDiscount= discount * amount;
    let finalAmount= amount-totalDiscount;

    console.log(`The final price is: ${finalAmount} lv.`)
    console.log(`The discount is: ${totalDiscount} lv.`);

   
    
    
    
}

planting([150]);
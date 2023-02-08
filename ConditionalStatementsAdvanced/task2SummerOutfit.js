function summeroutfit(input){

    let degrees= Number(input[0]);
    let timeOfDay= input[1];

    let outfit="";
    let shoes="";

//     if(degrees<=18 && timeOfDay==="Morning"){
         
//         outfit="Sweatshirt";
//         shoes="Sneakers";
//     }else if (timeOfDay === "Afternoon" || timeOfDay === "Evening"){
//       outfit = "Shirt";
//       shoes = "Moccasins";
//     }
//     if(degrees<=24 && (timeOfDay==="Morning" || "Evening")){
//         outfit="Shirt";
//         shoes="Moccasins";
//     }else if (timeOfDay === "Afternoon"){
//       outfit = "T-Shirt";
//       shoes = "Sandals";
//     }
//     if(degrees>=25 && timeOfDay==="Morning"){
//         outfit="T-shirt";
//         shoes="Sandals";
//     }else if(timeOfDay==="Afternoon"){
//         outfit="Swim Suit";
//         shoes="Barefoot";
//     }else if(timeOfDay==="Evening"){
//         outfit="Shirt";
//         shoes="Moccasins";
//     }
//     console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);
// }


switch(timeOfDay){
    case "Morning":
        if(degrees<=18){
            outfit="Sweatshirt";
            shoes="Sneakers";
        }else if(degrees<=24){
            outfit="Shirt";
            shoes="Moccasins";
        }else{
            outfit="T-Shirt";
            shoes="Sandals";
        }
        break;
        case "Afternoon":
            if(degrees<=18){
                outfit="Shirt";
                shoes="Moccasins";
            }else if(degrees<=24){
                outfit="T-Shirt";
                shoes="Sandals";
            }else{
                outfit="Swim Suit";
                shoes="Barefoot";
            }
            break;
            case "Evening":
                outfit="Shirt";
                shoes="Moccasins";
                break;
}
console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);
}


summeroutfit(["22", "Afternoon"]);
function cinema(input){

    let movieType=input[0];
    let rows=Number(input[1]);
    let columns=Number(input[2]);

    let totalTickets= rows*columns;
    let ticketPrice=0;
    

    switch(movieType){
        case "Premiere":
            ticketPrice=12.00;
            break;
            case "Normal":
                ticketPrice=7.50;
                break;
                case "Discount":
                    ticketPrice=5.00;
                    break;
    }

//     if(movieType==="Premiere"){
//         ticketPrice=12;
// } else if(movieType==="Normal"){
//     ticketPrice= 7.50;
// } else if(movieType=== "Discount"){
//     ticketPrice=5.00;
// }

let totalProfit = totalTickets * ticketPrice;
console.log(`${totalProfit.toFixed(2)} leva`);



}

cinema(["Premiere", "10", "12"]);

function trainTicket(input){
   let time= Number (input[0]);
   

if(time<9.30){
    console.log("full fare");
}else if(time>16.00 && time<=19.30){
    console.log("full fare");
}else if(time>=9.30 && time<=16.00){
    console.log("saver ticket")
}else if(time>19.30){
    console.log("saver ticket");
}
}

trainTicket(["16.01"])
trainTicket(["9.30"])
trainTicket(["19.30"])

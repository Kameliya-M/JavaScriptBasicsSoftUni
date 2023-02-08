

function journey(input){

    let budget= Number(input[0]);
    let season=(input[1]);

    let holidayType="";
    let destination = "";
    let totalAmount=0;

    switch(season){
        case "winter":
            holidayType="Hotel";
            break;
        case "summer":
            holidayType="Camp";
            break;
    }

    
    if(budget<=100 && budget>=10 && season==="summer"){
                  destination="Bulgaria";
                  totalAmount=0.3*budget;
            }else if(budget<=100 && budget>=10 && season==="winter"){
                  destination="Bulgaria";
                  totalAmount=0.7*budget;
            }
            if(budget<=1000 && budget>100 && season==="summer"){
                destination="Balkans";
                totalAmount=0.4*budget;

            }else if(budget<=1000 && budget>100 && season==="winter"){
                destination="Balkans";
                totalAmount=0.8*budget;
            }
    
            if(budget>1000){
                destination="Europe"
                totalAmount=0.9*budget;
                holidayType="Hotel";
            }
            console.log(`Somewhere in ${destination}`);
            console.log(`${holidayType} - ${totalAmount.toFixed(2)}`);

}
         


journey(["50", "summer"]);
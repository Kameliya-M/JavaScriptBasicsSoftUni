

function tradeCommissions(input){

    let city=input[0];
    let salesVolume=Number(input[1]);

    let commission=0

    switch (city) {
      case "Sofia":
        if (salesVolume <= 500 && salesVolume>=0) {
          commission = 0.05 * salesVolume;
        }if (salesVolume <= 1000 && salesVolume > 500) {
          commission = 0.07 * salesVolume;
        }if (salesVolume <= 10000 && salesVolume > 1000) {
          commission = (0.08 * salesVolume);
        }if (salesVolume > 10000) {
          commission = 0.12 * salesVolume;
          
        }
        console.log(commission.toFixed(2));
        break;
      
      case "Varna":
        if (salesVolume <= 500 && salesVolume >= 0) {
          commission = 0.045 * salesVolume;
        }if (salesVolume <= 1000 && salesVolume > 500) {
          commission = 0.075 * salesVolume;
        }if (salesVolume <= 10000 && salesVolume > 1000) {
          commission = 0.1 * salesVolume;
        }if (salesVolume > 10000) {
          commission = 0.13 * salesVolume;
          
        }
        console.log(commission.toFixed(2));
        break;
       

      case "Plovdiv":
        if (salesVolume <= 500 && salesVolume >= 0) {
          commission = 0.055 * salesVolume;
        }if (salesVolume <= 1000 && salesVolume > 500) {
          commission = 0.08 * salesVolume;
        }if (salesVolume <= 10000 && salesVolume > 1000) {
          commission = 0.12 * salesVolume;
        }if (salesVolume > 10000) {
          commission = 0.145 * salesVolume;
          
        }

        console.log(commission.toFixed(2));
        break;
        default:console.log("error");
        break;
       
    }


}

tradeCommissions(["Kaspichan", "-50"]);
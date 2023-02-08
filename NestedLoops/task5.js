function trip(input){

    let index = 0;
    let destination = input[index];
    index++;
    let minimalSum= Number(input[index]);
    index++;
    let sum = 0;
    let isEnd = false;

    while(destination !== "End"){
        while(minimalSum>sum){
            let savedMoney=input[index];
            if(savedMoney!=="End"){
                savedMoney = Number(input[index]);
            }else{
                isEnd = true;
                break;
            }
            index++;
            sum+=savedMoney;
        }
        if(isEnd){
            break;
        }
        console.log(`Going to ${destination}!`);
        destination = input[index];
        index++;
        minimalSum = Number(input[index]);
        index++;
        sum = 0;
    }
}

trip([
  "Greece",
  "1000",
  "200",
  "200",
  "300",
  "100",
  "150",
  "240",
  "Spain",
  "1200",
  "300",
  "500",
  "193",
  "423",
  "End",]);
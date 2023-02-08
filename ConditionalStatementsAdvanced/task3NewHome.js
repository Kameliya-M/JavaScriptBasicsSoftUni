function newHome(input){

    let flowerType=input[0];
    let flowerCount=Number(input[1]);
    let budget= Number(input[2]);

   

    let flowerPrice=0;

  switch(flowerType){
    case "Roses":
        flowerPrice=5;
        break;
    case "Dahlias":
        flowerPrice=3.80;
        break;
    case "Tulips":
        flowerPrice=2.80;
        break;
    case "Narcissus":
        flowerPrice=3;
        break;
    case "Gladiolus":
        flowerPrice=2.50;
        break;    

  }

  let totalprice=flowerCount*flowerPrice;
    
    if(flowerType==="Roses" && flowerCount>80){
        totalprice=totalprice*0.90;
    }else if(flowerType==="Dahlias" && flowerCount>90){
        totalprice=totalprice*0.85;
    }else if(flowerType==="Tulips" && flowerCount>80){
        totalprice=totalprice*0.85;
    }else if(flowerType==="Narcissus" && flowerCount<120){
        totalprice=totalprice*1.15;
    }else if(flowerType==="Gladiolus" && flowerCount<80){
        totalprice=totalprice*1.20;
    }

    if(budget>=totalprice){
    console.log(`Hey, you have a great garden with ${flowerCount} ${flowerType} and ${(budget - totalprice).toFixed(2)} leva left.`);
    }else{
    console.log(`Not enough money, you need ${(totalprice - budget).toFixed(2)} leva more.`);
    }
        
    }

newHome(["Roses", "55", "250"]);
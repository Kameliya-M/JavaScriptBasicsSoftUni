function demo(input){
    let name=input[0];
    let age=Number(input[1]);
    let city=input[2];
    console.log(`Hi, I am ${name}, I am ${age} years old and I am from ${city}.`);
}

demo(['Kami', '36', 'Varna']);

function convert(input){
    let usd= Number(input[0]);
    let bgn=usd * 1.79549;
    console.log(bgn);
}

convert(["22"]);



//сума = депозирана сума + срок на депозита * ((депозирана сума * годишен лихвен процент ) / 12)
function depositCalculator(input){
       let depositedSum= Number(input[0]);
       let depositPeriodMonths=Number(input[1]);
       let yearlyIncreasePercent=Number(input[2]);
    let yearlyIncreaseDecimal= yearlyIncreasePercent/100;
       let sum= depositedSum + depositPeriodMonths * ((depositedSum*yearlyIncreaseDecimal)/12);
       console.log(sum);
}
depositCalculator(["200","3","5.7"]);

// 1. Брой страници в текущата книга – цяло число в интервала [1…1000]

// 2. Страници, които прочита за 1 час – цяло число в интервала [1…1000]

// 3. Броят на дните, за които трябва да прочете книгата – цяло число в интервала [1…1000]

function compulsoryList(input){
    let currBookPages=Number(input[0]);
    let pagesPerHour=Number(input[1]);
    let daysCount=Number(input[2]);

    let totalHours=currBookPages/ pagesPerHour;
    let hoursPerDay=totalHours/daysCount;
    console.log(hoursPerDay);
    
}


compulsoryList(["212","20","2"]);


// task 7 Food Delivery

// Брой пилешки менюта – цяло число в интервала [0 … 99]

// · Брой менюта с риба – цяло число в интервала [0 … 99]

// · Брой вегетариански менюта – цяло число в интервала [0 … 99]
function foodDelivery(input){
      let chickenCount=Number(input[0]); //2    
      let fishCount=Number(input[1]);   //4
      let vegCount= Number(input[2]);   //3

      let totalMenuPrice=(chickenCount*10.35) + (fishCount*12.40) + (vegCount*8.15);
      let desertPrice= totalMenuPrice * 0.20;
      let totalPrice=totalMenuPrice + desertPrice + 2.50;
      console.log(totalPrice);
      
}

foodDelivery(["2","4","3"]);


// task 9

// 1. Дължина в см – цяло число в интервала [10 … 500]

// 2. Широчина в см – цяло число в интервала [10 … 300]

// 3. Височина в см – цяло число в интервала [10… 200]

// 4. Процент – реално число в интервала [0.000 … 100.000]

function fishTank(input) {
    let length = Number(input[0]);
    let width= Number(input[1]);
    let height=Number(input[2]);
    let takenSpacePercent=Number(input[3]);

    let takenSpaceDecimal = takenSpacePercent/100;
    let tankVolume = length*width*height;
    let tankVolumeLiters= tankVolume*0.001;
    let spaceTaken=takenSpaceDecimal*tankVolumeLiters;
    let spaceLeft=tankVolumeLiters-spaceTaken;
    console.log(spaceLeft);
}

fishTank(["85","75","47","17"])



//task 2 Radians to Degrees

function radiansToDegrees(input){
     let radians=Number(input[0]);
     let degrees=radians*180/Math.PI;
     console.log(degrees);
}

radiansToDegrees(["3.1416"]);


//task 5 Supplies for School

function schoolSupplies(input){
     let penCount=Number(input[0]);
     let markerCount=Number(input[1]);
     let detergentLiter=Number(input[2]);
     let discountPercent=Number(input[3]);

     let penPackage=penCount*5.80;
     let markerPackage=markerCount*7.20;
     let detergent=detergentLiter*1.20;
     let suppliesPrice= penPackage+markerPackage+detergent
     let discountPrice= suppliesPrice-(suppliesPrice*0.25);
     
     

     console.log(discountPrice);
}

schoolSupplies(["2","3","4","25"]);

//task 6 Repainting

function repainting(input){
    let nylonSquareMeter= Number(input[0]);
    let paintLiter=Number(input[1]);
    let thinnerLiter= Number(input[2]);
    let jobHours= Number(input[3]);

    let nylonPrice=(nylonSquareMeter+2)*1.50;
    let paintPrice=(paintLiter+(10/100*paintLiter))*14.50;
    let thinnerPrice=thinnerLiter*5;
    let bagsPrice=0.40;
    let materialsPrice= nylonPrice+paintPrice+thinnerPrice+bagsPrice;
    let workersPay=(materialsPrice*0.3)*jobHours;
    let totalPay=materialsPrice+workersPay

    console.log(totalPay);


}

repainting(["10","11","4","8"]);




// task 8 Basketball Equipment

function basketballExpenses(input){
      let yearlyPay= Number(input[0]);

      let basketballSneakers=yearlyPay-(yearlyPay*(40/100));
      let basketballOutfit=basketballSneakers-(basketballSneakers*(20/100));
      let basketballBall=basketballOutfit*0.25;
      let basketballAccessories=basketballBall*0.2;
      let basketballTotalAmount= yearlyPay+basketballSneakers+basketballOutfit+basketballBall+basketballAccessories;


      console.log(basketballTotalAmount);
}



basketballExpenses(["365"]);
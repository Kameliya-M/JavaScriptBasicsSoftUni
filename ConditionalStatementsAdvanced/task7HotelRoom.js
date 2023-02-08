function hotelRoom(input) {
  let month = input[0];
  let nightCount = Number(input[1]);

  let studioPrice = 0;
  let apartmentPrice = 0;

  switch (month) {
    case "May":
    case "October":
      studioPrice = 50;
      apartmentPrice = 65;
       if (nightCount > 14) {
      studioPrice = 50 * 0.7;
      apartmentPrice = 65 * 0.9;
    } else if (nightCount > 7) {
      studioPrice = 50 * 0.95;
    }
      break;
    case "June":
    case "September":
      studioPrice = 75.2;
      apartmentPrice = 68.7;
     if (nightCount > 14) {
      studioPrice = 75.2 * 0.8;
      apartmentPrice = 68.7 * 0.9;

    } 
      break;
    case "July":
    case "August":
      studioPrice = 76;
      apartmentPrice = 77;
      if (nightCount > 14) {
       apartmentPrice = 77 * 0.9;
    } 
      break;
  }
  
 
  console.log(`Apartment: ${(apartmentPrice*nightCount).toFixed(2)} lv.`);
  console.log(`Studio: ${(studioPrice*nightCount).toFixed(2)} lv.`);
}

hotelRoom(["August", "20"]);

// function calcHotelRoomPrice(input) {
//   let month = input[0];
//   let nightsCount = Number(input[1]);
//   let studioPriceMayOct = 50;
//   let studioPriceJunSep = 75.2;
//   let studioPriceJulAug = 76;
//   let appartmentPriceMayOct = 65;
//   let appartmentPriceJunSep = 68.7;
//   let appartmentPriceJulAug = 77;

//   //   let discount = 0
//   let studioTotalPrice = 0;
//   let apartmentTotalPrice = 0;

//   if (month === "May" || month === "October") {
//     studioTotalPrice = studioPriceMayOct;
//     apartmentTotalPrice = appartmentPriceMayOct;

//     if (nightsCount > 14) {
//       studioTotalPrice = studioPriceMayOct * 0.7;
//       apartmentTotalPrice = appartmentPriceMayOct * 0.9;
//     } else if (nightsCount > 7) {
//       studioTotalPrice = studioPriceMayOct * 0.95;
//     }
//   } else if (month === "September" || month === "June") {
//     studioTotalPrice = studioPriceJunSep;
//     apartmentTotalPrice = appartmentPriceJunSep;

//     if (nightsCount > 14) {
//       studioTotalPrice = studioPriceJunSep * 0.8;
//       apartmentTotalPrice = appartmentPriceJunSep * 0.9;

//     } 

//   } else if (month === "July" || month === "August") {
//     studioTotalPrice = studioPriceJulAug;
//     apartmentTotalPrice = appartmentPriceJulAug;

//     if (nightsCount > 14) {
//        apartmentTotalPrice = appartmentPriceJulAug * 0.9;
//     } 
//   } else {
//     console.log("Wrong month");
//   }

//   console.log(`Apartment: ${(apartmentTotalPrice*nightsCount).toFixed(2)} lv.`);
//   console.log(`Studio: ${(studioTotalPrice*nightsCount).toFixed(2)} lv.`);
// }
// calcHotelRoomPrice(["August", "20"]);

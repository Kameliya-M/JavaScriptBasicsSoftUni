function clock() {
 
  for (let hours = 0; hours < 24; hours++) {
   // console.log(hours);
     for (let minutes = 0; minutes < 60; minutes++){
        if(minutes<10){
            console.log(`${hours}:0${minutes}`)
        }else{
        
       console.log(`${hours}:${minutes}`);
        }
     }
  }
}


clock();

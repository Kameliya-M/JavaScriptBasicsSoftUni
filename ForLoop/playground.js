function playground(){
    let a =0;
    a+=1; //a=a+1;
    console.log(a);
    console.log('-------------');
    console.log(a);
    a+=1;
    
}
playground();

let b =1;
console.log(--b);//0
console.log(b); //0

let c=1;
console.log(c--); //1
console.log(c);  //0


// let day=1
// console.log(`${day}: wake up, drink coffee, go to work`);
// day++;
// console.log(`${day}: wake up, drink coffee, go to work`);
// day++;
// console.log(`${day}: wake up, drink coffee, go to work`);
// day++;
// console.log(`${day}: wake up, drink coffee, go to work`);
// day++;
// console.log(`${day}: wake up, drink coffee, go to work`);


for(let day=1; day<=5; day++){
    console.log(`${day}: wake up, drink coffee, go to work`);
}

for(let i=1; i<=12; i+=1){//i++
    console.log(i);
}
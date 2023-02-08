//task 1 Excellent result

function isExcellent(input){
     let grade= Number(input[0]);
     if(grade>=5.50){
        console.log("Excellent!")
     }
}

isExcellent(["6"])

//task 2 Greater Number

function greaterNumber(input){
      let num1=Number(input[0]);
      let num2=Number(input[1]);
      if(num1>num2){
        console.log(num1);
      }else{
        console.log(num2);
      }
}

greaterNumber(["5","3"]);


//task 3 Even Or Odd

function evenOrOdd(input){
    let number=Number(input[0]);
    if (number%2===0){
        console.log("even");
    }else{
        console.log("odd");
    }
}
evenOrOdd(["2"]);


//task 4 Password Guess

function password(input){
    let text=(input[0]);

    if(text==="s3cr3t!P@ssw0rd"){
        console.log("Welcome");
    }else{
        console.log("Wrong password!");
    }
}
password(["qwerty"]);


//task 5 Number 100...200

function number100To200(input){
    let num=Number(input[0]);

    if(num<100){
        console.log("Less than 100");
    }else if(num>=100 && num<=200){
        console.log("Between 100 and 200");
    }else{
        console.log("Greater than 200");
    }
}

number100To200(["200"]);
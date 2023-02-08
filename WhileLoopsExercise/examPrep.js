// function examPrep(input) {
//     // let maxBadGrades = Number(input[0]);
//     // let badGrades = 0;

//     let index = 1;
//     let tasksChecked = 0;
//     let totalGrades = 0;
//     let inputLength = input.length;
//     let lastTask = ''

//     while (index < inputLength) {
//       let currentTask = input[index];

//       if (currentTask === "Enough") {
//         break;
//       }

//       lastTask = currentTask;
//       let currentGrade = Number(input[index + 1]);

//       totalGrades = totalGrades + currentGrade;

//       index = index + 2;
//       tasksChecked++;
//     }

//     console.log("Average score: " + totalGrades / tasksChecked);
//     console.log(`Number of problems: ${tasksChecked}`);
//     console.log(`Last problem: ${lastTask}`);

// }

function examPrep(input) {
  let maxBadGrades = Number(input[0]);
  let badGrades = 0;
  let index = 1;
  let tasksChecked = 0;
  let totalGrades = 0;
  let inputLength = input.length;
  let currentTask = input[index];
  let lastTask = "";

  while (index < inputLength) {
    currentTask = input[index];

    if (currentTask === "Enough") {
      break;
    }
    if(badGrades===maxBadGrades){
        console.log(`You need a break, ${badGrades} poor grades.`);
        return;
    }

 
    lastTask = currentTask;
    let currentGrade = Number(input[index + 1]);
    totalGrades = totalGrades + currentGrade;

    if (currentGrade <= 4) {
      badGrades++;
    }


    index = index + 2;
    tasksChecked++;
  }

  console.log("Average score: " + (totalGrades / tasksChecked).toFixed(2));
  console.log(`Number of problems: ${tasksChecked}`);
  console.log(`Last problem: ${lastTask}`);
}

examPrep(["3",

"Money",

"6",

"Story",

"4",

"Spring Time",

"5",

"Bus",

"6","Enough"])

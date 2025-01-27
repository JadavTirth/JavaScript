// q1
// let age = prompt("What is your age?")
// age = Number.parseInt(age);
let age = 10;
console.log((age<=20 && 10<=age ? "your age between 10 and 20" : "you are not able"));


// q2
switch (age){
    case '10' :
      console.log("your age 10");
      break;
    case '20' :
      console.log("your age 20");
      break;
      case '30' :
      console.log("your age 30");
      break;
      case '40' :
      console.log("your age 40");
      break;
      case '50' :
      console.log("your age 50");
      break;
      default :
      console.log("get out");
  }

// q4
let number = prompt("random number ?")
console.log(number);
console.log(number|2 && number|3 ? "yes" : "no");

// q6
let age2 = prompt("Enter your age?");
console.log(age>18 ? "you can drive" : "you can't drive");


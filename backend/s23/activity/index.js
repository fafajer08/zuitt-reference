// 4. Debug the following code to return the correct value and mimic the output.
// - Check the value’s data type.
// - Check the if the operator used is correct.
// 

let num1 = 25;
let num2 = 5;
let sum1 = num1 + num2;

console.log("The result of num1 + num2 should be 30.");
console.log("Actual Result:");
console.log(sum1);

let num3 = 156;
let num4 = 44;
let sum2 = num3 + num4;

console.log("The result of num3 + num4 should be 200.");
console.log("Actual Result:");
console.log(sum2);

let num5 = 17;
let num6 = 10;
let difference1 = num5 - num6;

console.log("The result of num5 - num6 should be 7.");
console.log("Actual Result:");
console.log(difference1);

let password = "gonpachiro";
let confirmPassword = "gonpachiro";
let match = password == confirmPassword;

console.log("Do the passwords match?");
console.log(match);

//Research the use of the string .length property.
let word = "supercalifragilisticexpialidocious"
let isLong = word.length > 20;

console.log("Is the number of characters in the word greater than 20 characters?")
console.log(isLong);

// 5. Research about Modulo Operator
let number = 14; 

let isDivisibleBySeven = false;

if (number % 7 === 0) {
    isDivisibleBySeven = true;
}

console.log("Is 14 divisible by 7?", isDivisibleBySeven);

// 6. Research about Multiplication Assignment Operator
let product = 6;

product *= 4;

console.log(product);

// 7.
let quotient = 24;

quotient /= 3;

console.log(quotient);

// 8.
let modulo = 11;

modulo %= 3;

console.log(modulo);

// 9. 
let minutesHour = 60;
let hoursDay = 24;
let daysWeek = 7;
let weeksMonth = 4;
let monthsYear = 12;
let daysYear = 365;

let resultMinutes = minutesHour * hoursDay * daysYear;

console.log("There are",resultMinutes, "minutes in a year");

// 10. 
let tempCelsius = 132;

let resultFahrenheit = (tempCelsius * (9 / 5)) + 32;

console.log("132 degrees celsius when converted to fahrenheit is\n",resultFahrenheit);

// 11.
let num7 = 165;

let remainder = num7 % 8;

console.log("The remainder of 165 divided by 8 is:", remainder);

let isDivisibleBy8 = (remainder === 0);

if (isDivisibleBy8) {
    console.log("is num7 divisible by 8.");
} else {
    console.log("num7 is not divisible by 8.");
}

console.log(isDivisibleBy8);

// 12. Check if the variable num8 is divisible by 4

let num8 = 348;

let average = num8 % 4;

console.log("The remainder of", num8 , "divided by 4:", average);

let isDivisibleBy4 = (average === 0);

if (isDivisibleBy4) {
    console.log("is num8 divisible by 4.");
} else {
    console.log("num8 is not divisible by 4.");
}

console.log(isDivisibleBy4);


// 13. Calculate the average score and determine if it's greater than 75

let groupA_score = 75;
let groupB_score = 80;
let groupC_score = 76;
let groupD_score = 74;

// Calculate the average score
let averageResult = (groupA_score + groupB_score + groupC_score + groupD_score) / 4;

// Log the value of the average in the console
console.log("Average score of the group:\n", averageResult);

// Create a new variable called isPassing to check if the average score is greater than 75
let isPassing = averageResult > 75;

// Log the value of isPassing in the console
console.log("Average score of the group is greater than 75?", isPassing);



//For exporting to test.js
try{
  module.exports = {

      sum1: typeof sum1 !== 'undefined' ? sum1 : null,
      sum2: typeof sum2 !== 'undefined' ? sum2 : null,
      difference1: typeof difference1 !== 'undefined' ? difference1 : null,
      match: typeof match !== 'undefined' ? match : null,
      isLong: typeof isLong !== 'undefined' ? isLong : null,
      isDivisibleBySeven: typeof isDivisibleBySeven !== 'undefined' ? isDivisibleBySeven : null,
      product: typeof product !== 'undefined' ? product : null,
      quotient: typeof quotient !== 'undefined' ? quotient : null,
      modulo: typeof modulo !== 'undefined' ? modulo : null,
      resultMinutes: typeof resultMinutes !== 'undefined' ? resultMinutes : null,
      resultFahrenheit: typeof resultFahrenheit !== 'undefined' ? resultFahrenheit : null,
      isDivisibleBy8: typeof isDivisibleBy8 !== 'undefined' ? isDivisibleBy8 : null,
      isDivisibleBy4: typeof isDivisibleBy4 !== 'undefined' ? isDivisibleBy4 : null,
      average: typeof average !== 'undefined' ? average : null,
      isPassing: typeof isPassing !== 'undefined' ? isPassing : null,

  }
} catch(err){

}


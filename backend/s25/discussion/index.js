// prompt 
/*
- prompt is a feature of JS that's built to have a simple functionality for gathering user input
*/

// function printIt(){

//   let nickName = prompt("Enter your nickname:")
//   console.log("Hi, " + nickName);
// }

// printIt();


// [SECTION] Functions and Parameters
/*
  We can directly pass data into the function. The function can then call/use that data which is referred as "name" within the function.
  - A "parameter" acts as a named variable/container that exists only inside of a function
  - It is used to store information that is provided to a function when it is called/invoked.
  Syntax:
    function functionName(parameter){
        // code to be executed
    }
*/

/*[SECTION] Invoking functions and Arguments

  - Values passed when invoking a function are called arguments. These arguments are then stored as the parameters within the function.
-  Arguments are called for data passed to a function during invocation.
*/


function printName(name){  // << inside the var that you're going to assign
  console.log("My name is " + name);
}

printName("Jerbox"); // << Argument inside the function
printName("Grajon"); // invoker

// [Variables as Arguments]
/**
   Variables can also be used as arguments to be able to pass dynamic data used within JavaScript as a result of other operations in the code.
  - This allows for code reusability, compared to hard coded values where the information doesn't change allowing functions to perform tasks using different inputs.
  */

let sampleVariables = "Yui";
printName(sampleVariables);

function checkDivisibilityBy8(num){
  let remainder = num % 8;
  console.log("The remainder of " + num + " divided by 8 is" + remainder);
  let isDivisibleBy8 = remainder === 0;
  console.log("Is " + num + " divisible by 8?");
  console.log(isDivisibleBy8);
}

checkDivisibilityBy8(816)
checkDivisibilityBy8(45)


// [FUNCTIONS as Arguments]
/**
  - Function parameters can also accept other functions as arguments
  - Some complex functions use other functions as arguments to perform more complicated results.
  - This will be further seen when we discuss array methods.
 */

function argumentFunction(){
  console.log("This function was passed as an argument.")
}

function invokeFunction(argumentFunction){
  argumentFunction();
}

invokeFunction(argumentFunction);
argumentFunction();
console.log(argumentFunction);


// [Multiple Parameters]
/**
  - In JavaScript, providing more/less arguments than the expected parameters will not return an error.
  - Providing less arguments than the expected parameters will automatically assign an undefined value to the parameter.
  - In other programming languages, this will return an error stating that "the expected number of arguments do not match the number of parameters".
  - Parameter names are just names to refer to the argument. Even if we change the name of the parameters, the arguments will be received in the same order it was passed.
*/ 

function createFullName(firstName, middleName, lastName){
  console.log(firstName + ' ' + middleName + ' ' + lastName);
}

createFullName('Juan', 'Dela', 'Cruz');

// use variables as arguments
let firstName = 'John';
let middleName = 'Doe';
let lastName = 'Smith';

createFullName(firstName, middleName, lastName);

// Mini Activity:
/**
   1. Log in the console 3 games in the printGames function using 3 arguments.
 */

   function printGames(game1, game2, game3) {
    console.log("Game 1: " + game1);
    console.log("Game 2: " + game2);
    console.log("Game 3: " + game3);
}

printGames("Mobile Legend", "DOTA", "Special Force");


// 2. 
   function isEven(num){
    return num % 2 === 0;
}

function isOdd(num1){
    return num1 % 2 !== 0;
}

let numEven = isEven(20);
let numOdd = isOdd(31);

console.log(numEven);
console.log(numOdd);

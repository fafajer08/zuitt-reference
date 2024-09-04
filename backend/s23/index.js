console.log('Hello World');

// [SECTION] Arithmetic Operators
let x = 20;
let y = 15;

// Addition
let sum = x + y;
console.log(sum);

// Substruction
let difference = x - y;
console.log(difference);

// 
let product = x * y;
console.log(product);

let quotient = x / y;
console.log(quotient);


// [SECTION] Assignment Operators

let assignmentNumber = 8;

assignmentNumber = assignmentNumber + 2;
console.log(assignmentNumber);

// Shorthand (+=, -=, *=, /* )
assignmentNumber += 2;
console.log(assignmentNumber);

assignmentNumber -= 2;
console.log(assignmentNumber);

assignmentNumber *= 2;
console.log(assignmentNumber);

console.log(assignmentNumber + y);

// Multiple Operators and Parethesis
/*
- The operations were done in the following order:
        1. 3 * 4 = 12
        2. 12 / 5 = 2.4
        3. 1 + 2 = 3
        4. 3 - 2.4 = 0.6
*/
let mdas = 1 + 2 - 3 * 4 / 5
console.log(mdas);


/**
  The operations were done in the following order:
        1. 4 / 5 = 0.8
        2. 2 - 3 = -1
        3. -1 * 0.8 = -0.8
        4. 1 + -.08 = .2
 */
let pemdas = 1 + (2 - 3) * (4 / 5);
console.log(pemdas);

/**
  - The operations were done in the following order:
        1. 4 / 5 = 0.8
        2. 2 - 3 = -1
        3. 1 + -1 = 0
        4. 0 * 0.8 = 0
 */
pemdas = (1 + (2 - 3)) * (4 / 5);
console.log(pemdas);

// [SECTION] Increment or Decrement
// pre-increment / post-increment || pre-decrement / post-decrement

let z = 1;

let increment = ++z;
console.log(increment);
console.log(z);

increment = z++;
console.log(increment);
console.log(z);

let decrement = --z;
console.log(decrement)
console.log(z);

decrement = z--;
console.log(decrement);
console.log(z);

// [SECTION] Type Coercion
// automatic conversion of values from the one data type to another

let numA = '10';
let numB = 12;

let Coercion = numA + numB;
console.log(Coercion);
console.log(typeof Coercion);

let numC = 16;
let numD = 14;
let nonCoercion = numC + numD;
console.log(nonCoercion);
console.log(typeof nonCoercion);

// boolean "true" is also associated with the value 1
let numE = true + 1;
console.log(numE)

// boolean "false" is also associated with the value 0
let numF = false + 1;
console.log(numF);

// [SECTION] Comparison Operators
// Equality Operator (==)
// Strictly Equality Operator (===)
// Inequality Operator (!=)

let juan =  'juan';
console.log("Equality Operator")
console.log(1 == 1); 
console.log(1 == 2);
console.log(1 == '1');
console.log(0 == false);
//Compares two strings that are the same 
console.log('juan' == 'juan');
//Compares a string with the variable "juan" declared above 
console.log('juan' == juan);

console.log("Inequality Operator")
console.log(1 != 1); 
console.log(1 != 2);
console.log(1 != '1');
console.log(0 != false);
console.log('juan' != 'juan');
console.log('juan' != juan);

console.log("Strict Equality Operator")
console.log(1 === 1);
console.log(1 === 2);
console.log(1 === '1');
console.log(0 === false);
console.log('juan' === 'juan');
console.log('juan' === juan);

console.log("Strict Equality Operator")
console.log(1 !== 1);
console.log(1 !== 2);
console.log(1 !== '1');
console.log(0 !== false);
console.log('juan' !== 'juan');
console.log('juan' !== juan);

// [SECTION] Rational Operators
// (>, <, >=, <=)

let a= 50;
let b = 65;

let isGT = a > b;

let isLT = a < b;

let isGTorE = a >= b;

let isLTorE = a <= b;

console.log("Rational Operator")
console.log(isGT)
console.log(isLT)
console.log(isGTorE)
console.log(isLTorE)

let numStr = "30";
console.log(a > numStr);
console.log(b <= numStr);

// [SECTION] Logical Operators
// && (and) / || (or)

let isLegalAge = true;
let isRegistered = false;

console.log("Logical Operators");

let allRequirementsMet = isLegalAge && isRegistered;
console.log(allRequirementsMet);

let someRequirementsMet = isLegalAge || isRegistered;
console.log(someRequirementsMet);

let someRequirementsNotMet = !isRegistered;
console.log(someRequirementsNotMet);
console.log('Hello World');

// Single-line comment

/*
  Multi- line comment
*/ 

// [SECTION] Variables, Declarations, and Initializations
/*
  - The name of variables are called identifiers
  - Used to contain data
  - Any information that is used by an application is stored in what we called "memory"
  - when we create a variables, certain portions of a device memory is given a "name" that we call a variables.
  - variables === names
  - we have to declare it. 

  3 kinds of variable declarations
  var - optionally initializing it to a value.
  let - local variable. declares a block-scoped.
  const - constant, declares a block-scoped

  Syntax:
  let/cons/var variableName;

*/

let myVariable;
console.log(myVariable);

let hello;
console.log(hello);


// Descriptive
// camelCase 
let firstName = "Michael";
let pokemon = 13560 //bad naming

// let first name = "Mike";
// console.log(first name);


let emailAddress = "mike@email.com"

// const let = "hello";
// console.log(let);

/*
Syntax
let/const variableName = value;

*/

let productName = 'desktop computer';
console.log(productName);

let productPrice = 18999;
console.log(productPrice);

const interest = 3.539;

// Reassigning
productName = 'Laptop';
console.log(productName);

let friend = "Kate";
friend = "Jane";

// let sister = 'Mary';
// let sister = 'Joan';

// interest = 4.489;

let supplier;

supplier = 'John Smith Tradings';
console.log(supplier);


// [SECTION] Data Types

/*
  1. Boolean = related to state of certain things (true/false)
  2. Null = intentionally expressing the absence of a value
  3. Undefined = a variable that has been declared but w/o a value
  4. Numbers = numbers
  5. BigInt = an integer with arbitrary precision (very large integers)
  6. Strings = series of words or sentences ("")/('')
  7. Arrays = special type of object, each value in an array is associated with an numeric index, the indices start with 0. ([])
  8. Objects = it mimics real world objects/items; used for complex data that contains pieces of information that are relevant to each other;property of object ({})
*/
let isMarried = false;
let inGoodShape = true;

console.log('isMarried: ' + isMarried);

let spouse = null;
console.log(spouse);

let fullName;
console.log(fullName);

let myNumber = 4;
let headcount = 14;
console.log(headcount);

let grade = 82.5;
console.log(grade);

let planetDistance = 2e10;
console.log(planetDistance);

const bigInteger = 900748312342342n;
console.log(bigInteger);

let myString = '';
let country = 'Philippines';
let province = 'Metro Manila';
console.log(myString);
console.log(country);
console.log(province);

let grades = [98.7, 75.6, 82.3, 91];
console.log(grades);

let details = ["John", "Smith", 32, true];
console.log(details);

/**
  Syntax of Objects:
  let/const objectName = {
    propertyA: value,
    propertyB: value,
  }
 */

  let person = {
    fullName: 'Juan Dela Cruz',
    age: 35,
    isMarried: false,
    contact: ["+639950843090", "8123 4567"],
    address: {
      houseNumber: "751",
      city: "Mandaluyong"
    }
  }
  console.log(person);
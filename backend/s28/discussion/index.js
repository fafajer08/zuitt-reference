console.log('Array Time');

// [SECTION] Arrays
/*
  - list of multiple elements in a single variable.
  - ([]) called "Array Literals"
  - Arrays are also objects
  - each data stored in an arrayh is called an "element".
*/

let grades = [98.5, 82.5, 89, 93.1];
let computerBrands = ['Acer', 'Asus', 'Lenovo', 'Redfox', 'Gateway', 'Toshiba', 'Fujitsu', 'Neo'];

let myTask = [
  'drink html',
  'eat javascript',
  'inhale sass',
  'bake css'
];

console.log(grades);
console.log(computerBrands);
console.log(myTask);

let city1 = "Tokyo";
let city2 = "Manila";
let city3 = "Jakarta";

let cities = [city1, city2, city3];

console.log(cities);

// .length property = counts the number of elements

console.log(myTask.length);
console.log(cities.length);

let blankArr = [];
console.log(blankArr.length);

let fullname = "Jamie Noble";
console.log(fullname.length);


// [SECTION] Acccessing Array Elements
/*
  - indexes = starts with 0. 
  Syntax:
  arrayName[];
*/

console.log(grades[0]);
console.log(computerBrands[5]);
console.log(grades[20]);

console.log("I want to concat " + cities[2] + ' ' + grades[2]);

let lakersLegends = ["Kobe", "Shaq", "Lebron", "Magic", "Kareem"];
console.log(lakersLegends[1]);
console.log(lakersLegends[3]);

let currentLaker = lakersLegends[2];
console.log(currentLaker);

console.log("Array before reassignment");
console.log(lakersLegends);

lakersLegends[2] = "Pau Gasol";
console.log('Array after reassignment');
console.log(lakersLegends);
console.log(currentLaker);

let newArr = [];
console.log(newArr[0]);

newArr[0] = "Mario";
console.log(newArr);
newArr[1] = "Luigi";
console.log(newArr);

newArr[newArr.length] = "Princess Peach";
console.log(newArr);

// Looping over an array

for (let index = 0; index < newArr.length; index++){
  console.log(newArr[index]);
}

let numArr = [5, 12, 30, 46, 60];
for (let index = 0; index < numArr.length; index++){

  if (numArr[index] % 5 === 0){
    console.log(numArr[index] + " is divisible by 5");
  } else {
    console.log(numArr[index] + " is not divisible by 5");
  }
}


// Multi-dimensional arrays 
let chessBoard = [
  ['a1', 'b1', 'c1', 'd1', 'e1', 'f1', 'g1', 'h1'],
  ['a2', 'b2', 'c2', 'd2', 'e2', 'f2', 'g2', 'h2'],
  ['a3', 'b3', 'c3', 'd3', 'e3', 'f3', 'g3', 'h3'],
  ['a4', 'b4', 'c4', 'd4', 'e4', 'f4', 'g4', 'h4'],
  ['a5', 'b5', 'c5', 'd5', 'e5', 'f5', 'g5', 'h5'],
  ['a6', 'b6', 'c6', 'd6', 'e6', 'f6', 'g6', 'h6'],
  ['a7', 'b7', 'c7', 'd7', 'e7', 'f7', 'g7', 'h7'],
  ['a8', 'b8', 'c8', 'd8', 'e8', 'f8', 'g8', 'h8']
];

console.log(chessBoard.length);
console.log(chessBoard);
console.log(chessBoard[3][4]); //
console.log(chessBoard[4][2]); //
console.log(chessBoard[0][7]); //let chessBoard = [

function average() {
  let sum = 0;
  for (let i= 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum / arguments.length;
}

let avg = average(10, 20, 30);
console.log(avg);
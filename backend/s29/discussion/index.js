console.log("Aarraayy");

// Mutator Methods
/*
  - Changes your array permanently
  Syntax:
  arrayName.method("varies");
*/


// Push - adds an element in the end of an array and returns the array's length

let fruits = ['Apple', 'Orange', 'Kiwi', 'Dragon Fruit'];

console.log('Current Array');
console.log(fruits);

let fruitslength = fruits.push('Mango');
console.log(fruitslength);
console.log('Mutated array from push method');
console.log(fruits);

fruits.push('Avocado', 'Guava');
console.log(fruits);

function addFruit(fruit) {
  fruits.push(fruit);
}

addFruit("Pineapple");
console.log(fruits);

// pop = removes the LAST element in an array AND returns the removed element.
let removedFruit = fruits.pop();
console.log(removedFruit);
console.log('Mutated array from pop method');
console.log(fruits);

function removeFruit(){
  fruits.pop();
}
removeFruit();
console.log(fruits);


// unshift = adds one or more element at the BEGINNING of an array

fruits.unshift('Lime', 'Banana');
console.log('Mutated array from unshift method:');
console.log(fruits);

function unshiftFruit(fruit){
  fruits.unshift(fruit);
}
unshiftFruit('Calamansi');
console.log(fruits);


// shift = removes an element at the BEGINNING of an array and returns the removed element.

let anotherFruit = fruits.shift();
console.log(anotherFruit);
console.log("Mutated array from the shift method.")
console.log(fruits);

function shiftFruit() {
  fruits.shift();
}
shiftFruit();
console.log(fruits);

// splice = simultaneously removes an elements from a specified index number and adds an element/elements
/*

  Syntax:
  arrayName.splice(startingIndex, deleteCount, elementsToBeAdded)
*/

fruits.splice(1, 2, 'Tomato', 'Cherry');
console.log("Mutated array from splice method.");
console.log(fruits);

function spliceFruit(index, deleteCount, fruit){
  fruits.splice(index,deleteCount,fruit);
}
spliceFruit(0, 1, 'Avocado');
console.log(fruits);

// sort = arranges the array elements in alphanumeric order

fruits.sort();
console.log('Mutated array from sort method.');
console.log(fruits);
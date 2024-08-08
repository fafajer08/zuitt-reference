// Member 3 Starts here

// 5. 

let numbers = [50, 68, 86, 104, 122];
function areAllEven(numbers) {
  
  let isEven = numbers.every(function(number){
    return number % 2 === 0;
  });

return isEven;
}
console.log("Result of areAllEven function ")
console.log(areAllEven(numbers));

// 6. 
function hasDivisibleBy8(numbers){
let hasDivisibleBy = numbers.some(function(number){
  return (number % 8 === 0);
});
  return hasDivisibleBy;
}
console.log("Result of hasDivisibleBy8 function ")
console.log(hasDivisibleBy8(numbers));

// Member 3 Ends here







//Do not modify
//For exporting to test.js
try{
  module.exports = {

      displayValues: typeof displayValues !== 'undefined' ? displayValues : null,
      celsiusToFahrenheit: typeof celsiusToFahrenheit !== 'undefined' ? celsiusToFahrenheit : null,
      areAllEven: typeof areAllEven !== 'undefined' ? areAllEven : null,
      hasDivisibleBy8: typeof hasDivisibleBy8 !== 'undefined' ? hasDivisibleBy8 : null,
      filterEvenNumbers: typeof filterEvenNumbers !== 'undefined' ? filterEvenNumbers : null,
      joinArrays: typeof joinArrays !== 'undefined' ? joinArrays : null,
      isPartIncluded: typeof isPartIncluded !== 'undefined' ? isPartIncluded : null,
      sumNumbers: typeof sumNumbers !== 'undefined' ? sumNumbers : null,
      arrayToString: typeof arrayToString !== 'undefined' ? arrayToString : null,
      combinedCart: typeof combinedCart !== 'undefined' ? combinedCart : null,
      getProductNames: typeof getProductNames !== 'undefined' ? getProductNames : null

  }
} catch(err){

}
function countLetterAndStop(str) {
  if (typeof str !== 'string') {
      return 0; 
  }

  let letterACount = 0; 

  for (let i = 0; i < str.length; i++) {
     
      if (str[i].toLowerCase() === 'a') {
          letterACount++; 
      } else if (str[i].toLowerCase() === 'd') {
          break; 
      }
  }

  return letterACount;
}

console.log(countLetterAndStop("Mama Mia")); 
console.log(countLetterAndStop("Lambda")); 
console.log(countLetterAndStop("Dancing Queen")); 
console.log(countLetterAndStop()); 
console.log(countLetterAndStop(12345)); 

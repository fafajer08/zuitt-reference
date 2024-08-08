// Member 3 Starts Here
// Array Destructuring
const address = ["258", "Washington Ave NW", "California", "90011"];

// Object Destructuring
const animal = {
    name: "Lolong",
    species: "saltwater crocodile",
    weight: "1075 kgs",
    measurement: "20 ft 3 in"
}


// Arrow Functions
let numbers = [1, 2, 3, 4, 5];

// Member 3 Starts here
class Book {
  constructor(title, author, year, status = "Available"){
      this.title = title;
      this.author = author;
      this.year = year;
      this.status = status;
  }
}
// Instantiate new Book objects and store them in an array
const books = [
  new Book("To Kill a Mockingbird", "Harper Lee", 1960),
  new Book("1984", "George Orwell", 1949),
  new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925),
  new Book("The Catcher in the Rye", "J.D. Salinger", 1951)
];

console.log(books);

function booksSortedByYear(booksArray) {
  return booksArray.slice().sort((a, b) => a.year - b.year);
}

const sortedBooks = booksSortedByYear(books);

console.log(sortedBooks);

// Member 3 Ends Here

























try{
  module.exports = {

      getCube: typeof getCube !== 'undefined' ? getCube : null,
      address: typeof address !== 'undefined' ? address : null,
      houseNumber: typeof houseNumber !== 'undefined' ? houseNumber : null,
      street: typeof street !== 'undefined' ? street : null,
      state: typeof state !== 'undefined' ? state : null,
      zipCode: typeof zipCode !== 'undefined' ? zipCode : null,
      animal: typeof animal !== 'undefined' ? animal : null,
      name: typeof name !== 'undefined' ? name : null,
      species: typeof species !== 'undefined' ? species : null,
      weight: typeof weight !== 'undefined' ? weight : null,
      measurement: typeof measurement !== 'undefined' ? measurement : null,
      numbersForEach: typeof numbersForEach !== 'undefined' ? numbersForEach : null,
      reduceNumber: typeof reduceNumber !== 'undefined' ? reduceNumber : null,
      numbers: typeof numbers !== 'undefined' ? numbers : null,
      greet: typeof greet !== 'undefined' ? greet : null,
      Book: typeof Book !== 'undefined' ? Book : null,
      books: typeof books !== 'undefined' ? books : null,
      sortedBooks: typeof sortedBooks !== 'undefined' ? sortedBooks : null,
      booksSortedByYear: typeof booksSortedByYear !== 'undefined' ? booksSortedByYear : null,
      findLastBought: typeof findLastBought !== 'undefined' ? findLastBought : null,
      booksToReplace: typeof booksToReplace !== 'undefined' ? booksToReplace : null,
      replacementBook: typeof replacementBook !== 'undefined' ? replacementBook : null,
      reversedBooks: typeof reversedBooks !== 'undefined' ? reversedBooks : null,
      booksReversed: typeof booksReversed !== 'undefined' ? booksReversed : null,
      searchBooksByTitle: typeof searchBooksByTitle !== 'undefined' ? searchBooksByTitle : null,
      searchBook: typeof searchBook !== 'undefined' ? searchBook : null,
      checkOutBook: typeof checkOutBook !== 'undefined' ? checkOutBook : null,
      boughtBook: typeof boughtBook !== 'undefined' ? boughtBook : null


  }
} catch(err){

}
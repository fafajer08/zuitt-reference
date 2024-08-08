console.log("Hello World");

// 4.
let street = 'Liliw';
let city = 'Laguna';
let fullAddress = street + ", " + city;
console.log(fullAddress);

// 5.
let messageLog = "I live in " + fullAddress;
console.log(messageLog);

// 6. 
let sentenceWithEscape = 'I\'m learning JavaScript.';
let sentenceWithoutEscape = "I'm learning JavaScript.";
console.log(sentenceWithEscape);
console.log(sentenceWithoutEscape);

// 7.
let paragraph = "JavaScript is a powerful programming language.\n" +
        "It is used for web development, server-side scripting, and more.\n" +
        "Learning JavaScript opens up many opportunities for developers.";
console.log(paragraph);

// 8.
let str = "Twice";
let num = 27;
let bool = true;
let nul = null;
let undf = undefined;
let arr = ["Dahyun", "Chaeyoung", "Mina"];
let obj = { twice: "Dahyun" };

console.log(typeof str);   // string
console.log(typeof num);   // number
console.log(typeof bool); // boolean
console.log(typeof nul);   // object (this is a known quirk of JavaScript)
console.log(typeof undf); // undefined
console.log(typeof arr);   // object (arrays are a type of object in JavaScript)
console.log(typeof obj);   // object

// 9. 
const pi = 3.14159;
const eulerNumber = 2.71828;
let currentTemperature = 25;
let productStock = 100;
let email = "dahyun@gmail.com";
let userName = "bhoxs Chae";

console.log(pi);
console.log(eulerNumber);
console.log(currentTemperature);
console.log(productStock);
console.log(email);
console.log(userName);

// 10.
let firstName = "John";
let lastName = "Smith";
console.log('First Name: ' + firstName);
console.log('Last Name: ' + lastName);

let age = 30;
console.log('Age: ' + age);

const hobbies = ['Biking', 'Mountain Climbing', 'Swimming'];
console.log("Hobbies:\n", hobbies);

let workAddress = {
  houseNumber: '32',
  street: 'Washington',
  city: 'Lincoln',
  state: 'Nebraska'
};
console.log('Work Address:', workAddress);

let fullName = "Steve Rogers";
console.log("My full name is " + fullName);

let currentAge = 40;
console.log("My current age is: " + currentAge);

let friends = ["Tony", "Bruce", "Thor", "Natasha", "Clint", "Nick"];
console.log("My Friends are: ");
console.log(friends);

let profile = {
    username: 'captain_america',
    fullName: "Steve Rogers",
    age: 40,
    isActive: false
};
console.log("My Full Profile:", profile);

let fullName2 = "Bucky Barnes";
console.log("My best friend is: " + fullName2);

const lastLocation = "Arctic Ocean";
console.log("I was found frozen in: " + lastLocation);

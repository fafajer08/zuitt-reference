// console.log("Hello World");

// Create an object using object literals
let trainer = {};

// Initialize/add the object properties and methods

// Properties
trainer.name = "Ash Ketchum";
trainer.age = 10;
trainer.pokemon = ["Pikachu", "Charizard", "Squirtle", "Bulbasaur"];
trainer.friends = {};

// Methods
trainer.talk = function() {
    return "Pikachu! I choose you!";
}

// Check if all properties and methods were properly added
console.log(trainer);

// Access object properties using dot notation
console.log("Result of dot notation: ");
console.log(trainer.name);

// Access object properties using square bracket notation
console.log("Result of bracket notation: ");
console.log(trainer["pokemon"]);

// Access the trainer "talk" method
console.log(trainer.talk());

// Create a constructor function for creating a pokemon
function Pokemon(name, level, type, skill) {

    // Properties
	this.name = name;
	this.level = level;
	this.health = 2 * level;
	this.attack = level;
	this.type = ["Normal"];
	this.skills = ["Tackle"];

	this.type.push(type);
	this.skills.push(skill);

    // Methods
    // Will accept an object as a target and the skill to be used
    this.useSkill = function(targetPokemon, skill) {
    	if (this.skills.includes(skill) && targetPokemon.health > 0) {
    	    console.log(`${this.name} used ${skill} on ${targetPokemon.name}!`);
    	    targetPokemon.health -= this.attack;
    	} else {
    	    console.log(`${this.name} doesn't know ${skill}.`);
    	}

    	if (targetPokemon.health <= 0) {
    	    console.log(targetPokemon.faint());
	    } else {
	    	console.log(`${targetPokemon.name}'s health is now reduced to ${targetPokemon.health}`);
	    }
    }

    // Method is invoked in the tackle method
    this.faint = function() {

    	message = `${this.name} has fainted!`;
    	return message;
    }

}

// Create/instantiate a new pokemon
let pikachu = new Pokemon("Pikachu", 12, "Electric", "Thunder");
console.log(pikachu);

// Create/instantiate a new pokemon
let geodude = new Pokemon("Geodude", 8, "Rock", "Rock Throw");
console.log(geodude);

// Create/instantiate a new pokemon
let mewtwo = new Pokemon("Mewtwo", 50, "Psychic", "Psychic");
console.log(mewtwo);

// Create/instantiate a new pokemon
let pidgey = new Pokemon("Pidgey", 5, "Flying", "Leer");
console.log(pidgey);

// Invoke the useSkill method and target a different object
geodude.useSkill(pikachu, pikachu.skills[0]);
console.log(pikachu);

// Invoke the useSkill method and target a different object
mewtwo.useSkill(geodude, mewtwo.skills[0]);

// create catch method to catch pokemon with <= 10 health
trainer.catch = function(pokemonToCatch) {
	if (pokemonToCatch instanceof Pokemon === true) {
	  	if (pokemonToCatch.health <= 10) {
	      	this.pokemon.push(pokemonToCatch.name);
	      	console.log(`${this.name} caught ${pokemonToCatch.name}!`);
	  	} else {
	      	console.log(`${pokemonToCatch.name} ran away from the battle.`);
	  	}
  	}
};

trainer.catch(pidgey);
console.log("Your pokemons are");
console.log(trainer.pokemon.toString());

// add a method inside the Pokemon that will allow the pokemon to add/replace skills array
Pokemon.prototype.addSkill = function(skill) {
  if (!this.skills.includes(skill)) {
      this.skills.push(skill);
      console.log(`You added ${skill} to ${this.name}'s' skills!`);
  } else {
      console.log(`${this.name} already learned ${skill}!`);
  }
};

// add method that will allow a pokemon to evolve. this will change the name of the pokemon as well as the attack value
Pokemon.prototype.evolve = function (newName, newAttack, newType, newSkill) {
  console.warn(`Something is happening to ${this.name}!`);
  console.warn(`Suddenly, ${this.name} is glowing!`);

  // Update name and attack
  this.name = newName;
  this.attack = newAttack;

  console.log(`Your pokemon evolved into ${this.name}!`);

  // Add new type if not already present
  if (!this.type.includes(newType)) {
    this.type.push(newType);
  }

  // Add new skill
  this.addSkill(newSkill);

  // Return the evolved Pokémon
  return this;
};

//Pokemon Evolution
let pidgeotto = pidgey.evolve("Pidgeotto", 60, "Flying", "Wing Dance");
console.log(pidgeotto);

// create NPC object using object Literals 
const NPC = {
  name: "Jenny",
  pokemon: "Clefairy",
};

// Freeze the NPC object
Object.freeze(NPC);

// Attempt to modify the NPC object
NPC.name = "Brock"; // This will not change the NPC's name
console.log(NPC);

NPC.newProperty = "New Value"; // This will not be added
console.log(NPC);

// Print the details to see if the changes were implemented

/* 

    Debug the following code to allow the functions to properly receive and return the correct values and mimic the output.

    - Check syntax of the following code.
    - Check if the correct value is returned.
    - Check the parameters and arguments.
    - Check the if else statements
    - Check the loop statements
    - Check if the array methods used are correct.
    - Check if the objects are being accessed properly.

*/

  let books = [
    {
        id: 1,
        title: "The Lord of the Rings",
        author: "J.R.R. Tolkien",
    },
    {
        id: 2,
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
    },
    {
        id: 3,
        title: "Dune",
        author: "Frank Herbert",
    },
    {
        id: 4,
        title: "Harry Potter and The Socerer's Stone",
        author: "J.K. Rowling",
    },
    {
        id: 5,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
    }
  ];
  
  function findBookByTitle(title) {

    if(books.length === 0) {
        return "Error: No books in database.";
    }

    if (typeof title !== 'string') {
        return "Error: Title must be a string.";
    }
  
    if (title === '') {
        return "Error: Title cannot be empty.";
    }
  
    let bookFound = books.filter(book => book.title === title);

    if (bookFound) {
      return bookFound;
    } else {
      return "Book not found."
    }

  }
  
  let ifTitleNotString = findBookByTitle(5);
  console.log("Message if the title given is not a string:");
  console.log(ifTitleNotString);

  let ifTitleIsEmpty = findBookByTitle('');
  console.log("Message if the title given is empty:");
  console.log(ifTitleIsEmpty);

  let book = findBookByTitle("The Lord of the Rings");
  console.log("Book found:");
  console.log(book);

  function findBooksByAuthor(author){

    if(books.length === 0) {
        return "Error: No books in database.";
    }

    if (typeof author !== 'string' || author.length <= 0) {
        return "Error: Author must be a string.";
    }
  
    if (typeof author === null) {
        return "Error: Author cannot be empty.";
    }
  
    let booksFound = books.filter(book => book.author === author);

    if (booksFound.length > 0) {
      return booksFound;
    } else {
      return "Books not found."
    }

  }

 
  let ifAuthorNotString = findBooksByAuthor(5);
  console.log("Message if the author given is not a string:");
  console.log(ifAuthorNotString);

  let ifAuthorIsEmpty = findBooksByAuthor('');
  console.log("Message if the author given is empty:");
  console.log(ifAuthorIsEmpty);

  let booksByAuthor = findBooksByAuthor("J.R.R. Tolkien");
  console.log("Books found:");
  console.log(booksByAuthor);


//Do not modify
//For exporting to test.js
try{
    module.exports = {

        trainer: typeof trainer !== 'undefined' ? trainer : null,
        Pokemon: typeof Pokemon !== 'undefined' ? Pokemon : null,
        NPC: typeof NPC !== 'undefined' ? NPC : null

    }
} catch(err){

}
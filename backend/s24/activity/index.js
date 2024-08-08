// 4.
function getUserInfo(){

  return {
    name: "John Doe",
    age: 25,
    address: "123 St. Quezon City",
    isMarried: false, 
    petname: "Danny",
  };
}

console.log(getUserInfo())

// 5. 
function getArtistsArray(){
  return ["Sza","Vedo","Mariah carey","Slapshock","Hev Abi"];
}
console.log(getArtistsArray());

// 6. 
function getSongsArray(){
  return ["Yvette","Saturn","SexBomb","Babaero","How do you heal a broken heart"];
}

const songArray = getSongsArray();
console.log(songArray);

// 7. 
function getMoviesArray(){
  return["Ipman","Spiderman","Doctor Strange","Avengers End Game","Venom"];
}
console.log(getMoviesArray());

// 8.
function getPrimeNumberArray(){
  return [2, 3, 5, 7, 11]
}
const primeNumberArray = getPrimeNumberArray();
console.log(primeNumberArray);

// 9.
const globalTreasure = "Golden Key";

function seekGlobalTreasure(){
  return "Global Treasuse Found: " + globalTreasure;
}

console.log(seekGlobalTreasure());

// 10. 
function localQuest(){
  const localGems = "Shiny Diamonds";
  return "Local Gems Discovered: " + localGems;
}
console.log(localQuest());

// try {
//   // console.log(localGems); 
// } catch (error) {
//   console.log("Error: " + error.message);
// }

// 11.
function revealBlockSecret(){
  const blockSecret = "Hidden Treasure";
  return "Block Secret Revealed: " + blockSecret;
}
console.log(revealBlockSecret());


/* Debugging */
/* 
    12. Debug the following code to allow the functions to return the correct value and mimic the output.
    - Check syntax of the following code.
    - Check if value is returned.

*/

let item = {
  name: "Golden Sword",
  price: 2500,
  requiredJob: ["Warrior", "Knight", "Paladin"]
};

function getItemName() {
  let name = item.name;
  return name; // Return the name instead of just logging it
}

let itemName = getItemName(); // Store the returned value
console.log("The name of the item is:");
console.log(itemName);

function getItemPrice() {
  return item.price; // Return the price from the item object
}

let itemPrice = getItemPrice(); // Store the returned value
console.log("The price of the item is:");
console.log(itemPrice);


function getRequiredJob() {
  return item.requiredJob;
}

let requiredJob = getRequiredJob();
console.log("The required job to use the item is:")
console.log(requiredJob);

//For exporting to test.js
try{
  module.exports = {

      getUserInfo: typeof getUserInfo !== 'undefined' ? getUserInfo : null,
      getArtistsArray: typeof getArtistsArray !== 'undefined' ? getArtistsArray : null,
      getSongsArray: typeof getSongsArray !== 'undefined' ? getSongsArray : null,
      getMoviesArray: typeof getMoviesArray !== 'undefined' ? getMoviesArray : null,
      getPrimeNumberArray: typeof getPrimeNumberArray !== 'undefined' ? getPrimeNumberArray : null,
      seekGlobalTreasure: typeof seekGlobalTreasure !== 'undefined' ? seekGlobalTreasure : null,
      localQuest: typeof localQuest !== 'undefined' ? localQuest : null,
      revealBlockSecret: typeof revealBlockSecret !== 'undefined' ? revealBlockSecret : null,
      item: typeof item !== 'undefined' ? item : null,
      getItemName: typeof getItemName !== 'undefined' ? getItemName : null,
      getItemPrice: typeof getItemPrice !== 'undefined' ? getItemPrice : null,
      getRequiredJob: typeof getRequiredJob !== 'undefined' ? getRequiredJob : null,

  }
} catch(err){

}
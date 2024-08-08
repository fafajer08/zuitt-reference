// Member 3 starts here

// 7. 
let groceryList = ["Milk", "Veggies", "Egg", "Bread", "Cheese"];

function updateItemByIndex(update, index) {
    if (index >= 0 && index < groceryList.length) {
        groceryList[index] = update;
    } else {
        console.log("Invalid index");
    }
}

updateItemByIndex("Cookies", 3);
console.log(groceryList);

// 8. 

function displayItems() {
    let numberedList = [];
    for (let i = 0; i < groceryList.length; i++) {
        numberedList.push(`${i + 1}. ${groceryList[i]}`);
    }
    return numberedList;
}

let itemsFound = displayItems();

console.log("Grocery List:");
console.log(itemsFound);

// Member 3 ends Here










// 
try{
  module.exports = {

      groceryList: typeof groceryList !== 'undefined' ? groceryList : null,
      addItem: typeof addItem !== 'undefined' ? addItem : null,
      getItemByIndex: typeof getItemByIndex !== 'undefined' ? getItemByIndex : null,
      deleteItem: typeof deleteItem !== 'undefined' ? deleteItem : null,
      deletedLastItem: typeof deletedLastItem !== 'undefined' ? deletedLastItem : null,
      updateItemByIndex: typeof updateItemByIndex !== 'undefined' ? updateItemByIndex : null,
      displayItems: typeof displayItems !== 'undefined' ? displayItems : null,
      itemsFound: typeof itemsFound !== 'undefined' ? itemsFound : null,
      searchItem: typeof searchItem !== 'undefined' ? searchItem : null,
      removeElement: typeof removeElement !== 'undefined' ? removeElement : null,
      isItemFound: typeof isItemFound !== 'undefined' ? isItemFound : null,
      removeElement: typeof removeElement !== 'undefined' ? removeElement : null,
      removedElement: typeof removedElement !== 'undefined' ? removedElement : null,
      deleteAll: typeof deleteAll !== 'undefined' ? deleteAll : null,
      isEmpty: typeof isEmpty !== 'undefined' ? isEmpty : null
  }
} catch(err){

}
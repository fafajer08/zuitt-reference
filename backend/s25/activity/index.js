function addNum(a, b) {
  return a + b;
}

function subNum(a, b) {
  return a - b;
}

let sum = addNum(10, 5);
console.log("The sum is:");
console.log(sum);

let difference = subNum(10, 5);
console.log("The difference is:");
console.log(difference);

function multiplyNum(a, b) {
  return a * b;
}

function divideNum(a, b) {
  return a / b;
}

let product = multiplyNum(10, 5);
console.log("The product is:");
console.log(product);

let quotient = divideNum(10, 5);
console.log("The quotient is:");
console.log(quotient);

function getCircleArea(radius) {
  return Math.PI * Math.pow(radius, 2);
}

let circleArea = getCircleArea(5);
console.log("The area of the circle is:");
console.log(circleArea);

function getAverage(a, b, c, d) {
  return (a + b + c + d) / 4;
}

let averageVar = getAverage(10, 20, 30, 40);
console.log("The average is:");
console.log(averageVar);


function checkIfPassed(score, total) {
  let percentage = (score / total) * 100;
  let isPassed = percentage >= 75;
  return isPassed;
}

let isPassingScore = checkIfPassed(85, 100);
console.log("Is passing score:");
console.log(isPassingScore);


// Debugging
function register(firstName, lastName, email, mobileNum) {
  return {
      firstName: firstName,
      lastName: lastName,
      email: email,
      mobileNum: mobileNum
  };
}

let newUser = register("Lilo", "Pelekai", "lilostitch@gmail.com", "09276612409");
console.log(newUser);

function createProduct(name, price, quantity) {
  return {
      name: name,
      price: price,
      quantity: quantity
  };
}

let newProduct = createProduct("Chocolate Bar", 200, 50);
console.log(newProduct);

function createTeamArr(member1, member2, member3, member4, member5) {
  return [member1, member2, member3, member4, member5];
}

let newTeam = createTeamArr("Eugene", "Dennis", "Alfred", "Vincent", "Jeremiah");
console.log(newTeam);


try {
  module.exports = {
      addNum: typeof addNum !== 'undefined' ? addNum : null,
      subNum: typeof subNum !== 'undefined' ? subNum : null,
      multiplyNum: typeof multiplyNum !== 'undefined' ? multiplyNum : null,
      divideNum: typeof divideNum !== 'undefined' ? divideNum : null,
      getCircleArea: typeof getCircleArea !== 'undefined' ? getCircleArea : null,
      getAverage: typeof getAverage !== 'undefined' ? getAverage : null,
      checkIfPassed: typeof checkIfPassed !== 'undefined' ? checkIfPassed : null,
      register: typeof register !== 'undefined' ? register : null,
      createProduct: typeof createProduct !== 'undefined' ? createProduct : null,
      createTeamArr: typeof createTeamArr !== 'undefined' ? createTeamArr : null
  };
} catch (err) {
  // Handle error if module.exports fails
}


// sample Function

function logger() {
  // function declaration
  console.log('First Sample Function');
}

logger();
logger();
logger();
// we can call the function as many time you want

// function with paramters and return type
// function declartion
function calculateAge(birthYear) {
  return 2022 - birthYear;

  /*
    const age=2022-birthYear
    return age;
    */
}

const currentAge = calculateAge(1991);
console.log(currentAge);

console.log(' age1 ', calculateAge(1995));
console.log(' age2 ', calculateAge(1980));
console.log(' age3 ', calculateAge(1978));
// we have reuse the function as many time as we want

// Function Expression

const calculateAge2 = function (birthYear) {
  const age = 2022 - birthYear;
  return age;
};

const currentAge1 = calculateAge2(1991);
console.log(' Result with function Expression ', currentAge1);

// In function expression we dont have name to the function and we creat a variable for this
// we cannot call this function before declaring or creating it

const calculateAge3 = function (birthYear) {
  const age = 2022 - birthYear;
};

const currentAge3 = calculateAge3(1991);
console.log(' Result with function Expression ', currentAge3);
// o/p --> Result with function Expression  undefined

// return undefine because we have not return any value

const friends = ['bob', 'jay', 'peter'];

// Arrray indexing start from Zero index
console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]);

// Adding different person name at 1 position

friends[1] = 'alex';

console.log(`Change first index value to ${friends[1]}`);

console.log('Array size =', friends.length);

console.log('Array last element =', friends[friends.length - 1]);

// how to create arrray using new keyword

const years = new Array('1991', '1992', '1993');
console.log(years);

// adding another array in array

const akshay = ['akshay', 1995, 'o+', friends];
console.log(akshay);

//create empty array
const emptyArray = new Array();
emptyArray[1] = 'jay';
console.log(emptyArray);

// Test whether we can change complete array or not
let changeCompleteArray = ['john', 'rock', 'relex'];

console.log(changeCompleteArray);
changeCompleteArray = ['test1', 'test2'];
console.log(changeCompleteArray);

// Add Methods in array   -- push and unshift
const myFriends = ['steve', 'jhon', 'bob'];

//Push --> Appends new elements to the end of an array, and returns the new length of the array.
myFriends.push('alex'); // only adding element
const arraylength = myFriends.push('peter'); // adding element and taking length of it
console.log(myFriends);
console.log(arraylength);
//Unshift--> it will element at first index
myFriends.unshift();

// Remove  --> pop() , shift()

//pop() --> Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
console.log(myFriends);
const popped = myFriends.pop();
console.log(popped);
console.log(myFriends);
//shift()
myFriends.shift();
console.log(myFriends);

//indexof()
console.log(myFriends.indexOf('bob'));
console.log(myFriends.indexOf('xyz'));

//includes
console.log(myFriends.includes('bob'));
console.log(myFriends.includes('xyz'));
myFriends.push(23);
console.log(myFriends.includes('23')); //false as strick comparision taken place

if (myFriends.includes(23)) console.log(' Value present on page');

const jonas = {
  firstName: 'jonas',
  lastName: 'alex',
  age: 2037 - 1991,
  friends: ['steven', 'peter'],
  job: 'teacher',
};

// bot operator

console.log(jonas.firstName);
const nameKey = 'Name';
/*console.log(jonas.'last'+nameKey)

above code throws an error as we cannot access the variable in dot
*/

// add new properties in object using dot operator

jonas.location = 'US';
console.log(jonas);

// using dot we cannot access properties value dynamically
const interestIn = prompt(
  'Choose value from firstName, lastName, job, age, friends, location'
);
console.log(jonas.interestIn); // o/p --> undefined

// Bracket Operator

// add value using bracket
jonas['twitter'] = 'jonas@123';
console.log(jonas);

// access value using variable
console.log(jonas['last' + nameKey]);

// access variable from user prompt
const interestIn1 = prompt(
  'Choose value from firstName, lastName, job, age, friends, location'
);
console.log(jonas[interestIn1]);

for (let i = 0; i < 5; i++) {
  console.log('Weight Training 5 days🏋️');
}
// const jonas = {
//     firstName: 'jonas',
//     lastName: 'alex',
//     age: 2037 - 1991,
//     friends: ['steven', 'peter'],
//     job: 'teacher'
// };

const xyz = ['jonas', 'alex', 1991, ['steven', 'peter'], 'teacher'];
let i = 0;
for (; i < xyz.length; i++) {
  console.log('Objects Values', xyz[i]);
}

console.log('I value', i);

for (; i < 7; i++) {
  console.log('verifing i value ', i);
}

for (let key in jonas) {
  value = typeof jonas[key];
  if (value !== 'string') {
    console.log(`${key} Data type is ${value}`);
  }
}

const student = {
  name: 'John',
  age: 20,
  hobbies: ['reading', 'games', 'coding'],
};

for (let key in student) {
  //console.log("The Keys are", key)
  value = student[key];
  console.log(`Key: ${key} and Value : ${value}`);
}
console.log('Object Entries', Object.entries(student));

for (let [key, value] of Object.entries(student)) {
  console.log(key + ' - ' + value);
}

const string1 = 'boo';

for (const value of string1) {
  console.log(value);
}

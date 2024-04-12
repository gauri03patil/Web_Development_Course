'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 'sat', // Open 24 hours
      close: 24,
    },
  },
};

// Destructuring using object
const { name, categories, openingHours } = restaurant;

console.log(name, categories, openingHours);

// Give name to object
const { name: identity, categories: type, openingHours: hours } = restaurant;
console.log(identity, type, hours);

// give default value to object
const { menu = 'special', categories: cp, openingHours: h } = restaurant;
console.log(menu, cp, h);

//given default value in function
const menuDetails = function (
  index = 1,
  start = 0,
  person = 'akshay',
  address
) {
  console.log(index, start, person, address);
};

menuDetails();
menuDetails(2, 3, 'patil', 'Vasai');

// Access nested object
const {
  openingHours: {
    fri,
    sat: { open: o, close: cl },
  },
} = restaurant;
console.log(fri);
console.log(fri.close);
console.log(o);
console.log(cl);

/*Destructing Using Array*/
const arr = [2, 3, 4];

//destructuring
const [a, b, c] = arr;
console.log(a, b, c);

//skip variable in destructuring
const [x, , y] = arr;
console.log(x, y);

//Switch variable in destructring

let [main, secondary] = restaurant.categories;
console.log('Complete Categerory array: ', restaurant.categories);
console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

// Rest item
const [item1, item2, ...rest] = restaurant.starterMenu;
console.log(item1, item2, rest);

// Recieve return value from function

const calAge = function () {
  return [8, 9];
};

const [st, tp] = calAge();
console.log(st, tp);

// default value
const fruits = ['mango', 'banana', 'orange'];
const [xy = 'fruits', yz = 'Yellow', za = 'Animal', ab = 1, bc = 'Cricket'] =
  fruits;
console.log(xy, yz, za, ab, bc);

// Nested Array

const score = [20, 45, [70, 89], 40];

const [score1, score2, [score3, score4], score5] = score;

console.log(score1, score2, score3, score4, score5);

// Spread Operator ...
const spread1 = [1, 2, 3];
const spread2 = [4, 5, 6];
const spread3 = [...spread1, ...spread2];

console.log(spread3);
console.log(...spread3);

const [one, two, ...remaining] = spread3;

console.log(remaining);

const vehicle = {
  brand: 'Innova',
  color: 'Silver',
  Modle: 'Top',
};

const updatedVehicle = {
  year: 2018,
  color: 'black',
  isIsurance: false,
};

const newVehicle = { ...vehicle, ...updatedVehicle };

console.log(newVehicle);

//spread operator with string
const firstName = 'akshay';
console.log(...firstName);

//spread operator to copy object value
const updatedVehicleCopy = { ...updatedVehicle };
updatedVehicleCopy.color = 'white';
console.log(updatedVehicleCopy);

// Spread operator use to pass value to function

const spreadFunction = function (a, b, c) {
  return a + b + c;
};

const value = [11, 12, 13];
const addition = spreadFunction(...value);
console.log(spreadFunction(...value));

// Rest Operator

//Rest -- it use left hand side
const xyz = [2, 4, 6, 8, 10];

const [t2wo, four, ...restPara] = xyz;

console.log(t2wo, four, restPara);
// Above value are displayed in array because rest parameter pack the value into array

console.log(t2wo, four, ...restPara);
// Now we are upacking rest valuse using spread operator so value seperated by comma

// Rest Operator Rule
/*
  i. There should one spread operator in function or in variable destructuring
  ii. spread operator should be use at the end 
 */

const foods = function (food, ...foods) {
  console.log(food);
  console.log(foods);
};
const foodsCopy = function (...foods) {
  console.log(foods);
};

const fruits1 = ['mango', 'banana', 'orange', 'apple'];

foods(...fruits1);
foodsCopy(...fruits1);

// Value seperation in rest parameters

//Rest -- it use left hand side
const xyz1 = [2, 4, 6, 8, 10];

const [t2wo1, , ...restPara1] = xyz1;

console.log(t2wo1, restPara1);

// Short Circuiting

// OR Short Circuiting

console.log(3 || 'akshay');
console.log(0 || 23);
console.log(undefined || null);
console.log('' || 'xyz');

// In OR First expression is true the short-circuiting other experession means

let test = 1;
const defaultValue = test ? 0 : 1;
console.log(defaultValue);

// And Short Circuting

// for and we required both operand true if it find any falsy value then it short-circuit other expression

console.log(1 && 0);
console.log(23 && 'jonas' && true && undefined && 'xyz');

const zero = 0;
let currentValue = zero || 10;

console.log(currentValue);

// Nullish -- work on null and undefined value

currentValue = zero ?? 10;

console.log(currentValue);
//0

//logical or operator

const rest1 = {
  name: 'akshay',
  age: 27,
};
const rest2 = {
  education: 'BE',
  year: 1996,
};

//logical OR
rest1.name ||= '';
rest2.name ||= 'patil'; // this will add property as name not present

console.log(rest1);
console.log(rest2);

//logical nullish operator
rest1.age ??= 28;
rest2.age ??= 29;
console.log(rest1);
console.log(rest2);

//logical AND operator
rest1.age &&= undefined; // check first value true then move to next value
rest2.age &&= undefined; // check first value true then move to next value
console.log(rest1);
console.log(rest2);

// optional chaining

const gameCopy = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: ['Hakimi'],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
  order(v1, v2) {
    return v1 + v2;
  },
};

// with existing property
const propertyExist = gameCopy.odds?.team1 ?? 'Value missing';
console.log(propertyExist);

//undefined object
const propertyNotExist = gameCopy.even?.team1 ?? 'Property not present';
console.log(propertyNotExist);

// chaining with presentfunction
const add = gameCopy.order?.(2, 4);
console.log(add);

// chaining with function
const add1 = gameCopy.order1?.(2, 4) ?? 'Method Not preset';
console.log(add1);

// Looping Object : Key Value Entries

const Hours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 'sat', // Open 24 hours
    close: 24,
  },
};

for (const key of Object.keys(Hours)) {
  console.log(key);
}

for (const value of Object.values(Hours)) {
  console.log(value);
}
for (const [key, { open, close }] of Object.entries(Hours)) {
  console.log(key, 'Open At:', open, 'close at:', close);
}

// Set

const hotels = new Set(['waiter', 'cheif', 'manager', 'cheif', 'waiter']);

console.log(hotels);

console.log(hotels.size);
hotels.add('cook');
hotels.add('servant');
console.log(hotels);

for (const set of hotels) {
  console.log(set);
}

const x1 = [...hotels];
console.log(x1);

// Map

const mapEntry = new Map();

mapEntry.set('Question', 'Is Javascript is best language');
mapEntry.set(1, 'Java').set(2, 'python');
mapEntry.set(true, 'Correct Answer');
mapEntry.set(false, 'Wrong answer');

console.log(mapEntry);

//To Get entry

console.log(mapEntry.get(true));

//To convert object into map

const hoursMap = new Map(Object.entries(hours));

console.log(hoursMap);
console.log(hoursMap.get('fri'));

const arrays = [...mapEntry];
console.log(arrays);

// String

const error =
  'occur when the JavaScript engine is parsing a script and encounters syntactically invalid code';
// String Length

console.log(error.length);

//directly accessing string

console.log('text'.length); // directly taking length
console.log('text'[2]); // direclty accessing length

const xy1 = 'akshay';
console.log();

// Index of and lastIndexof

let number = error.indexOf('Java');
console.log(number); // Return number
number = error.indexOf('J');
console.log(number);
number = error.indexOf('encounters ');
console.log(number);

//last indexf off

let lastIndex = error.lastIndexOf('e');
console.log(lastIndex);

lastIndex = error.lastIndexOf('code'); // return c index value
console.log(lastIndex);

lastIndex = error.lastIndexOf('Code');
console.log(lastIndex); //-1 because string is case sensitive

// sclic

console.log(error.slice(15));

console.log('hello'.length);

console.log('hello'.indexOf('o'));

const test1 = 'I am akshay';
console.log(test1.lastIndexOf('a'));
console.log(test1.slice(2, 4));

console.log(
  error.slice(error.indexOf('encounters'), error.lastIndexOf('code') + 4)
);

console.log(error.slice(-1));

// checking flight middle seat

const checkMiddleSeat = function (seat) {
  // B and C are middle seats
  const seatCode = seat.slice(-1);
  if ('B' == seatCode || 'C' == seatCode)
    console.log('You Got the Middle Seat 🥳 (❁´◡`❁)');
  else console.log('Better Luck Next Time ＞﹏＜');
};

checkMiddleSeat('11B');
checkMiddleSeat('21K');
checkMiddleSeat('14C');

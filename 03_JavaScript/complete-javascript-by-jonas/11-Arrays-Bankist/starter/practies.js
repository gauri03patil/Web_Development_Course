'use strict';

// Slice Method

const arr = [
  '1',
  2,
  'xyz',
  true,
  {
    name: 'akshay',
    qualification: 'BE',
    isEducated: true,
    passingYear: 2018,
  },
];

console.log(arr.slice(2));
console.log(arr.slice(2, 1)); // Empty array
console.log(arr.slice(2, 7)); // current array size is 5

console.log(arr.slice(1, -2));
console.log(arr.slice(-2, 1)); // Empty array

// Start from 1 index , end on second last elment in array

const arrCopy = arr.slice();

console.log(arrCopy);

arrCopy[0] = '123';
arrCopy[1] = 4;
arrCopy[2] = 'xyza';
arrCopy[3] = false;

arrCopy[4].name = 'patil';
arrCopy[4].isEducated = false;
arrCopy[4].passingYear = 2017;

console.log(arrCopy);
console.log(arr);

let months = ['jan', 'feb', 'march', 'april', 'june', 'sep'];
months.splice(4);
console.log(months);
// remove element till 4 index [ "jan", "feb", "march", "april" ]
months.splice(1, 2, 'xyz', 'pqr');
console.log(months);
//[ "jan", "xyz", "april" ]
months.splice(undefined, undefined, '1', '2', 3);
console.log(months);

// reverse

const number = [1, 2, 3, 4, 5];
const numberInWord = ['one', 'two', 'three'];

const numberRev = number.reverse();
console.log(numberRev);
console.log(number); // both array gets modified

const numberWordRev = numberInWord.reverse();
console.log(numberWordRev);
console.log(numberInWord);

const joinArr = ['one', 'two', 'three'];

const xyz = joinArr.join();
console.log(xyz);
console.log(joinArr);

const xyz1 = joinArr.join('-');
console.log(xyz1);
console.log(joinArr);

const singleArr = ['one'];
const xyz2 = singleArr.join('-');
console.log(xyz2);
const ele = [23, 45, 65, 76];

console.log(ele.at(0));
console.log(ele.at(-1));
console.log(ele[23]); //undefined

const rating = [4.5, 5, 6, 8];

rating.forEach(function (ele, i, arr) {
  // ele- each element, i- element index, arr-Complete array

  console.log(ele, i, arr);

  console.log(
    `The first element ${ele}, and its present at index ${i} see the complete array ${arr}`
  );
});

const worldMap = new Map([
  ['Ind', 'India'],
  ['us', 'inited state'],
  ['aus', 'austrilia'],
  ['sri', 'srilanka'],
]);

console.log(worldMap);

worldMap.forEach(function (value, key, map) {
  console.log(`Value : ${value} and Key ${key}`);
  // console.log(map);
});

const setworld = new Set([
  'IND',
  'US',
  'SRI',
  'AUS',
  'IND',
  'Uk',
  'US',
  'AUS',
  'IND',
]);

console.log(setworld);

setworld.forEach(function (value, index, set) {
  console.log(value, index);
  // in set you we get only value not a index for a index it will return value
});

/* below this method work same as forEach
Map -- Create a new array by performing action like arrElement*2 
Filter-- eliminate the element which doesnot match the result and form a new array
reduce- perform a action and store a value in single variable 
*/

/*
The map() method creates a new array populated with the results of calling a provided function on every element in the calling array
*/

let movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
//
let months1 = ['jan', 'feb', 'march', 'april', 'june', 'sep'];

// map method create a new array
const newMovementsArr = movements.map(function (mov) {
  return mov * 2;
});

// map method using arrow function

const newMovementsArrowFun = movements.map(mov => mov * 2);

//create copy of Array
const CopyArray = movements.map(mov => mov);

console.log(newMovementsArr);
console.log(newMovementsArrowFun);

console.log(movements);
console.log(CopyArray);

const movements1 = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const deposite = movements1.filter(function (mov) {
//   return mov > 0;
// });
const deposite = movements1.filter(mov => mov > 0);
console.log(deposite);

const withdrawal = movements1.filter(function (mov) {
  return mov < 0;
});
console.log(withdrawal);

const sum = 0;
const rducemethod = movements1.reduce(mov => mov + sum);
console.log(rducemethod);

// Reduce Method
/*

*/

const addition = movements.reduce((acc, currentValue) => acc + currentValue, 0);

console.log(addition);

const max = movements.reduce(
  (acc, currentValue) => (acc > currentValue ? acc : currentValue),
  0
);

console.log(max);

const calTotalDeposite = movements
  .filter(deposite => deposite > 0)
  .reduce((acc, sum) => acc + sum, 0);

console.log(calTotalDeposite);

const calTotalWithdrawal = movements
  .filter(withdraw => withdraw < 0)
  .reduce((acc, sum) => acc + sum, 0);

console.log(Math.abs(calTotalWithdrawal));

const calIntrest = movements
  .filter(deposite => deposite > 0)
  .map(interest => (interest * 1.1) / 100)
  .filter((aboveInterest, i, arr) => {
    console.log(arr);
    return aboveInterest > 1;
  })
  .reduce((acc, sum) => acc + sum, 0);

console.log(calIntrest);

// Find Method
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account = [account1, account2];

const acc = account.find(acc => acc.owner === 'Jessica Davis');
console.log(acc);

// FindIndex()

/*
The Find Index method return the index of first matching condition and its a array method
*/

// Some and Every

/*
Some : The some is use to indetify any one array element satisfy the condition and it return true and false value

Every: the Every element means each array element should satisfy the conditon 
and return true and false value base on condition
*/

//movements: [200, 450, -400, 3000, -650, -130, 70, 1300,0]

console.log(movements.some(value => value >= 0));
//true as it has greater than 0 value

console.log(movements.every(value => value >= 0));
//false

// Flat and FlatMAp

/*

flat() : The flat method create a single array if array as nested array but it has 
default level capacity as 1

For Nested array you can change the default level value 
eg.flat(2)

flatmap(): inside of write map() and flat method differently it will return result in single method
 but this will return the level as 1 you cant change the default level
*/

const testFlatArray = [23, 45, 6, [23, 78, 0, 56, 8, [4, 678, 234, 6, [1, 4]]]];

console.log(testFlatArray.flat());
console.log(testFlatArray.flat(2));
console.log(testFlatArray.flat(3));

const testFlatArray1 = [23, 45, 6, [23, 78, 0, 56, 8]];

const mapArray = testFlatArray1.map(value => value);

console.log(mapArray);
const mapArrayWithFlat = testFlatArray1.map(value => value).flat();

console.log(mapArrayWithFlat);

const theFlatMap = testFlatArray1.flatMap(value => value);

console.log(theFlatMap);

// Sort

/*
Sort() method : sort the element  of array  and return the reference to same array
*/

let result;
const unsortedMonths = ['Jan', 'Dec', 'Feb', 'April', 'March', 'Nov'];

console.log(unsortedMonths.sort()); // Not accurate result

const digit = [1, 4, 20, 45, 3, 0, 99, -1, 100, 666, -200];

console.log(digit.sort()); // Not accurate result

//use a and b elment

result = digit.sort((a, b) => a < b);
//decending Order
console.log(result);

result = digit.sort((a, b) => a > b);
//accesding Order
console.log(result);

const btnSort = document.querySelector('.btn--sort');

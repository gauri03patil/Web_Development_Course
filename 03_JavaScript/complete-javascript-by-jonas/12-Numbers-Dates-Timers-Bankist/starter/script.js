'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2022-09-18T21:31:17.178Z',
    '2022-09-20T07:42:02.383Z',
    '2022-09-15T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2022-09-17T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2022-11-01T13:15:33.035Z',
    '2022-11-30T09:48:16.867Z',
    '2022-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
// Functions

const dateFunc = function (date) {
  const calculateDate = (date1, date2) => {
    console.log('Date:', date1, date2);
    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    console.log(diffTime, typeof diffDays);
    return diffDays;
  };

  const dayPass = calculateDate(new Date(), date);

  console.log(dayPass);
  if (dayPass === 0) return 'Today';
  if (dayPass === 1) return 'Yesterday';
  if (dayPass <= 7) return `${dayPass} days Ago`;
  else {
    const currentdate = date;
    const day = `${currentdate.getDate()}`.padStart(2, 0);
    const month = `${currentdate.getMonth() + 1}`.padStart(2, 0);
    const year = currentdate.getFullYear();
    const fulldate = day + '/' + month + '/' + year;

    return fulldate;
  }
};
const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const currentdate = new Date(acc.movementsDates[i]);
    // const day = `${currentdate.getDate()}`.padStart(2, 0);
    // const month = `${currentdate.getMonth() + 1}`.padStart(2, 0);
    // const year = currentdate.getFullYear();
    // let fulldate = day + '/' + month + '/' + year;
    let fulldate = dateFunc(currentdate);
    console.log(fulldate);
    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
    <div class="movements__date">${fulldate}</div>
        <div class="movements__value">${mov}€</div>
        
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance}€`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

///////////////////////////////////////
// Event handlers
let currentAccount, time;
const setTimer = function () {
  const trick = function () {
    let min = String(Math.trunc(timer / 60)).padStart(2, '0');
    let sec = String(timer % 60).padStart(2, '0');

    labelTimer.textContent = `${min}:${sec}`;
    //timer -= 0.01;
    if (timer === 0) {
      console.log('Logout the user');
      clearTimeout(setTimer);
      containerApp.style.opacity = 0;
    }
    timer--;
  };

  let timer = 10;
  trick();
  const time = setInterval(trick, 1000);
  return time;
};

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  const loginDate = new Date();

  const date = loginDate.getDate();
  const month = loginDate.getMonth() + 1;
  const year = loginDate.getFullYear();
  labelDate.textContent = `${date}/${month}/${year}`;
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;
    //labelTimer.textContent = '';

    if (time) clearInterval(time);
    // timer = setLogoutTimer();
    time = setTimer();
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    //Updating date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    setTimeout(function () {
      currentAccount.movements.push(amount);
      currentAccount.movementsDates.push(new Date().toISOString());

      // Update UI
      updateUI(currentAccount);
    }, 3000);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

labelBalance.addEventListener('click', function () {
  [...document.querySelectorAll('.movements__row')].forEach((row, i) => {
    if (i % 2 === 0) row.style.backgroundColor = 'blue';
  });
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

//Number Conversion

console.log(Number('23'));
console.log(+'23');

/*
Unary Plus Operator - The unary plus operator (+) precedes its operand and 
evaluates to its operand but attempts to convert it into a number, if it isn't already. 

Syntax()
+Value
*/
//Parsing
console.log(Number.parseInt('23'));
console.log(parseInt('23'));
console.log(Number.parseInt('23.98'));
console.log(Number.parseFloat('23'));
console.log(parseFloat('23'));
console.log(Number.parseFloat('23.98'));

console.log(Number.parseInt('450px'));
console.log(Number.parseInt('p450px'));

console.log(Number.parseFloat('2.5rem'));

console.log(parseInt('10', 10));
console.log(parseInt('010'));
console.log(parseInt('10', 8));
console.log(parseInt('0x10'));
console.log(parseInt('10', 16));

console.log(parseInt('23', 10));
console.log(parseInt('0x12', 16));
console.log(parseInt('011', 8));
console.log(parseInt('0010', 10));
console.log(parseInt('0000', 2));
console.log(parseInt('0001', 2));
console.log(parseInt('0011', 2));

//isNan

console.log('************  IsNaN***********');
// Return true or false
//Number.isNaN() doesn't attempt to convert the parameter to a number, so non-numbers always return false
// It return true and false value
console.log(Number.isNaN('20'));
console.log(Number.isNaN('blabla'));

// So always use isNaN() Directly

console.log(isNaN('20')); //false
console.log(isNaN('blabla')); //true
console.log(isNaN('x10')); //true
console.log(isNaN(null)); //false // converted to 0
console.log(isNaN(undefined)); //true

console.log('************  Is Integer ***********');
/*
1.The Number.isInteger() method determines whether the passed value is an integer.
2.Need to use with isInteger() method with Number as Number.isInteger()
3.It return true and flase value

Syntax: Number.isInteger(value)
*/

console.log(Number.isInteger('20')); //false bcz check for parse value is integer
console.log(Number.isInteger(+'20')); // Using plus we have parse the value
console.log(Number.isInteger('20.90'));
console.log(Number.isInteger(+'20.90')); //20.90
// Using plus we have parse the value but value is floating point

console.log(Number.isInteger(NaN)); //false
console.log(Number.isInteger(null)); //false
console.log(Number.isInteger(undefined)); //false
//All above three are flase bcz value not parse

console.log(Number.isInteger(+null)); //true

console.log('************  Isfinite ***********');
/*
1.pass number is finit number that is it check whether number is neither positive infinite and
negative infinite and NaN
2. Return a True and False 
*/

console.log(Number.isFinite(10 / 0));
console.log(Number.isFinite(10 / 1));
console.log(Number.isFinite(10 + NaN));
console.log(isFinite(0));
console.log(isFinite(null));
console.log(isFinite(''));
console.log(isFinite(NaN));

console.log('************  Max ***********');
/**
 * 1.The Math.max() function returns the largest of the numbers given as input parameters,
 * or -Infinity if there are no parameters
 *
 * 2.Return a Number
 * 3.We need to pass array using destructuring
 * 4. inside max we can directly declare the element
 
Syntax: 
Math.max()
Math.max(value0)
Math.max(value0.....valueN)
 */

const numbers = [12, 45, 67, 85, 32, 45, 7, 9];

console.log(Math.max());
console.log(Math.max(...numbers));
//need to pass array usign destructuring
console.log(Math.max(1, 4, 5, 6));
console.log(Math.max(-10, -20));
console.log(Math.max(10, -20, NaN));

console.log('************  Min ***********');

/**
 * The Math.min() function returns the smallest of the numbers given as input parameters,
 * or Infinity if there are no parameters.
 *
 *Return: The smallest of the given numbers. Returns NaN if any of the parameters is or is converted into NaN.
  Returns Infinity if no parameters are provided.
 */
console.log(Math.min());
console.log(Math.min(...numbers));

console.log('************  Sqrt ***********');

/**
 *The Math.sqrt() function returns the square root of a number.
 Math.sqrt(x)
 x :A number greater than or equal to 0.

 for empty sqrt() : it will return NaN
 */

console.log(Math.sqrt(25));
console.log(Math.sqrt(7));

console.log(Math.sqrt(64));
console.log(Math.sqrt());

console.log('************  random ***********');

/**
 *The Math.random() function returns a floating-point, pseudo-random number that's greater 
 than or equal to 0 and less than 1,

return : A floating-point, pseudo-random number between 0 (inclusive) and 1 (exclusive).
 */
console.log(Math.random());
//random number with max
console.log(Math.trunc(Math.random() * Math.max(...numbers)));
console.log(Math.trunc(Math.random() * Math.min(...numbers)));

console.log('************  truncate ***********');

/**
 *The Math.trunc() function returns the integer part of a number by removing any fractional digits.
 *Math.trunc(x)
 */

// Rounding Integer
console.log('************  round ***********');
//The Math.round() function returns the value of a number rounded to the nearest integer.
//Math.round(x)

console.log(Math.round(0.49));
console.log(Math.round(0.5));
console.log(Math.round(0.51));

console.log('************  ceil ***********');
//The Math.ceil() function always rounds up and returns the smaller integer greater than or equal to a given number
//Syntax:Math.ceil(x)

console.log(Math.ceil(7.004));
console.log(Math.ceil(0.95));
console.log(Math.ceil(0.001));
console.log(Math.ceil(-0.01));
console.log(Math.ceil(-1.01));

console.log('************  floor ***********');
//The Math.floor() function always rounds down and returns the largest integer less than or equal to a given number.

console.log(Math.floor(-1.01));
console.log(Math.floor(0.95));
console.log(Math.floor(1.95));

console.log('************  toFixed ***********');
//The toFixed() method formats a number using fixed-point notation.
/**
toFixed() --> display Integer number
toFixed(digits) 
*/

console.log((123.784).toFixed());
console.log((123.784).toFixed(2)); // 2 digit decimal number added
console.log((123.784).toFixed(3));

//underscore is acceptable in numbers

console.log(123_45);
console.log(12_3_45); // acceptable in number only
console.log('123_45'); // not acceptable in string

//BigInt

console.log(12345678909876543217898765432);
console.log(12345678909876543217898765432n);

//cannot mix bigInt with number
//console.log(23n * 2); //can't convert BigInt to number
console.log(23n > 78);

//Date
console.log(new Date()); //current date and time
console.log(Date.now()); //in miliseconds
const dateNow = new Date(1663665242927);
console.log(dateNow.getFullYear());
console.log(dateNow.getDate());
console.log(dateNow.getMonth());
console.log(dateNow.getTime());
console.log(dateNow.getSeconds());
console.log(dateNow.toUTCString()); //Tue, 20 Sep 2022 09:14:02 GMT
console.log(dateNow.toISOString()); //2022-09-20T09:14:02.927Z

//Review: learn date object

/*
There are 4 ways to create a new date object:

new Date()
new Date(year, month, day, hours, minutes, seconds, milliseconds)
new Date(milliseconds)
new Date(date string)
*/

// new Date(): Create a new object with current date and time

const d = new Date();
console.log(d);

// new Date(year, ..... milliseconds) create date object with given date time and minutes and second
/**
 *
 * 1000 milliseconds means 1 second
 * 60 second means 1 minute
 * 60 minute means 1 hour
 *
 * JavaScript counts months from 0 to 11: january=0 December=11
 */
let withSpecifyDate = new Date(2022, 11, 26, 23, 60, 1, 900);
//if we have date 26 and time is 23 hour and 60 min then it will give you next day
console.log(withSpecifyDate);

//month Overflow added 13 --> Consider the month from start and it will change the year
console.log(new Date(2022, 13, 26, 23, 60, 1, 900));

// date overflow--> then will atumatically select next month date as if month as 31 days then 1st date selected in for next month
console.log(new Date(2022, 10, 32, 23, 60, 1, 900));

//Using 6,5,4,3,2 number
//6 - year month date hour minute second

console.log(new Date(2022, 10, 28, 23, 60, 1));
console.log(new Date(2022, 10, 28, 23, 60));
console.log(new Date(2022, 10, 28, 23));
console.log(new Date(2022, 10, 28));
console.log(new Date(2022, 10));

//Previous century
console.log(new Date(88, 10));

//Minus two days
const dateDiff = new Date(2022, 8, 28, 23, 60, 1) - new Date();
const dates = dateDiff / (1000 * 60 * 60 * 24);
console.log(Math.floor(Math.abs(dates))); //smalles value 7.52 --> 7
console.log(Math.round(Math.abs(dates))); //round up the value  7.52-->8

const date1Mill = new Date(2022, 5, 28, 23, 60, 1);
const date1Mill1 = new Date();
console.log(date1Mill, date1Mill1);

// Displaying Dates

//1 Convert to UTC Method
const tarik = new Date();

console.log('UTC Date: ', tarik.toUTCString());
console.log('To String Date: ', tarik.toDateString());
console.log('To ISO Date: ', tarik.toISOString());
const iso = tarik.toISOString();

// Iternationalization
/**
 * The Intl.DateTimeFormat() constructor creates Intl.DateTimeFormat objects
 * that enable language-sensitive date and time formatting.
 *
 *
 */
const date = new Date();
const iso1 = date.toISOString();
const onlyDate = {
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
};

const DateWithTime = {
  hour: 'numeric',
  minute: 'numeric',
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
  timeZone: 'UTC',
};
const interDate = new Intl.DateTimeFormat('en-us', DateWithTime).format(date);
console.log(interDate);

/**setTimeout():
 * The global setTimeout() method sets a timer which executes a function or
 * specified piece of code once the timer expires.
Syntax():
setTimeout(code)
setTimeout(code, delay)

setTimeout(functionRef)
setTimeout(functionRef, delay)
setTimeout(functionRef, delay, param1)
setTimeout(functionRef, delay, param1, param2
 */

setTimeout(() => console.log('I like the Pizza'), 1000);
setTimeout(() => console.log('I like the Mango'), 2000);
const xyz = setTimeout(() => console.log('I like the Chicken'), 3000);

clearTimeout(xyz); // this will not print chicken

const ingredence = ['paneer', 'onion'];

const pizza = setTimeout(
  (ing1, ing2) => console.log(`Pizza have ${ing1} and ${ing2} ingredence`),
  3000,
  ...ingredence
);

if (ingredence.includes('onion')) clearTimeout(pizza);
//if (ingredence.includes('tomato')) clearTimeout(pizza); // print pizza incrdence

// Note: Function with setTimeout
/*
setTimeout(function () {
  currentAccount.movements.push(amount);
  currentAccount.movementsDates.push(new Date().toISOString());

  // Update UI
  updateUI(currentAccount);
}, 3000);
*/

//Review: SetInterval
/*
setInterval()- Functional Call repeatedly with fixed time delay between each call

 Set Interval return unique id which we can remove it using clearInterval command
 
 This method returns an interval ID which uniquely identifies the interval, 
 so you can remove it later by calling clearInterval()

 Syntax: 
setInterval(code)
setInterval(code, delay)

setInterval(func)
setInterval(func, delay)
setInterval(func, delay, arg0)
setInterval(func, delay, arg0, argN)
*/

//setInterval(() => console.log('Hello Welome to Java Course'), 2000);
//above code execute multiple time after 2 second

setInterval(function () {
  const d = new Date();
  console.log(d);
}, 90000);
//}, 1000);  // 1000 means it will call the function after 1 second

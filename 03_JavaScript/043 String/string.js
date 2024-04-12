// String using Double Quotes

let company = "XOXO";
let x_company = `ZOZO`;
console.log(company, x_company);

// Quotes Inside Quotes

let answer = "It's Right";
let answer1 = 'It"s Right';
let answer2 = 'It\'s Right , "but you should know it".';
// used \ to tell compile

console.log(answer);
console.log(answer1);
console.log(answer2);

// Template literals (Template strings)   -- backtick (`)

// The back tick we use to access dynamic content

let back = "You're Back";

console.log(`Akshay ${back}`); //Akshay You're Back

//concatenate String using + +=

let bottle = "I am bottle ";
let red = "red";
let blue = "blue";

let redBottle = bottle + red;
console.log(redBottle);

console.log((blue += bottle));

console.log(blue);

let a = "a";
let b = "a";

console.log(a == b, a === b);

//? Length

let book = "Atomic Habits";
console.log(book.length);

//? backslash escape character. \
let text = 'We are the so-called "Vikings" from the north.';
console.log(text);

//? JavaScript Strings as Objects

/* Do not create Strings objects.

The new keyword complicates the code and slows down execution speed.

String objects can produce unexpected results: */

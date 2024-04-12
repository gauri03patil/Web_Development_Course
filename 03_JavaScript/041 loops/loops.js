"use-strict";

/*
TODO Different Kinds of Loops

*Loops are handy, if you want to run the same code over and over again, each time with a different value.

JavaScript supports different kinds of loops:

? *for - loops through a block of code a number of times
for (let i = 0; i < 100; i++) {
  console.log(i);
}


? *for/in - loops through the properties of an object

for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
        const element = object[key];
        
    }
}


? *for/of - loops through the values of an iterable object

for (const iterator of object) {
}


? *while - loops through a block of code while a specified condition is true

while (condition) {}


? *do/while - also loops through a block of code while a specified condition is true

do {
    
} while (condition);
 *
 */

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

//Forin

const person = { fname: "John", lname: "Doe", age: 25 };

/* for (const key in person) {
  const value = person[key];

  console.log(key, value);
}

for (const key in person) {
  if (person.hasOwnProperty.call(person, key)) {
    const element = person[key];
  }
} */

//Forof

let language = "JavaScript";

/* for (const iterator of language) {
  console.log(iterator);
}

const cars = ["BMW", "Volvo", "Mini"];

for (const iterator of cars) {
  console.log(iterator);
} */

//while

let number = 10;

/* while (number < 12) {
  console.log(number);
  number++;
}
 */

do {
  console.log(number);
} while (number > 10);

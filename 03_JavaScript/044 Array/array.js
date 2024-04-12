"use strict";

const cars = ["Saab", "Volvo", "BMW"];

//Add value in array
cars[3] = "Innova";

console.log(cars);

//change value at zero position
cars[0] = "Honda";
console.log(cars);

//coverting array to string
console.log(cars.toString());

//Arrays use numbers to access its "elements".
console.log(cars[0]);

//Objects use names to access its "members
const per = { firstName: "John", lastName: "Doe", age: 46 };

console.log(per.firstName);

//array can contain different array , it can also have function , object
// Define a function
function greet() {
  console.log("Hello, world!");
}

// Define an object
const person = {
  name: "John",
  age: 30,
  hobbies: ["Reading", "Cooking", "Gardening"],
};

// Define a nested array
const fruits = ["apple", "banana", "orange"];

// Create an array containing the function call, object, and array
const mixedArray = [greet(), person, fruits];

// Access elements of the mixed array
console.log(mixedArray[0]); // Output: "Hello, world!"
console.log(mixedArray[1]); // Accessing the object
console.log(mixedArray[2]); // Accessing the nested array

//Get Array length and sort method
const alpha = ["a", "g", "f", "c", "b", "k"];

console.log(alpha.length);
console.log(alpha.sort());

//looping array
for (const iterator of alpha) {
  console.log(iterator);
}
for (const [index, iterator] of alpha.entries()) {
  console.log(`${iterator} - ${index}`);
}
//! WARNING !  Adding elements with high indexes can create undefined "holes" in an array:
let sign = ["alpha", "beta"];
sign[6] = "gama";
console.log(sign);
//[ 'alpha', 'beta', <4 empty items>, 'gama' ]

//Verify PErson and fruits is array of object

console.log(" Person is Object: ", person instanceof Object);

console.log(" Fruits is array: ", Array.isArray(fruits));
console.log(" fruits is array: ", fruits instanceof Array);

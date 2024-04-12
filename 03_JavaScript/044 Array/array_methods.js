//?JavaScript Array length

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let size = fruits.length;

console.log(size);

//? JavaScript Array toString()

console.log(fruits.toString());

// ? at method  -- it return the value of specific index

console.log(fruits.at(0));
console.log(fruits.at(-1));
console.log(fruits.at(9));

//? Array Join method  -- it return string by joining specific value

let joinArr = fruits.join("*");
console.log(joinArr);

// Array Pop and Push  - operation performed at end index
const frt = ["Banana", "Orange", "Apple", "Mango"];

//pop -- it return the delete/ pop element and The pop() method removes the last element from an array:
console.log(frt.pop());
//push -- it return the new array length and add element at end
console.log(frt.push("Peru"));
console.log(fruits);

// updated array : [ 'Banana', 'Orange', 'Apple', 'Peru' ]
//Shift and unshift -- it performed operation at start of index

console.log(frt.shift()); // delete first element and return delete item
console.log(frt.unshift("Bora")); // Return the new array length but add element at begning
console.log(frt);

// Delete
// frt.delete();
console.log(frt);

//concat
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

let girlsBoys = myGirls.concat(myBoys);
console.log(girlsBoys);
console.log(myGirls);
console.log(myBoys);

//Joining two array
console.log([...myGirls, ...myBoys]);

console.log("New Array");
//copyWithing -- It copy array value within array and overwrites exisitng value and modified exisitn array

let gender = ["Cecilie", "Lone", "Emil", "Tobias", "Linus"];
let newGen = gender.copyWithin(2, 0, 2);

console.log(newGen);
console.log(gender);

//flat() :  The flat() method in JavaScript is used to flatten nested arrays, i.e., it merges subarrays within an array to a specified depth
const nestedArray = [1, [2, 3], [4, 5]];
const singleArray = nestedArray.flat();

console.log(singleArray);

const deeplyNestedArray = [1, [2, [3, [4, [5]]]]];
const flattenedArray = deeplyNestedArray.flat(3); // Flatten to depth 2
console.log(flattenedArray);

const mixedArray = [1, "hello", [2, "world"], [[3]], { key: "value" }];
const mix = mixedArray.flat();
console.log(mix);

//Splice()  -- return deleted value and modified value added in existing array
//array.splice(start, deleteCount, item1, item2, ...);

let array = [1, 2, 3, 4, 5];
let removedElements = array.splice(2, 2);
console.log(array); // Output: [1, 2, 5]
console.log(removedElements); // Output: [3, 4]

const phala = ["Banana", "Orange", "Apple", "Mango"];
const mPhala = phala.splice(1, 2, "kela", "safarchand", "peru");
console.log(mPhala);
console.log(phala);

//Adding element
let arr1 = [1, 2, 3, 4, 5];
arr1.splice(2, 0, 6, 7); //delete count is 0
console.log(arr1);

//Slice() --? Doesnot modify the exisitng array

let arr2 = [1, 2, 3, 4, 5];
let newSlice = arr2.slice(2);
console.log(newSlice);
console.log(arr2);
//-->
console.log(arr2.slice(-2));

console.log(arr2.pop());

let arr = [1, 2, 3, 4, 5];

console.log("Index");
console.log(arr.indexOf(-5));

console.log(arr.slice(2, 4));
console.log(arr);

const fruit = [
  "Apple",
  "Banana",
  "Orange",
  "Grapes",
  "Strawberry",
  "Pineapple",
  "Mango",
  "Watermelon",
  "Kiwi",
  "Peach",
];

fruit.forEach((value, index, arr) => {
  console.log(`${value} - ${index}`);
});

const newFruits = fruit.map((value, index, arr) => {
  return `${value} - ${index}`;
});
console.log(newFruits);

const students = [
  { name: "Alice", hobbies: ["Reading", "Painting"] },
  { name: "Bob", hobbies: ["Drawing", "Gardening"] },
  { name: "Charlie", hobbies: ["Reading", "Cooking"] },
];

const allHobbies = students.flatMap((student) => student.hobbies);

const uniqueHobbies = [...new Set(allHobbies)];

console.log(uniqueHobbies);

const arrayValues = [2, 5, 8, 11, 14, 17, 20, 23, 26, 29];

let even = arrayValues.filter((element) => {
  return element % 2 == 1;
});

console.log(even);

const addition = arrayValues.reduce((accumulate, element) => {
  return accumulate - element;
});

console.log(addition);
const add1 = arrayValues.reduceRight((accumulate, element) => {
  return accumulate - element;
});

console.log(add1);

const numbers = [45, 4, 9, 16, 25];

let result = numbers.every((element) => {
  return element >= 4;
});

console.log(result);

let r1 = numbers.some((element) => {
  return element > 40;
});

console.log(r1);

console.log(Array.from("Alex"));

const f2 = ["Banana", "Orange", "Apple", "Mango"];
const keys = f2.keys();
const entries = f2.entries();
for (const key of keys) {
  console.log(key);
}

for (const ent of entries) {
  console.log(ent);
}

for (const [key, value] in f2.entries()) {
  console.log(`${key} -- ${value}`);
}

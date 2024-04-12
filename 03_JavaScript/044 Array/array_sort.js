const fruits = ["Banana", "Orange", "Apple", "Mango"];

// sort() / reverse(): -- it also modify existing string
let sorted = fruits.sort();

console.log(sorted);
console.log(fruits);

console.log(sorted.reverse());
console.log(sorted);

//By combining sort() and reverse(), you can sort an array in descending order:

//toSorted() , toReverse() -- Doesnot modify existing string

const months = ["Jan", "Feb", "Mar", "Apr"];
const newSort = months.toSorted();

console.log(newSort);
console.log(months);

const newReverse = months.toReversed();
console.log(newReverse);

const points = [40, 100, 1, 5, 25, 10];

//sorting won't work on number
console.log(points.toSorted());


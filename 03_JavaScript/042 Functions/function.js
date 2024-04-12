//? Normal Function Declaration
function greet() {
  console.log("Hello, world!");
}

//function Invocation
greet();

//Function Expression: Functions can also be defined using function expressions, where the function is assigned to a variable

const result = function sum(a, b) {
  return a + b;
};

console.log(result(20, 30));

//Anonymous function
const result2 = function (a, b) {
  return a + b;
};

console.log(result2(20, 30));

//function with default value
const defaultValueFunction = function (a, b = 50) {
  return a + b;
};

console.log(defaultValueFunction(20));

//arrow function
const addition = () => {
  console.log("Arrow Function without parameters");
};

addition();

// const plus = (a, b) => {
//   a + b;
// };
const plus = (a, b) => a + b;
//If you have single line then no need to write {}
// by default arrow function as return type
console.log(plus(30, 40));

// / IIFE - immediately invoked function expression

(function sum() {
  console.log(" Immediately invoked function expression Call");
})();

const add = (function (a, b) {
  console.log(a + b);
  return a + b;
})(10, 80);

(() => {
  console.log("Hello");
})();

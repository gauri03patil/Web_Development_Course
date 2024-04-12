// ? When to use JavaScript const?
//* Always declare a variable with const when you know that the value should not be changed.

/*
? Const
? Variables defined with const cannot be Redeclared

? Variables defined with const cannot be Reassigned

? Variables defined with const have Block Scope

*/

/*
?Must be Assigned
JavaScript const variables must be assigned a value when they are declared:
*/
const PI = 3.24;

//TODO Const Cannot be Reassigned
// PI = 3.12;
//Not Allowed  - Uncaught TypeError: Assignment to constant variable.
/*  PI = 3.12
    Above code will thrown an error as we cant change const variable value
 */

console.log("PI value ", PI);

/*
?Constant Objects and Arrays

The keyword const is a little misleading.

It does not define a constant value. It defines a constant reference to a value.

TODO Because of this you can NOT:

Reassign a constant value
Reassign a constant array
Reassign a constant object

TODO But you CAN:

? Change the elements of constant array
? Change the properties of constant object

*/

//? Const Array
const cars = ["Toyato", "BMW", "Innova"];
console.log(cars);

//TODO You can change a element Toyato to Volvo
cars[0] = "Volvo";
console.log(cars);

//TODO Adding add a item  Thar(added at position) or push the item Jeep (at end added)
cars[3] = "Thar";
console.log(cars);

cars.push = "Jeep";
console.log(cars);

console.log(cars);

//TODO But you can NOT reassign the array:

//cars = ["Toyota", "Volvo", "Audi"];
//*Not allowed it will throw error

// ? Const Object

//TODO You can create a const object:
const car = {
  Brand: "Tata",
  Model: "xyz",
  color: "white",
};

//TODO You can change a property:
car.Brand = "Tata Brand";
car.color = "Grey";
console.log(car);

/*

? What is Good?
let and const have block scope.

let and const can not be redeclared.

let and const must be declared before use.

let and const does not bind to this.

let and const are not hoisted.

? What is Not Good?
var does not have to be declared.

var is hoisted.

var binds to this.

*/

//? Block scope const

const x = 10;

{
  const x = 50;
  console.log(x);
  // Here x is 50
}

console.log(x);
// Here x is 10

// TODO  Redeclaring a variable with const, in another scope, or in another block, is allowed:
const z = 2; // Allowed

{
  const z = 3; // Allowed
}

{
  const z = 4; // Allowed
}

//? Redeclaring

{
  const q = 10;
  // let q = 10;
  //Above declaring with same variable in same block is not allowed
}

//? Hoisting

//stopic -- Meaning: You can use the variable before it is declared:

// For let and const we need to delcare the variable and then we can initialize it  else it will throw reference error

// carName = "Volvo";
// let carName;

//*best way
let carName;
carName = "volvo";

const xyz = "BMW";

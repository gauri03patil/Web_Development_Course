'use-strict';

let birthyear = 1992;
let firstName = 'Akshay';
let lastName = 'Patil';

function calAge(birthyear) {
  let personAge = 2022 - birthyear;

  function dispplayAge() {
    let bloodGroup = 'O+';
    console.log(
      `${firstName} you are ${personAge} old with ${bloodGroup} blood group`
    );

    if (personAge > 1) {
      var test = 'This is Test Entry';
    }
    console.log(test);
  }
  dispplayAge();
  //console.log(bloodGroup);
  // BloodGroup return a reference error bcz it has block of scope

  //Var Variable

  return personAge;
}

const age = calAge(birthyear);

// Hoisting

console.log(x);
//console.log(y);
//console.log(z);

var x = 10;
let y = 12;
const z = 24;

console.log(addDigit(2, 3));
//console.log(addNumber(2, 3));
//console.log(addArrow(2, 3));
//console.log(addValue(2, 3));

function addDigit(a, b) {
  return a + b;
}

let addNumber = function (a, b) {
  return a + b;
};

//Arrow Function
const addArrow = (a, b) => a + b;

var addValue = (a, b) => a + b;

// This Keywrod
const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};
jonas.calcAge();

const matilda = {
  year: 2017,
};

matilda.calcAge = jonas.calcAge;
matilda.calcAge();

const f = jonas.calcAge;
f();
// Regular Expression with This keyword

console.log(' Regular Function and Arrow Function');
const regularExpression = function (birthyear) {
  console.log(2037 - birthyear);
  console.log(this);
};

regularExpression(1992);

const first = birthyear => {
  console.log(2037 - birthyear);
  console.log(this);
};

first(2017);

const jonas1 = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    // console.log(this);
    console.log(2037 - this.year);
  },

  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};

jonas1.greet();

const test = {
  fName: 'Akshay',
  lName: 'Patil',
  year: 1995,
  calAge: function () {
    console.log(this);

    displayMessage = () => {
      console.log(this.year);
    };
    displayMessage();
  },
};

test.calAge();

let DOB = 1996;

let oldDOB = DOB;
DOB = 1997;

console.log(DOB);

console.log(oldDOB);

const letu = {
  firstName: 'Akshay',
  lastName: 'Patil',
  age: 25,
};

const metu = letu;
metu.age = 26;

console.log(letu);
console.log(metu);

// To avoid copy modified issue

const metu2 = Object.assign({}, letu);
metu2.age = 30;

console.log(letu);
console.log(metu2);

// But it has disadvantage as if array or function are present then it not modified that value as
// it modified value for both the object

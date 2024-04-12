console.log("Welcome to Faulty Calculator");

function calculator(params, params2) {
  //   console.log("Number 1 " + params);
  //   console.log("Number 2 " + params2);

  let addition, subsctration, multiplication, division;
  const mathrandom = Math.random();
  console.log(mathrandom);

  if (mathrandom < 0.2) {
    // console.log("20% Probability");

    addition = params - params2;
    subsctration = params / params2;
    multiplication = params + params2;
    division = params ** params2;
  } else {
    addition = params + params2;
    subsctration = params - params2;
    multiplication = params * params2;
    division = params / params2;
  }

  console.log("Addition of " + params + "+" + params2 + " is" + addition);
  console.log(
    "subsctration of " + params + "-" + params2 + " is" + subsctration
  );
  console.log(
    "multiplication of " + params + "*" + params2 + " is" + multiplication
  );
  console.log("division of " + params + "/" + params2 + " is" + division);
}

// calculator(10, 20);

//Solution 2

const mathrandom = Math.random();
console.log(mathrandom);

let a = prompt("Enter a First Number");
let b = prompt("Enter a operation Symbol (+,-,*,/)");
let c = prompt("Enter a Second Number");

const obj = {
  "+": "-",
  "-": "/",
  "*": "+",
  "/": "**",
};

if (mathrandom > 0.5) {
  console.log("Operation result is ", eval(`${a} ${b} ${c}`));
} else {
  // console.log(obj[b]);
  let op = obj[b];
  console.log("Operation result is --> ", eval(`${a} ${op} ${c}`));
}

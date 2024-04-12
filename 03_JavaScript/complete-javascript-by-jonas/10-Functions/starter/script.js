'use strict';

const companyDetails = function (
  companyName,
  numberOfEmployee = '1',
  tenurYearly = 100
) {
  // Previous we learn short circuting to pass default value if we have undefined or fasly value

  //ES%
  companyName ||= 'BankCurpt';
  numberOfEmployee = numberOfEmployee || 1;
  tenurYearly = tenurYearly || 20;

  const details = {
    companyName, // this is enhance object literal syntax
    numberOfEmployee,
    tenurYearly,
  };
  console.log(details);
};

companyDetails(undefined, 60);
companyDetails('ContentStack', 360, 1200);
companyDetails('SubBoard', undefined, '1');
// Skip the value in function
companyDetails();

// Function Returning Function

const magic = function (x) {
  console.log('magic function ');
  x ||= 20;
  return function magicMoment(count = 2) {
    //console.log('magic Moment function ');
    console.log('magic Moment value ', x * count);
  };
};

const f1 = magic(25); // Function get call and its value stored in f1

f1();

// Call function

const company = {
  fName: 'Akshay',
  company: 'ContentStack',
  designation: 'QA',

  companyDetails() {
    console.log(
      `My Name is ${this.fName} and working in ${this.company} as ${this.designation}`
    );
  },
  multiplication(a, b) {
    console.log(a * b);
  },
};

const getCompany = company;
// Company details copy to getCompany now it has companydetails as holding proeprty of company object
getCompany.companyDetails(company);

const getCompany1 = company.companyDetails;
//getCompany1(); // undefined

// undefined as getCompany1 not holding any object property
// to solve this issue we use call() method

getCompany1.call(this);
// we return name output as "My Name is undefined and working in undefined as undefined"
// because not holding any object to return undefined but it doesnot break the code now

getCompany1.call(company);
// Now we are passing a company property value to it

// create normal object

const companyX = {
  fName: 'Patil',
  company: 'i-XL',
  designation: 'Tester',
};

getCompany1.call(companyX);
// Now we are passing different object and in this it holding that object walue

const cal = company.multiplication;

cal.call(companyX, 2, 3);

//bind method

const taxCal = function (rate, value) {
  return value + value * rate;
};

const addTax = taxCal.bind(null, 0.23);

console.log(addTax(10));

// IIEF

(function () {
  console.log('Function Invove Once Only');
})();

(() => console.log('Arrow function invoke once'))();

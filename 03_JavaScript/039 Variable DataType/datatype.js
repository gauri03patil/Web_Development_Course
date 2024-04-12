let x;
console.log(x);

// TODO Data Type
/* 

?JavaScript has 8 Datatypes
* 1. String
* 2. Number
* 3. Bigint
* 4. Boolean
* 5. Undefined
* 6. Null
* 7. Symbol
* 8. Object

?The Object Datatype
The object data type can contain:

* 1. An object
* 2. An array
* 3. A date

*/

let count = 10;
let country = "India";
let state = "Maharashtra";
let IsEducated = true;
let lang = ["Hindi", "English", "Marathi"];
let region;
let caste = null;

//*Object
let bio = {
  firstName: "Akshay",
  lastName: "Patil",
  bloodGroup: "O+",
  height: 5.9,
  weight: 89,
  IsInvesting: true,
};

console.log(count + " has", typeof count + " Date Type");
console.log(country + " has", typeof country + " data type");
console.log(IsEducated + " has", typeof IsEducated + " data type");
console.log(lang + " has", typeof lang + " data type");
console.log(bio + " has", typeof bio + " data type");

console.log(count, country, state, IsEducated, lang, region, caste);
console.log(
  typeof count,
  typeof country,
  typeof state,
  typeof IsEducated,
  typeof lang,
  typeof region,
  typeof caste
);
console.log(bio);

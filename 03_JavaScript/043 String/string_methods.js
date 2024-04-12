// ? length

let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
console.log(text.length);

//? Extracting string characters
/* There are 4 methods for extracting string characters:

The at(position) Method : The at() method returns the character at a specified index (position) in a string and it support negative value.
The charAt(position) Method : The charAt() method returns the character at a specified index (position) in a string
The charCodeAt(position) Method : The charCodeAt() method returns the code of the character at a specified index in a string:
Using property access [] like in arrays */

let welcome = "Hello World";

/*  Hello world
    012345678910
   -1110987654321  */

console.log(welcome.at(2));
console.log(welcome.charAt(4));
console.log(welcome.charCodeAt(5));
console.log(welcome.charAt(5));
console.log(welcome[6]);

console.log("Negative value output");

// at() support negative value
console.log(welcome.at(-1));
console.log(welcome.at(-11));
//?Minus value wont work for charAt
console.log(welcome.charAt(-11));

console.log("Out of Index value output");
//String out of index
console.log(welcome.at(20));
console.log(welcome.charAt(40)); //space
console.log(welcome.charCodeAt(25)); //NaN
console.log(welcome[60]); //undefined

console.log("Extracting String Parts");
//? Extracting String Parts

/* There are 3 methods for extracting a part of a string:

slice(start, end)
  1.Take negative value
  2

substring(start, end): 
        substr() is similar to slice().
        The difference is that the second parameter specifies the length of the extracted part.
        2.Doesnot take negative value it consider as 0


substr(start, length) */

//? Slice  -- आपल्याला एक नवीन स्ट्रिंग भेटते अँड existing स्ट्रिंग तशीच राहते

let stringPart = "Apple Kiwi Banana Orange";
//                01234 6    11     18

let new1 = stringPart.slice(0, 11);
console.log("New String ", new1);
console.log("Existing String ", stringPart);
let new2 = stringPart.slice(11);
console.log("New2 String :", new2);

//Negative para meter
let new3 = stringPart.slice(-13);
console.log("New2 String :", new3);

//?Substring

/* 
Extracts characters from startIndex up to, but not including, endIndex.
If endIndex is omitted, it extracts characters to the end of the string.
If startIndex is greater than endIndex, substring swaps the two arguments.*/

let subNew = stringPart.substring(6, -1);
let subNew1 = stringPart.slice(6, -1);
console.log(subNew);
console.log(subNew1);

//?substr()  - @deprecated
let fourCharStr = stringPart.substr(6, 4);
console.log(fourCharStr);

//? Converting to UpperCase and lowercase : it return the new string
let small = "Jay Shree Ram";

let upper = small.toUpperCase();
let lower = small.toLowerCase();
console.log(upper, lower);
// console.log(small.toLocaleLowerCase());

//concat()
const str1 = "Hello";
const str2 = "World";

let joinStr = str1.concat(" ", "Welcome ");
let joinStr2 = str2.concat(" ", "Welcome ");
console.log(joinStr);
console.log(joinStr2);
console.log(str1, str2);

/* All string methods return a new string. They don't modify the original string.

Formally said:

Strings are immutable: Strings cannot be changed, only replaced.
 */
//? trim()  method removes whitespace from both sides of a string:

let xyz =
  "       Strings are immutable: Strings cannot be changed, only replaced.     ";
let removeWhiteSpace = xyz.trim();
console.log(removeWhiteSpace);

//? PadStart and padEnd  -- padStart(stringLength, padString):

let number = "5";

let newNumber = number.padStart(3, "0");
console.log(newNumber, number);

let cardNumber = "123456781234";
let newCard = cardNumber.slice(8, 12).padStart(cardNumber.length, "*");
console.log(newCard);

// Repeat() : The repeat() method returns a string with a number of copies of a string.

let offer = "Offer! ";

console.log(offer.repeat(5));

let word = "Please visit Microsoft !";

let repWord = word.replace("visit", "buy");

console.log(repWord, word);

//ReplaceAll()

//split(): A string can be converted to an array with the split() method:

let fruits = "Apple Kiwi Mango Banan";

let fruitsall = fruits.split(" ");
console.log(fruitsall);

console.log(" Search MEthod");
// String Search Method
let searchMethod = "Please locate where 'locate' occurs!";

console.log(searchMethod.indexOf("l"));
console.log(searchMethod.indexOf("locate"));

//<--
console.log(searchMethod.lastIndexOf("locate"));

console.log(searchMethod.search("locate"));
console.log(searchMethod.search(/locate/));

//match?

console.log(searchMethod.match("locate"));
console.log(...searchMethod.matchAll(/locate/gi));

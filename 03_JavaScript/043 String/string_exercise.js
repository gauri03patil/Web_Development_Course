// Remove leading and trailing whitespace:
// Dummy String: " Hello, World! "

let text = " Hello, World!  ";

console.log(text.length);
console.log(text.trimEnd(), text.trimEnd().length);
console.log(text.trimStart(), text.trimStart().length);
console.log(text.trim(), text.trim().length);

// Convert to lowercase:
// Dummy String: "HELLO"

let lower = "HELLO";
console.log(lower.toLowerCase());

// Convert to uppercase:
// Dummy String: "hello"
let upper = "hello";
console.log(upper.toUpperCase());

// Check if starts with a specific substring (e.g., "Hello"):
let str = "Hello, World!";
console.log(str.startsWith("Hello"));

// Check if ends with a specific substring (e.g., "World!"):
// Dummy String: "Hello, World!"
let end = "Hello, World!";
console.log(end.endsWith("World!"));

// Check if includes a specific substring (e.g., "World"):
let inc = "Hello, World!";
console.log(inc.includes("World"));

// Find the index of a specific substring (e.g., "World"):
// Dummy String: "Hello, World!"
console.log(end.indexOf("World"));

// Replace a specific substring with another substring (e.g., "World" with "Universe"):
// Dummy String: "Hello, World!"
console.log(end.replace("World", "Universe"));

let dum = "Hello World, Please confirm world";
console.log(dum.replaceAll(/World/gi, "Universe"));

// Split a string into an array of substrings based on a delimiter (e.g., ","):
// Dummy String: "Hello, World!"
console.log(end.split(","));

// Join an array of substrings into a single string with a specified delimiter (e.g., " " ):
// Dummy Array: ["Hello", "World!"]
console.log(end.split(",").join(" "));

// Extract a substring from a string, given a start index and end index (e.g., 1 to 4):
// Dummy String: "Hello, World!"
console.log(end.slice(1, 4));

// Pad a string with a specified character to a certain length (e.g., pad with "-" to length 15):
// Dummy String: "Hello"
let hi = "Hello";
console.log(hi.padStart(15, "-"));

// Reverse a string:
// Dummy String: "Hello"
let rev = "Hello";
console.log(rev.split("").reverse().join(""));

let strr = "   JavaScript is Awesome!   ";
const reversed = strr.split("").reverse().join("");
console.log("Reversed:", reversed);

// Get the character at a specific index within a string (e.g., index 2):
// Dummy String: "Hello"
console.log("hello".charAt(2));

// Get the Unicode value of a character at a specific index within a string (e.g., index 2):
// Dummy String: "Hello"

console.log("hello".charCodeAt(2));

// Extract a substring starting from a specific index to the end of the string (e.g., index 3):
// Dummy String: "Hello, World!"
console.log("hello".substring(3));

// Repeat a string a specified number of times (e.g., 3 times):
// Dummy String: "Hello"
console.log("hello".repeat(3));

// Adjective

let adjectives = "Crazy Amazing Fire";
let shop = "Engine Foods Garments";
let word = "Bros Limited Hub";

console.log(adjectives.match(/crazy/gi)[0]);
console.log(shop.match(/Engine/gi)[0]);
console.log(word.match(/Hub/gi)[0]);

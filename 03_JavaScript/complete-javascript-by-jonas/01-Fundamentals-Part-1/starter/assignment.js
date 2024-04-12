
const country = "India"
const containet = "Asia Region"
let population = 132   //million

console.log("My Country name is:", country + " Which is in :", containet + " and It has population aroun", population)


/* Data Type

Number:  let count= 10  -> declaring number
boolean: let isIsland=true  --> contain true and false value
String:  let country="India"  -> Need to delcare vlue in double quotes
Undefine: let language  --> Do not define variable value
null:      let name= null --> It a object empty value

*/

const isIsland = false
let language

console.log(typeof isIsland)
console.log(typeof language)
console.log(typeof country)
console.log(typeof containet)
console.log(typeof population)

//Changing Variable value will thrown an error as it has constand value

// isIsland = "Yes!"
// console.log(typeof isIsland)

/*Name Convenstion 
1. start with lowercase letter eg. let country
2. If more than one wordpresent then camlecase use eg. let firstName , countryName
3. Name should not start with number
4. variable name can start with _ and $ sign eg. let _name, $name
*/

let ink = "blue"
let inkCompany = "Indian"
let _price = 5
let $marketingRequired = false


/* 
let : Declare variable as let when its value will be changing and it scope will be present within block
const: declare variable as const when it value wont be change 
var: It variable scope is global anywhere can access */

//set value to language variable
language = "Marathi"

const name = "Akshay" //Uncaught ReferenceError: Akshay is not defined if we remove "" double quotes

const countryCode = 1


console.log("Half population ", population / 2)

console.log("Increased population by one ", population + 1)

const finlandPopulation = 6

console.log("Greates Population country is india  ", population > finlandPopulation)

console.log('Average population check', population < 33)

let description = country + " is in " + containet + " and its " + population +
    " million people speaks " + language
console.log(description)


//String Template literal example
/* Template literal : 
->se back-ticks (``) rather than the quotes ("") to define a string
-> With template literals, you can use both single and double quotes inside a string:
-> Template literals allows multiline strings:
-> Template literals allow variables in strings: ${...}
*/
console.log(`${country} is in ${containet} and its ${population} million people speaks ${language}`)


description_templateLiteral = `${country} is in ${containet} and its ${population} million people speaks ${language}`
console.log(description_templateLiteral)


//back-tick `` support single and double quotes inside
console.log(`Hey it's "Akshay"`)

let xyz = ` first line
second line
third line`

console.log(xyz)

//if Elase
let averagePopulation = 13
if (population > averagePopulation) {
    console.log(`${country} population is above the average`)
} else {
    console.log(`${country} population is 22 million below the verage`)
}


//Type Conversion 

const year = '1991'

console.log(Number(year), year)
console.log(Number(year) + 18)
console.log(year + 18)

let text = "bob"
console.log(Number(text)) //NaN  Not a Number
console.log(typeof NaN)

let numbertype = 10
console.log(String(numbertype) + 10)  //Converting number to string 


//TYpe Corecion

// in type corecion type automatically gets converts

console.log('23' - '4' - '6')
console.log('23' + '10' + 3)//23103
console.log('23' + '10' - 3)//2310-3 -> 2307

console.log(5 + 6 + '4' + 9 - 4 - 2)


//Truty and falsy value

//there are only 5 falsy value 0, undefined,'', NaN, null

console.log(Boolean(0))

let textEntry;
console.log(Boolean(textEntry))

console.log(Boolean(''))
console.log(Boolean(NaN))

let money = 0;
if (money) {  // In condition we required only tru and false value if not then it will automatically converted to boolean

    console.log("Don't spend all money")
} else {
    console.log("You should get the job")
}


// == vs ===

/*
== -> Perform loose equal in which type corecion does automatically 
=== --> Strict equal type corecion not allowed so same data type and value record
*/

const age = '18'

if (age === 18)
    console.log(" You just become adult (Strict equal")


if (age == 18)
    console.log(" You just become adult (loose equal)")


if (language == 'English' && population < 50 && !isIsland) {
    console.log(`You should live in ${country} :)`)
}
else {
    console.log(`${country} does not meet your criteria :(`)
}



const bill = 275

bill >= 50 && bill <= 300 ? console.log("15 % Typ", bill + (bill / 100 * 15)) : console.log("20 % Tip", bill + (bill / 100 * 20))

const bill1 = 40
bill1 >= 50 && bill1 <= 300 ? console.log("15 % Typ", bill1 + (bill1 / 100 * 15)) : console.log("20 % Tip", bill1 + (bill1 / 100 * 20))

const bill2 = 430
bill2 >= 50 && bill2 <= 300 ? console.log("15 % Typ", bill2 + (bill2 / 100 * 15)) : console.log("20 % Tip", bill2 + (bill2 / 100 * 20))



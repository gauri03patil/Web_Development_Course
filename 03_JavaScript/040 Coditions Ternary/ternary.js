
const age = 23

age >= 18 ? console.log("I love to drink wine ") : console.log("i love to drink water")



const bill = 275

const tip = bill >= 45 && bill <= 300 ? bill * 0.15 : bill * 0.20

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value
    ${bill + tip}`)


const population = 13
const country = "Portugal's"
population > 33 ? console.log(`Portugal's population is above average`) : console.log(`Portugal's population is below average`)


console.log(`${country} population is ${population > 33 ? 'above' : 'below'} average`)
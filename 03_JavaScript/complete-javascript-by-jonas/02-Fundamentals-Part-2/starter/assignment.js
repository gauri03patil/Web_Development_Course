


function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}`
}

const IndiaDetails = describeCountry('India', '1231', "Delhi")
const USDetails = describeCountry('US', '700', "Washington")
const AusDetails = describeCountry('AUS', '400', "Canberra")

console.log(IndiaDetails)
console.log(USDetails)
console.log(AusDetails)


const worldPopulation = 7900

function percentageOfWorld1(population, country) {
    const percentage = (population / worldPopulation) * 100
    return `${country} has ${population} million people, so it's about ${percentage}% of
    the world population`
}

console.log(percentageOfWorld1(1231, 'India'))
console.log(percentageOfWorld1(700, 'India'))
console.log(percentageOfWorld1(400, 'India'))

// Expression Function
console.log("******Function Expression******")

const percentageOfWorld2 = function (population, country) {
    const percentage = (population / worldPopulation) * 100
    return `${country} has ${population} million people, so it's about ${percentage}% of the world population`
}

console.log(percentageOfWorld2(1231, 'India'))
console.log(percentageOfWorld2(700, 'India'))
console.log(percentageOfWorld2(400, 'India'))


// Arrow Function
console.log("******Arrow Function******")
const percentageOfWorld3 = (population, country) => {
    const percentage = (population / worldPopulation) * 100
    return percentage
}


console.log(percentageOfWorld3(1231, 'India'))
console.log(percentageOfWorld3(700, 'India'))
console.log(percentageOfWorld3(400, 'India'))

// Arrow Function Single Linke
console.log("******Arrow Function Single Line******")
const percentageOfWorld4 = population => (population / worldPopulation) * 100;

console.log(percentageOfWorld4(1231))
console.log(percentageOfWorld4(700))
console.log(percentageOfWorld4(400))


function describePopulation(country, population) {
    return percentageOfWorld1(population, country)
}


console.log(describePopulation("India", 1231))


const populations = ['3', '6', '9', '12']

if (populations.length === 4) {
    console.log(' Array has 4 element ')
}
else {
    console.log(' Array has element= ', populations.length)
}


const percentages = [percentageOfWorld4(populations[0]),
percentageOfWorld4(populations[1]),
percentageOfWorld4(populations[2]),
percentageOfWorld4(populations[3])]

console.log(percentages)


const neighbours = ['Bangladesh', 'nepal', 'bhotan']

//adding country at the end
neighbours.push('Utopia')
console.log(neighbours)
neighbours.pop('Utopia')
console.log(neighbours)

if (neighbours.includes('Germany')) {
    console.log('Germany in included in country')
} else {
    console.log('Probably not a central European country :D')
}

const index = neighbours.indexOf('nepal')
neighbours[index] = 'republic nepal'
console.log(neighbours)

// Above same example
const neighbours2 = ['Norway', 'Sweden', 'Russia'];
neighbours2.push('Utopia');
console.log(neighbours2);
neighbours2.pop();
console.log(neighbours2);
if (!neighbours2.includes('Germany')) {
    console.log('Probably not a central European country :D');
}
neighbours2[neighbours2.indexOf('Sweden')] = 'Republic of Sweden';
console.log(neighbours2)


const myCountry = {
    country: "India",
    capital: "Delhi",
    language: "Hindi",
    population: 126,
    neighbours: ['Nepal', 'SriLanka', 'Bhutan'],

    describe: function () {
        console.log(this)

        return `${this.country} has ${this['population']} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries
        and a capital called ${this['capital']}.'`;
    },

    checkIsland: function () {
        this.isIsland = this.neighbours.length === 0 ? true : false;
    }

};

console.log(`${myCountry.country} has ${myCountry['population']} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries
and a capital called ${myCountry['capital']}.'`)
myCountry.population += 2
console.log("Increase population by 2 using dot operator", myCountry.population)
myCountry.population -= 2

console.log("Decrease population by 2 using bracket operator", myCountry['population'])


console.log(myCountry.describe())

myCountry.checkIsland()

console.log(myCountry)


for (let i = 1; i <= 50; i++) {
    console.log(`Voter number ${i} is currently voting'`)
}

function percentageOfWorld(population) {
    const percentage = (population / worldPopulation) * 100
    return percentage;
}
const populations1 = ['3', '6', '9', '12']
let percentages2 = []
for (let rep = 0; rep < populations1.length; rep++) {

    percentages2[rep] = percentageOfWorld(populations1[rep])
}
console.log(percentages, percentages2)


let percentages3 = []
let j = 0
while (j < populations1.length) {
    percentages3[j] = percentageOfWorld(populations1[j])
    j++;
}
console.log(percentages, percentages3)

const listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];

for (let country of listOfNeighbours) {

    for (let i = 0; i < country.length; i++) {

        console.log(`Neighbour:${country[i]}`)
    }
}

// const listOfNeighbours = [
//     ['Canada', 'Mexico'],
//     ['Spain'],
//     ['Norway', 'Sweden', 'Russia'],
// ];
// for (let i = 0; i < listOfNeighbours.length; i++)
//     for (let y = 0; y < listOfNeighbours[i].length; y++)
//         console.log(`Neighbour: ${listOfNeighbours[i][y]}`);
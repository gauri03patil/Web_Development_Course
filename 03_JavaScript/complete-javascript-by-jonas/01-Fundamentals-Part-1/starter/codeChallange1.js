
let markMass = 78
let markweight = 1.69

let jhonMass = 92
let jhonWeight = 1.95

const markBMI = markMass / markweight ** 2
const jhonBMI = jhonMass / jhonWeight ** 2

console.log(markBMI, jhonBMI)
let markHeightBMI = markBMI > jhonBMI

console.log(markHeightBMI)


if (markBMI > jhonBMI) {
    console.log(`Mark's BMI ${markBMI} is higher than jhon BMI ${jhonBMI}`)
} else {
    console.log(`Jhon's BMI ${markBMI} is higher than jhon BMI ${markBMI}`)
}


//code challange 3

const scoreDolphins = (97 + 112 + 101) / 3  // 
const scoreKoalas = (109 + 95 + 123) / 3

console.log(scoreDolphins, scoreKoalas)
if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
    console.log("Dolphins Win The Trophy ")
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
    console.log("Koalas win the trophy")
} else if (scoreDolphins == scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
    console.log("Both win the trophy")
} else {
    console.log("No one will wins the trophy")
}


const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3




function checkWinner(avgDolhins, avgKoalas) {

    if (avgDolhins > avgKoalas * 2) {
        // My Mistake if (avgDolhins > avgKoalas && avgDolhins > avgKoalas * 2)
        console.log(` Dolhins win (${avgDolhins} vs ${avgKoalas})`)
    } else if (avgKoalas > avgDolhins * 2) {
        // My mistake else if (avgKoalas > avgDolhins && avgKoalas > avgDolhins * 2)
        console.log(` Koalas win (${avgKoalas} vs${avgDolhins})`)
    } else {
        console.log("No Team Win")
    }
}


let avgDolhins = calcAverage(44, 23, 71)
let avgKoalas = calcAverage(65, 54, 49)

console.log(avgDolhins, avgKoalas)
checkWinner(avgDolhins, avgKoalas)

avgDolhins = calcAverage(85, 54, 41)
avgKoalas = calcAverage(23, 34, 27)
console.log(avgDolhins, avgKoalas)
checkWinner(avgDolhins, avgKoalas)



function calcTip(bill) {
    const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20
    return tip;
}

console.log(calcTip(100))

const bills = new Array(125, 555, 44)

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]

console.log("All tips Value =", tips)

const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]
console.log(total)


const mark = {

    fullname: 'Mark Miller',
    mass: 78,
    Height: 1.69,

    calcBMI: function () {
        this.BMI = this.mass / this.Height ** 2;
        return this.BMI;
    }
};

const john = {
    fullname: 'John Smith',
    mass: 92,
    Height: 1.95,
    calcBMI: function () {
        this.BMI = this.mass / this.Height ** 2;
        return this.BMI;
    }
};

console.log(mark.calcBMI() > john.calcBMI() ? `${mark.fullname} BMI (${mark.BMI}) is higher than ${john.fullname}'s BMI(${john.BMI})!` :
    `${john.fullname} BMI (${john.BMI}) is higher than ${mark.fullname}'s BMI(${mark.BMI})!`)


const bills1 = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips1 = []
const totals = []

for (let i = 0; i < bills1.length; i++) {

    tips1.push(calcTip(bills1[i]))
    totals.push(tips1[i] + bills1[i])
}

console.log(bills1, tips1, totals)
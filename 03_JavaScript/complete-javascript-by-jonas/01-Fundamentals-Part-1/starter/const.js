
const PI = 3.24

console.log("PI value ", PI)



/*  PI = 12
    Above code will thrown an error as we cant change const variable value
 */

const cars = ["Toyato", "BMW", "Innova"]

cars[3] = "Thar"
cars.push = "Jeep"
cars[1] = "Audi"

console.log(cars)


const car = {
    "Brand": "Tata",
    "Model": "xyz",
    color: "white"
}

car.Brand = "Tata Brand"
car.color = "Grey"
console.log(car)
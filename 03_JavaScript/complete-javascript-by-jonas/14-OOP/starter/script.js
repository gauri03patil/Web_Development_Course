'use strict';


const Person = function (firstName, birthyear) {

    //console.log(this);
    this.firstName = firstName;
    this.birthyear = birthyear;
};





Person.prototype.calAge = function () {

    console.log(2037 - this.birthyear);
};

Person.prototype.natioanlity = "Indian";

console.log(Person);

const ap = new Person('akshay', 2000);
const ak = new Person('aks', 2001);

const as = new Person('patil', 1999);

console.log(ap, ak, as);

ap.calAge();
ak.calAge();

console.log(ap.hasOwnProperty('natioanlity'));
console.log(Person.hasOwnProperty('natioanlity'));
console.log(Person.prototype.hasOwnProperty('natioanlity'));




const Car = function (make, speed) {
    this.make = make;
    this.speed = speed;
};

Car.prototype.accelarate = function () {
    this.speed += 10;
    console.log(`${this.make} car running at ${this.speed} km/h`);
}

Car.prototype.break = function () {
    this.speed -= 5;
    console.log(`${this.make} car running at ${this.speed} km/h`);

}

const bmw = new Car('BMW', 120);
bmw.accelarate();
bmw.break()
bmw.accelarate();
bmw.accelarate();

const mer = new Car('Mercedes', 95);



class PersonCL {



    constructor(firstName, birthyear) {
        this.firstName = firstName;
        this.birthyear = birthyear;
    }
    // calAge() {
    //     this.age = 2023 - this.birthyear;
    // }

    // displayAge() {
    //     console.log(`The Current age is ${this.age}`)
    // }

    get age(){
        return 2037-this.birthyear;
    }

    set welcome(name){
        this.firstName="Welcome "+name
    }

    static help(){
        console.log(' I am helping ')
    }
}


const alepsh = new PersonCL('alpesh', 1998);

// alepsh.calAge();
// alepsh.displayAge();

alepsh.age;
alepsh.welcome='pqr';

console.log(alepsh)

PersonCL.help();


const objectTest={

    printIntro:function(){
        console.log(`My name is ${this.name} and I am a ${this.isHuman}`);
    }
};

const newObj=Object.create(objectTest);

console.log(newObj);

newObj.name="akshay";
newObj.isHuman=true;
newObj.printIntro();

const newObjCopy=Object.create(objectTest);

console.log(newObjCopy);

newObjCopy.name="Alex";
newObjCopy.isHuman=false;
newObjCopy.printIntro();


const CarCopy = function (make, speed) {
    this.make = make;
    this.speed = speed;
};

CarCopy.prototype.accelarate = function () {
    this.speed += 20;
    console.log(`${this.make} going at ${this.speed} km/h `);
}

CarCopy.prototype.break = function () {
    this.speed -= 5;
    console.log(`${this.make} going at ${this.speed} km/h `);

}


const Ev=function(make,speed,chargePer){
    CarCopy.call(this,make,speed);
    this.chargePer=chargePer;
}

//Link the Prototype
Ev.prototype=Object.create(CarCopy.prototype);


Ev.prototype.accelarate=function(){
    this.speed +=20;
    this.chargePer -=1;
    console.log(`${this.make} going at ${this.speed} km/h with charging ${this.chargePer}%`);
}


const test=new Ev('Tesla',120,90)

test.accelarate();
test.break();
test.accelarate();
test.accelarate();




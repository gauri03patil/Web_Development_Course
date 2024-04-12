
const Person = function (firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  };
  
  Person.prototype.calcAge = function () {
    console.log(2037 - this.birthYear);
  };
  
  const Student = function (firstName, birthYear, course) {
    Person.call(this, firstName, birthYear);
    this.course = course;
  };
  
  // Linking prototypes
  Student.prototype = Object.create(Person.prototype);
  
  Student.prototype.introduce = function () {
    console.log(`My name is ${this.firstName} and I study ${this.course}`);
  };
  
//   const mike = new Student('Mike', 2020, 'Computer Science');
//   mike.introduce();
//   mike.calcAge();


class PersonCl {
    constructor(fullName, birthYear) {
      this.fullName = fullName;
      this.birthYear = birthYear;
    }
  
    // Instance methods
    calcAge() {
      console.log(2037 - this.birthYear);
    }
  
    greet() {
      console.log(`Hey ${this.fullName}`);
    }
  
    get age() {
      return 2037 - this.birthYear;
    }
  
   
    // Static method
    static hey() {
      console.log('Hey there 👋');
    }
  }

class StudentCL extends PersonCl{

    constructor(fullName,birthYear,course){
        // Need to call first super function

        super(fullName,birthYear);
        this.course=course;
    }

    introduce(){
        console.log(`My name is ${this.fullName} and I study ${this.course} and Birthyear is ${this.birthYear}`);
    }

    calcAge(){
        console.log(`I am ${this.birthYear} born`);
    }
}

const st=new StudentCL('Akshay',2000,"computer");

st.introduce();
st.calcAge();




class accoutn{

    // 1) public field 

      local=navigator.language;


      getLocale(){

        console.log(`The locale is ${this.local}`)
      }

    // 2 private field  --> using #

    #movement=[];

    setMovement(val){
        this.#movement.push(val);
        console.log(this.#movement)
    }

    // 3 Private method

    #approveloan(loan){
        if(loan>100){
            console.log("Loan Approved")
            this.#movement.push(loan)
        console.log(this.#movement)

        }
    }

    reqLoan(loan){
        this.#approveloan(loan);
    }
}


const acc= new accoutn();

acc.getLocale();

acc.setMovement(100);

//console.log(acc.#movement); // will throw an error because its private field

acc.reqLoan(101);

//acc.#approveloan(109);// Will thrown an error because its private indetifies

class CarCL{
constructor (make, speed) {
    this.make = make;
    this.speed = speed;
};

accelarate () {
    this.speed += 20;
    console.log(`${this.make} going at ${this.speed} km/h `);
    return this; // it will return car obect so be can chain the methods
}
break () {
    this.speed -= 5;
    console.log(`${this.make} going at ${this.speed} km/h `);
    return this;

}
}

class EV extends CarCL{
    #charge;
constructor(make,speed,charge){
    super(make,speed);
    this.#charge=charge;
}

accelarate(){
    this.speed +=20;
    this.#charge -=1;
    console.log(`${this.make} going at ${this.speed} km/h with charging ${this.#charge}%`);
    return this;
}
chargeBattery(charge){
    this.#charge=charge;
    return this;
}

}


const ele=new EV('Rivian',120,23);

console.log(ele);

ele.accelarate().accelarate().accelarate().break().chargeBattery(50).accelarate();
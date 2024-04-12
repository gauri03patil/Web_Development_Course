'use strict';

const dogsJulie = [3, 5, 2, 12, 7];
const dogsKate = [4, 1, 15, 8, 3];

const checkDogs = function (dogsjulie, dogskate) {
  //   //slice use to create shallow copy
  //   const shallowCopy = dogsjulie.slice();
  //   shallowCopy.splice(0, 1);
  //   console.log(shallowCopy);
  //   shallowCopy.splice(-2);
  //   console.log(shallowCopy);

  let dogsJulieCopy = dogsjulie.slice(1, 3);
  console.log(dogsJulieCopy);
  console.log(dogskate);

  const displayDogsAge = function (dogs) {
    dogs.forEach(function (element, i) {
      const type = element >= 3 ? 'adult' : 'puppy';
      console.log(
        ` Dog number ${i} is an ${type}, and is ${element} years old`
      );
    });
  };
  displayDogsAge(dogsJulieCopy);
  displayDogsAge(dogsKate);
};

checkDogs(dogsJulie, dogsKate);

let dogsJulieCopy = dogsJulie.slice(1, 3);
const dogs = [...dogsJulieCopy, ...dogsKate];
console.log(dogs);

const calcAverageHumanAge = function (allDogs) {
  console.log(allDogs);

  const humenAge = allDogs.map(function (dogs) {
    return dogs > 2 ? 16 + dogs * 4 : dogs * 2;
  });

  console.log(humenAge);

  const adultDog = humenAge.filter(function (age) {
    return age >= 18;
  });
  console.log(adultDog);

  const averageAge = adultDog.reduce(function (acc, currentValue) {
    return acc + currentValue;
  }, 0);

  console.log(averageAge);

  console.log(averageAge / adultDog.length);
};

calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);

// Calculate dog age

const fruits = ["Apple", "Orange", "Apple", "Mango"];
const array = [1, 2, 3, 4, 5];

//indexof -- return index value  else return -1
console.log(fruits.indexOf("Apple"));
console.log(array.indexOf(3));

//wrong value -1 index
console.log(array.indexOf(9));

//?last index of  - return index value  else return -1
console.log(fruits.lastIndexOf("Apple"));
console.log(fruits.lastIndexOf("Apples"));

//? include  -- return true or false
console.log(array.includes(1));
console.log(array.includes(8));

// Find(): find(): This method returns the value of the first element in the array that satisfies the provided testing function. Otherwise, it returns undefined.

let findValue = fruits.find((element) => element == "Apple");
console.log(findValue);

let f2 = array.find((element) => element > 3);
console.log(f2);

//findIndex -- it return the index value
console.log(fruits.findIndex((element) => element == "Apple"));
console.log([4, 8, 1, 80, 6].findIndex((element) => element >= 70));

//findlast   start ssearch from backward <--
console.log(fruits.findLast((element) => element == "Apple"));
console.log(fruits.findLastIndex((element) => element == "Apple"));

// Arrow functions

const fruits = ["Apples", "Oranges", "Grapes"];

//FOR EACH
fruits.forEach((fruit, index) => console.log(fruit));

//MAP

const singleFruit = fruits.map(fruit => fruit.slice(0, -1));

console.log(singleFruit);

//FILTER

const people = [
  { id: 1, name: "Karen" },
  { id: 2, name: "Bob" },
  { id: 1, name: "Sharon" }
];

const people2 = people.filter(person => person.id != 2);
console.log(people2);

//Spread Operator

const arr = [1, 2, 3];

const arr2 = [...arr, 4];

const arr3 = [...arr.filter(num => num !== 2)];

//Destructuring

const profile = {
  name: "John Doe",
  address: {
    street: "40, main street",
    city: "Boston"
  },
  hobbies: ["movies", "music"]
};

const { name, address, hobbies } = profile;

const { street, city } = profile.address;

console.log(name);

//CLASSES

class Person {
  constructor(name) {
    // console.log("ran");
    this.name = name;
  }
}

const person1 = new Person("sara");

console.log(person1.name);

//SUBCLASS

class Customer extends Person {
  constructor(name, age, balance) {
    super(name, age);
    this.balance = balance;
  }
}

const customer1 = new Customer("kevin", 32, 300);

console.log(customer1.name);

// MODULES

// file 1 (file1.js)
export const name = "jeff";
export const nums = [1, 2, 3];

export default Person;

// file 2 (file2.js)

import { name } from "./file1.js";
import Person from "./file1.js";

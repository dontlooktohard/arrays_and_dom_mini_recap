const data = [
  {
    id: 1,
    name: "John Doe",
    age: 30,
    address: {
      street: "123 Main St",
      city: "New York",
      state: "NY",
      zip: 10001
    },
    hobbies: ["reading", "running", "gaming"],
    friends: [
      {
        id: 2,
        name: "Jane Smith",
        age: 25
      },
      {
        id: 3,
        name: "Bob Johnson",
        age: 35
      }
    ]
  },
  {
    id: 2,
    name: "Jane Smith",
    age: 25,
    address: {
      street: "456 Park Ave",
      city: "Los Angeles",
      state: "CA",
      zip: 90001
    },
    hobbies: ["hiking", "cooking", "traveling"],
    friends: [
      {
        id: 1,
        name: "John Doe",
        age: 30
      },
      {
        id: 4,
        name: "Samantha Brown",
        age: 28
      }
    ]
  },
  {
    id: 3,
    name: "Bob Johnson",
    age: 35,
    address: {
      street: "789 Elm St",
      city: "Chicago",
      state: "IL",
      zip: 60001
    },
    hobbies: ["fishing", "golfing", "watching TV"],
    friends: [
      {
        id: 1,
        name: "John Doe",
        age: 30
      },
      {
        id: 5,
        name: "Emily Davis",
        age: 32
      }
    ]
  }
];

// FILTER

// Exercise 1: Use the filter method to get all the friends of John Doe
const getName = data.filter((person) => {
  return (person.name === 'John Doe');
})[0];
console.log(getName.friends);
// Exercise 2: Use the filter method to get all the people who live in New York
const getNewYork = data.filter((person) => {
  let info = person.address.city === "New York"
if (info === true) {
  return person.name
}
})
console.log(getNewYork);
// Exercise 3: Use the filter method to get all the people who are older than 30
const getOld = data.filter((person) => {
  let info = person.age > 30
if (info === true) {
  return person.name
}
})
console.log(getOld);

// MAP

// Exercise 1: Use the map method to put the names of all the friends of John Doe in a single array (use also the flat method)
const getJohnDoe = data.flatMap((person) => {
  let info = person.name === "John Doe"
  if (info === true) {
    return person.friends
  }
})
console.log(getJohnDoe);
// Exercise 2: Use the map method to get the full addresses (street, city, state, and zip) of all the people in the data array
const getAll = data.map((person) => {
return person.address
})
console.log(getAll);
// Exercise 3: Use the map method to get the hobbies of all the people in the data array in a single array
const getAll2 = data.flatMap((person) => {
  return person.hobbies
  })
  console.log(getAll2);

// FIND

// Exercise 1: Use the find method to find the first person who lives in Chicago
const getChicago = data.find((person)=>{
 return person.address.city === "Chicago"
})
console.log(getChicago);
// Exercise 2: Use the find method to find the first person who is older than 30
const getOld2 = data.find((person)=>{
  return person.age > 30
 })
 console.log(getOld2);
// Exercise 3: Use the find method to find the first person who has "reading" as a hobby
const getReading = data.find((person)=>{
  return person.hobbies.includes("reading")
 })
 console.log(getReading);

// FOREACH

// Exercise 1: Use the forEach method to print out the names of all the people in the data array

// Exercise 2: Use the forEach method to add a new property "isAdult" to each person object and set it to true if the person is over 18 and false if not

// Exercise 3: Use the forEach method to print out the names of all the friends of each person


// SOME

// Exercise 1: Use the some method to check if any of the people in the data array have "cooking" as a hobby

// Exercise 2: Use the some method to check if any of the people in the data array live in California

// Exercise 3: Use the some method to check if any of the friends of each person in the data array are older than 30


// EVERY

// Exercise 1: Use the every method to check if all the people in the data array have "reading" as a hobby

// Exercise 2: Use the every method to check if all the people in the data array live in the same state

// Exercise 3: Use the every method to check if all the friends of each person in the data array are older than 25


// REDUCE

// Exercise 1: Use the reduce method to get the total age of all the people in the data array

// Exercise 2: Use the reduce method to get the number of people who live in each state

// Exercise 3: Use the reduce method to get the average age of all the people in the data array


// INCLUDES

// Exercise 1: Use the includes method to check if the hobbies of John Doe include "gaming"

// Exercise 2: Use the includes method to check if the friends of Jane Smith include someone with the id of 4

// Exercise 3: Use the includes method to check if the data array includes a person with the name "Emily Davis"

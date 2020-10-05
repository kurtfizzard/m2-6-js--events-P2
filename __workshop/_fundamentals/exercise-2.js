// We often deal with "arrays of objects";
// below is an example of an array of objects, where each object represents a person:

const people = [
  { name: { first: "Alyssa", middle: "P.", last: "Hacker" }, age: 26 },
  { name: { first: "Ben", last: "Bitdiddle" }, age: 34 },
  { name: { first: "Eva", middle: "Lu", last: "Ator" }, age: 40 },
  { name: { first: "Lem", middle: "E.", last: "Tweakit" }, age: 45 },
  { name: { first: "Louis", last: "Reasoner" }, age: 21 },
  { name: { first: "Shahan", middle: "Haig", last: "Krakirian" }, age: 21 },
];

//-------------------------------------------------

// Exercise 2
// ------------
//
// 1. Write a function accepts an array and returns
// the average age of the `people` in that array (rounded to the nearest unit.)
// Use Math.round()

function avgAge(peopleArr) {
  // create a variable for the age total
  let total = 0;
  // create a variable for the number of people
  let humans = 0;
  // loop over the array and carry out a function on each element
  peopleArr.forEach((person) => {
    // add each person's age to the total
    total += person["age"];
    // count that person towards humans
    humans += 1;
  });
  // let the average equal total divided by humans rounded to the nearest integer
  let average = Math.round(total / humans);
  // return the average
  return average;
}

// 2. Do a console.log to verify your function.

// 3. Run the test to validate: yarn test exercise-2

module.exports = { avgAge, people };

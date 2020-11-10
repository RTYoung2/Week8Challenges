// const months = [
//   `January`,
//   `February`,
//   `March`,
//   `April`,
//   `May`,
//   `June`,
//   `July`,
//   `August`,
//   `Semptember`,
//   `October`,
//   `November`,
//   `December`,
// ];

const january = `January`;
const february = `February`;
const march = `March`;
const april = `April`;
const may = `May`;
const june = `June`;
const july = `July`;
const august = `August`;
const september = "September";
const october = `October`;
const november = `November`;
const december = `December`;

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const userInput = prompt(`Enter numbers 1-12 to display month`);
console.log(userInput);

const inputToNumber = Number(userInput); //- 1);
// if (inputToNumber > 12 || inputToNumber < 1) {
//   alert(`you messed up`);
// } else {
//   console.log(inputToNumber);
//   console.log(months[inputToNumber]--1);
// }

if (userInput > 12 || userInput < 1) {
  console.log(`you messed up >.> try again!`);
} else if (inputToNumber === 1) {
  console.log(january);
} else if (inputToNumber === 2) {
  console.log(february);
} else if (inputToNumber === 3) {
  console.log(march);
} else if (inputToNumber === 4) {
  console.log(april);
} else if (inputToNumber === 5) {
  console.log(may);
} else if (inputToNumber === 6) {
  console.log(june);
} else if (inputToNumber === 7) {
  console.log(july);
} else if (inputToNumber === 8) {
  console.log(august);
} else if (inputToNumber === 9) {
  console.log(september);
} else if (inputToNumber === 10) {
  console.log(october);
} else if (inputToNumber === 11) {
  console.log(november);
} else if (inputToNumber === 12) {
  console.log(december);
}

// console.log(typeof userInput);
// switch (userInput) {
//   case `1`:
//     console.log(january);
//     break;

//   case `2`
//   console.log
// }

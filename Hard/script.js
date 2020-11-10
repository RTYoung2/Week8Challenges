// const bmiEquation = (mass / (height * height));

const tomWeight = 8;
const tomHeight = 9;
const tomBMI = tomWeight / (tomHeight * tomHeight);

const jerryWeight = 10;
const jerryHeight = 45;
const jerryBMI = jerryWeight / (jerryHeight * jerryHeight);

//we could also create a function with this equation

// function BMI(height, mass) {
//   return mass / (height * height);
// }

console.log(jerryHeight);
console.log(jerryBMI);
console.log(tomBMI);
console.log(jerryBMI > tomBMI);

if (jerryBMI > tomBMI) {
  //   console.log(jerryBMI > tomBMI);
  console.log(
    `This is true,${jerryBMI > tomBMI} Jerr'ys BMI is higher than Jerry's by ${
      jerryBMI - tomBMI
    }`
  );
  console.log;
} else tomBMI > jerryBMI;
// console.log(tomBMI > jerryBMI);
console.log(
  `This is ${tomBMI > jerryBMI}, Toms's BMI is higher than Jerry's by ${
    tomBMI - jerryBMI
  }`
);

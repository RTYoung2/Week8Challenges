function min(argument1, argument2) {
  if (argument1 > argument2) {
    return argument2;
  } else if (argument1 < argument2) {
    return argument1;
  } else argument1 === argument2;
  return `There is no minimum `;
}

console.log(min(11, 25));

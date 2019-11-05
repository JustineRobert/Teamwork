const removeCandy = (Gumballs, Caramels) => {
  const bin = { Gumballs: 510, Caramels: 4 };
  const arrayOperation = Object.values(bin);
  const removeCaramel = arrayOperation[0] - 20;
  return removeCaramel;
};

const addCandy = (Gumballs, Caramels) => {
  const bin = { Gumballs: 510, Caramels: 4 };
  const arrayOperation = Object.values(bin);
  const addCandy = arrayOperation[1] + 600;
  return addCandy;
};

const removeOneCandyType = (Gumballs, Caramels) => {
  const bin = { Gumballs: 510, Caramels: 604 };
  const arrayOperation = Object.values(bin);
  const removeCaramel = arrayOperation[0] - 20;
  return removeCaramel;
};

console.log(removeCandy());
console.log(addCandy());
console.log(removeOneCandyType());

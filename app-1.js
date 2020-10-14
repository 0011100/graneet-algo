const roundCurrency = (number) => Math.round(number * 100) / 100;


const splitAmount = (amount, currencyValues) => {
  const { remaining, count } = currencyValues.reduce(
    (memory, value) => {
      //console.log(memory.remaining);
      const count = Math.floor(memory.remaining / value);
      if (count >= 1) {
        memory.count += count;
        memory.remaining = roundCurrency(memory.remaining - count * value);
      }
      return memory;
    },
    {
      remaining: amount,
      count: 0
    }
  );
  return remaining < Number.EPSILON ? count : -1;
};

console.log("---------");
console.log(
  splitAmount(626.53, [
    500,
    200,
    100,
    50,
    20,
    10,
    5,
    2,
    1,
    0.5,
    0.2,
    0.1,
    0.05,
    0.02,
    0.01
  ])
);
console.log(splitAmount(626.5, [500, 200, 100, 50, 20, 10, 5]));

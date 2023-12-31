const numbers = [10, 6, 8, 19, 18, 20];

const numbersDouble = numbers.map(double);

function double(element, index, array) {
  console.log("ORIGINAL : ", numbers);
  console.log("NOVO ARRAY : ", numbersDouble);
}

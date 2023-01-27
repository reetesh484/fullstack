// 30. Create a simple calculator program in JavaScript which can perform the addition, substraction, multiplication and division on given numbers.

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return Math.abs(a - b);
}

function multiplication(a, b) {
  return a * b;
}

function division(a, b) {
  return a / b;
}

console.log(add(4, 5));
console.log(subtract(6, 10));
console.log(multiplication(5, 10));
console.log(division(200, 4));

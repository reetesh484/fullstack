// 23. Write a program to check that the number given by the user is a prime number or not.

let num = prompt("Enter a number:");
let i;
for (i = 2; i < num; i++) {
  if (num % i == 0) break;
}
if (i === num) console.log("It is a Prime Number.");
else console.log("It is not a Prime Number.");

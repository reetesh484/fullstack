// 27. Write a program to print all the prime number between 0 to 100 (0 and 100 included).

function isPrime(n) {
  let i;
  for (i = 2; i < n; i++) {
    if (n % i == 0) break;
  }
  if (i == n) return 1;
  else return 0;
}

for (let i = 1; i <= 100; i++) {
  if (isPrime(i)) console.log(i);
}

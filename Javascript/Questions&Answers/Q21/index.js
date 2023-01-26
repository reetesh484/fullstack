// 21. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.

const countries = [
  "India",
  "Japan",
  "Singapore",
  "China",
  "USA",
  "Russia",
  "Germany",
  "Sri Lanka",
  "Nepal",
  "Afghanistan",
  "Egypt",
];

if (!countries.includes("Ethiopia")) {
  countries.push("Ethiopia");
  console.log("Ethiopia added!");
} else {
  console.log("Already exists");
}

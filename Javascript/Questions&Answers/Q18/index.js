// 18. Write a program which tells the number of days in a month, now consider leap year.

let month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let query = prompt("Enter the month:");
let i = month.indexOf(query);

if (i == 0 || i == 2 || i == 4 || i == 6 || i == 7 || i == 9 || i == 11) {
  alert("31 days");
  console.log("31 days");
} else if (i == 3 || i == 5 || i == 8 || i == 10) {
  alert("30 days");
  console.log("30 days");
} else {
  alert("28/29 days");
  console.log("28/29 days");
}

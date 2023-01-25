// 11. Use the Date object to do the following activities
//     - What is the year today?
//     - What is the month today as a number?
//     - What is the date today?
//     - What is the day today as a number?
//     - What is the hours now?
//     - What is the minutes now?
//     - Find out the numbers of seconds elapsed from January 1, 1970 to now.

let date = new Date();
console.log(date);
let day, month, hours, seconds, minutes;
let year = date.getFullYear();
month = date.getMonth();
numDate = date.getDate();
day = date.getDay();
hours = date.getHours();
minutes = date.getMinutes();
seconds = Date.now() / 1000;

console.log("Year:", year);
console.log("Month:", month);
console.log("Date:", numDate);
console.log("Day:", day);
console.log("Hours:", hours);
console.log("Minutes:", minutes);
console.log("Total seconds elapsed:", seconds);

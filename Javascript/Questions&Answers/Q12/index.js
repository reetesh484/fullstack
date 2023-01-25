// 12. Create a human readable time format using the Date time object
//     - YYYY-MM-DD HH:mm
//     - DD-MM-YYYY HH:mm
//     - DD/MM/YYYY HH:mm

let currDate = new Date();

let year = currDate.getFullYear();
let month = currDate.getMonth();
let day = currDate.getDate();
let hour = currDate.getHours();
let minutes = currDate.getMinutes();

let format1 = `${year}-${month}-${day} ${hour}:${minutes}`;
let format2 = `${day}-${month}-${year} ${hour}:${minutes}`;
let format3 = `${day}/${month}/${year} ${hour}:${minutes}`;

console.log(format1);
console.log(format2);
console.log(format3);

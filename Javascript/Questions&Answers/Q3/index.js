let fname;
fname = "reetesh";
console.log("Before converting:", fname);

//to change the characters individually we will need an another string because
//strings in javascript are immutable

let upperCaseName = "";
for (let i = 0; i < fname.length; i++) {
  upperCaseName += fname[i].toUpperCase();
}

//now we can either use the new string variable or just update the old one
fname = upperCaseName;

//Alternate way to update all characters to uppercase at once.
// fname = fname.toLocaleUpperCase();
console.log("After converting:", fname);

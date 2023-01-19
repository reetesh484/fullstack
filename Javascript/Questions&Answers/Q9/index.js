//  09. Boolean value is either true or false.
// - Write three JavaScript statement example which provide truthy value.
// - Write three JavaScript statement example which provide falsy value.

let fullName = "Reetesh Tiwari";

//Truthy value
console.log(fullName.includes("Tiwari"));
console.log(typeof fullName === "string");
console.log(fullName.startsWith("Reetesh"));

//Falsy value
console.log(fullName.includes("Kumar"));
console.log(typeof fullName === "boolean");
console.log(fullName.startsWith("Tiwari"));

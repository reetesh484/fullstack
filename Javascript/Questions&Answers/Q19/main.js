// 19. Create a countries.js file and store the countries name into this file, create a file web_techs.js and store the popular web technology names into this file. Access both file in a third file named main.js

const countries = require("./countries");
const webTech = require("./web_techs");

console.log(countries);
console.log(webTech);
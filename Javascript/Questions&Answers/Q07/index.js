// 07. Declare an array containing the multiple values and use lastIndexOf to determine the position of the first and last occurrence of a word "pw skills".

let newArray = [
  "ineuron",
  "reetesh",
  "pw skills",
  "learncodeonline",
  "tiwari",
  "pw skills",
];

let searchWord = "pw skills";

let first = newArray.indexOf(searchWord);
let last = newArray.lastIndexOf(searchWord);

if (first !== -1)
  console.log("First occurence:", first + 1, "Last occurence:", last + 1);
else console.log("Word not found");

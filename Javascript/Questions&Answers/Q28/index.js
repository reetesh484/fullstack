// 28. Write a program to print the given patterns using the loops-
// 	a. Print a triangle pattern, if the given input is 3 then the pattern should be similar to the given output
// 	   *
// 	   **
// 	   ***

// 	b. Print a square pattern, if the input is 3 then the output should be similar to the given output
// 	   ***
// 	   ***
// 	   ***

// 	c. Print a pyramid pattern, if the input is 3 then the output should be similar to the given output
// 	     *
// 	    ***
//  	   *****

function pattern1() {
  let pattern = "";
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j <= i; j++) {
      pattern += "*";
    }
    console.log(pattern);
    pattern = "";
  }
}

function pattern2() {
  let pattern = "";
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      pattern += "*";
    }
    console.log(pattern);
    pattern = "";
  }
}

function pattern3() {
  let pattern = "",
    sp = 2;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j <= sp; j++) {
      pattern += " ";
    }
    sp--;
    for (let j = 0; j <= i; j++) {
      pattern += "* ";
    }
    console.log(pattern);
    pattern = "";
  }
}

console.log("pattern 1");
pattern1();
console.log("pattern 2");
pattern2();
console.log("pattern3");
pattern3();

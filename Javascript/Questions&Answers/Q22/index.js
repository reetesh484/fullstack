// 22. The following is an array of 10 students ages:
//     => const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
//     - Sort the array and find the min and max age
//     - Find the median age(one middle item or two middle items divided by two)
//     - Find the average age(all items divided by number of items)
//     - Find the range of the ages(max minus min)
//     - Compare the value of (min - average) and (max - average), use abs() method

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

ages.sort();
let len = ages.length;
console.log("Before Sorting:", ages);
console.log("After Sorting:", ages);
console.log("Minimum age:", ages[0]);
console.log("Maximum age:", ages[len - 1]);

if (len % 2 != 0) {
  console.log("Median:", ages[len / 2 - 1]);
} else {
  console.log("Median:", ages[len / 2 - 1], ages[len / 2]);
}

let sum = ages.reduce((prev, curr) => {
  return prev + curr;
}, 0);
console.log("Average:", sum / len);

let range = Math.max(...ages) - Math.min(...ages);
console.log("Range:", range);

minAvg = Math.abs(sum / len - Math.min(...ages));
maxAvg = Math.abs(sum / len - Math.max(...ages));
console.log("Min - Avg:", minAvg);
console.log("Max - Avg:", maxAvg);

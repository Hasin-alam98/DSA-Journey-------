const express = require("express");

const app = express();

let array = [1, 3, 4, 5, 7, 8, 11];
let target = 10;
let left = 0;
let right = array.length - 1;
let current = 0;
let result = [];

while (right > left) {
  current = array[right] + array[left];


  if (target == current) {
    result = [array[right], array[left]];
    break;
  } else if (target < current) {
    right--;
  } else {
    left++;
  }
}
console.log(result);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

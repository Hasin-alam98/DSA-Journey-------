const express = require("express");

const app = express();

const arr = [1, 2, 3, 2, 1];
let left = 0;
let right = arr.length - 1;
let flag = true;
while (left < right) {
  if (arr[left] !== arr[right]) {
    flag = false;
    break;
  }
  left++;
  right--;
}
flag ? console.log("it is  paradin") : console.log("it is not");

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

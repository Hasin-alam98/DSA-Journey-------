const express = require("express");

const app = express();

let array = [10, 20, 30, 40, 50];

let left = 0;
let right = array.length - 1;
let temp = 0;
while (left < right) {
  temp = array[left];

  array[left] = array[right];
  array[right] = temp;

  left++;
  right--;
}
console.log(array);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

const express = require("express");

const app = express();
app.set("view engine", "ejs");
app.get("/", (req, res) => {
  res.render("index");
  console.log("");
});

let arr = [4, 2, 1, 7, 5, 8, 3, 6]; // new array
let k = 4; // size of the window
let current =0
for (let i = 0; i < k; i++) {
     current = current + arr[i];
    
}
console.log("first current:"+ current);

let max = current;
let n = arr.length - k
for (let i = 0; i < n; i++) {
     current = current-arr[i]+arr[i+k-1];
    if(current>max){
        max = current;
    }
    
}
console.log("max " + max);


app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

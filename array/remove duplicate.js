const express = require("express");

const app = express();

let array= [1, 1, 2, 2, 3, 3, 4, 4, 5, 5];

let x = 0;
let newLength =1;
for (let i = 1; i < array.length; i++) {
    
 if(array[x] !==array[i]){
    x =x+1;
    array[x] = array [i];
    newLength++;
    // console.log(array);
    
 }
    
}
array = array.slice(0,newLength)


console.log(array);



app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
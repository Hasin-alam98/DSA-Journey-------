nums = [3, 5, 2, 1, 6, 8, 4, 9, 7, 2]; //11 , 14 ,17 ,19,27,28,22
k = 4;
let currentSum = 0;
let max = 0;

for (let i = 0; i < 4; i++) {
  currentSum = currentSum + nums[i];
}
max = currentSum;
// console.log(currentSum);

let n = nums.length - k;
for (let i = 0; i < n; i++) {
  currentSum = currentSum - nums[i] + nums[i + k];
  console.log(currentSum);

  if (max < currentSum) {
    max = currentSum;
  }
}
console.log(max);

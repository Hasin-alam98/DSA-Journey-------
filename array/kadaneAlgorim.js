nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

let currsum = 0;
let maxsum = nums[0];

for (let i = 0; i < nums.length; i++) {
  currsum = currsum + nums[i];

  if (currsum > maxsum) {
    maxsum = currsum;
  }
  if (currsum < 0) {
    currsum = 0;
  }
}
console.log(maxsum);

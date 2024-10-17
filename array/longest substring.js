let str = "abcabcbb";
let left = 0;
let right = 0;
let unique = new Set();
let max_len = 0;

while (right < str.length) {
  if (!unique.has(str[right])) {
    unique.add(str[right]);
    right++;
    max_len = Math.max(max_len, unique.size);
  } else {
    unique.delete(str[left]);
    left++;

  }
}
console.log(max_len);

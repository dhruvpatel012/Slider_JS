//  6 find the sum of elements whose occurance is 2

let arr = [1, 1, 3, 4, 5, 5, 6, 7, 8, 8];

let obj = {};

for (let i = 0; i <= arr.length - 1; i++) {
  if (obj[arr[i]] == undefined) {
    obj[arr[i]] = 1;
  } else {
    obj[arr[i]]++;
  }
}
let sum = 0;
for (let key in obj) {
  if (obj[key] == 2) {
    sum = sum + Number(key);
  }
}

console.log("The sum is", sum);
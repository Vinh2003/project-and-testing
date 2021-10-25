let input = 10;
let dem = 0;

for (let i = 0; i <= input; i += 1) {
  if (i % 2 !== 0) {
    dem += 1;
  }
}

console.log(dem);

let input = 100;
let tong = 0;
let tich = 1;
// let tong = (input * (input + 1)) / 2;

for (let i = 1; i <= input; i += 1) {
  tong = tong + i;
  tich = tich * i;
}

console.log("tong", tong);
console.log("tich", tich);


let input = 20;
let dem = 0;
for (let i = 1; i <= input / 2; i++) {
  if (input % i === 0) {
    dem += 1;
  }
}

console.log(dem + 1);
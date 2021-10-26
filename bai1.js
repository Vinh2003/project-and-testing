let arr=[prompt("nhập vào chuỗi)]
let dapan = "";
for (let i = arr[0].length - 1; i >= 0; i--) {
    dapan = dapan + arr[0][i];
}
console.log(dapan);

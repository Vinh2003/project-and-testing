let a =prompt("this is test")
a = a.toLowerCase();

let arr = a.split(" ");
let result ="";
for (let i = 0; i < arr.length; i = i+1){
    let first_letter = arr[i][0].toUpperCase();
    result = result + first_letter
for (let j = 1; J < arr[i].length; j = j+1){
     result = result + arr[i][j];
    }
for (let t =1; t < arr[i][j].length; t= t+1){
    result= result + arr[i][j][t];
}
}

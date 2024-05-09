let arr1 = [1, 2, 3]
let arr2 = [4, 5, 6]
let arr3 = arr1;
let arr4 = arr1.map( (a) => a) ;
let arr5 = [...arr1]

arr5[0] = 200;
console.log(arr1);
console.log(arr5);

let arr6 = [...arr1, ...arr2];
console.log(arr6);
let arr7 = [arr1, ...arr2];
console.log(arr7);
console.log(arr7[0][0]);


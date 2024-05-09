//commonjs 모듈 node.js 사용하는 방식
//1. myarray 모듈을 import
const totalPoint = require("./myarray");

//2. 함수실행
let result = totalPoint();
console.log(result);
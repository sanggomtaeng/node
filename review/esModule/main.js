//1. 모듈전체 import -> as 객체 이름지정
//import * as md from "./module.js";
//md.module();
//md.modulea();

//2. 필요한 것만
// import { module } from "./module.js";
// module("module run");

//import { movie } from "../promise_await.js";

//esModule
import { totalPoint } from "./myarray.js";
let result = totalPoint();
console.log(result);



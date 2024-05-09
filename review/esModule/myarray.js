let emps = [ { name:'park', age:20, point:100 },
         { name:'choi', age:26, point:200 },
         { name:'kim', age:10, point:150 }
 ]

 function totalPoint() {
    let total = 0;
    let totalPoint = emps.reduce((a,b) => a + b.point, total);
    return totalPoint;
 }

 //totalPoint 함수만 노출
 export { totalPoint };
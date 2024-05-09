const array1 = [1, 2, 3, 4];

const initialValue = 100;
const sumWithInitial = array1.reduce(
    (accumulator, currentValue) => accumulator + currentValue, 
    //(accumulator, currentValue) => { return accumulator + currentValue },
    //function(accumulator, currentValue){ return accumulator + currentValue },
    initialValue
);

console.log(sumWithInitial);

emps = [ { name:'park', age:20, point:100 },
         { name:'choi', age:26, point:200 },
         { name:'kim', age:10, point:150 }
 ]

 let basePoint = 1000;
 const totalPoint = emps.reduce( (a,b) => a + b.point, basePoint);
 console.log(totalPoint);
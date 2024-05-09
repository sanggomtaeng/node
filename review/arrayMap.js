let arr = [1, 4, 9];
let arr2 = arr.map((a) => a*2);

emps = [ { name:'park', age:20 },
         { name:'choi', age:26 },
         { name:'kim', age:10 }
 ]

 let emps2 = emps.map(a => { if(a.age >= 20){a.auth=true} else{a.auth=false} return a });
 console.log(emps2);

 emps = [ { name:'park', age:20, auth:true },
         { name:'choi', age:26, auth:true  },
         { name:'kim', age:10, auth:false  }
 ]
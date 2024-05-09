function hap(first, ...rest) {
    let total = first;
    for(value of rest) {
        total = total + value;
    }
    return total;
    //return rest.reduce( (total, value) => total+value, first)
}

console.log(hap(10, 20, 30, 40));

emps = [ { name:'park', age:20, point:100 },
         { name:'choi', age:26, point:200 },
         { name:'kim', age:10, point:150 }
 ]

 let[emp1, emp2, emp3] = emps;
 console.log(emp1.name);

 //object 분해
 const {name, age} = emp1;
 console.log(name);

 const {empname} = { empname:'park', age:20, point:100 };
 //obj.empname => empname

 const [a,b,...c] = [1,2,3];
 //arr[0] => a
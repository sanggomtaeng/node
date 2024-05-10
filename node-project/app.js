const express = require("express"); 
const pool = require("./mysql");
const app = express(); 
const port = 3000; 


app.use(express.urlencoded({ extended: false })); 
app.use(express.json()) 

app.get("/", (req, res) => { 
  res.send("hello world! sadfsdfsd"); 
}); 

//전체조회 : path variable => GET, req.params
app.get("/customer", (req, res) => { 
    // 2. SQL 실행 
    sql = "SELECT * FROM customer"; 
    pool.query(sql, function (err, results, fields) { 
    if (err) {     
    console.log(err);    
    } 
    // 3. 결과 처리 
    console.log(results); 
    res.send(results);
    }); 
   
    //res.send({cmd:"고객정보조회", no});
  }); 

//단건조회 : path variable => GET, req.params
app.get("/customer/:id", (req, res) => { 
    const id = req.params.id;
    sql = "SELECT * FROM customer where id=" + id; 
    pool.query(sql, function (err, results, fields) { 
        if (err) {     
        console.log(err);    
        } 
        // 3. 결과 처리 
        console.log(results); 
        res.send(results);
    }); 
    
  }); 

//등록 POST, req.body
app.post("/customer", (req,res)=>{
    //const id = req.body.id; 
    const name = req.body.name; 
    const email = req.body.email; 
    const phone = req.body.phone; 
    const address = req.body.address; 
    sql = `insert into customer set name='${name}', email='${email}', phone='${phone}', address='${address}'`;
    pool.query(sql, function (err, results, fields) { 
        if (err) {     
        console.log(err);    
        } 
        // 3. 결과 처리 
        console.log(results); 
        res.send(results);
    }); 
  
})

//수정 PUT, json = req.body
app.put("/customer/:id", (req,res)=>{
    const id = req.params.id; 
    const name = req.body.name; 
    const email = req.body.email; 
    const phone = req.body.phone; 
    const address = req.body.address; 
    sql = `update customer set name='${name}', email='${email}', phone='${phone}', address='${address}' where id=${id}`;
    pool.query(sql, function (err, results, fields) { 
        if (err) {     
        console.log(err);    
        } 
        // 3. 결과 처리 
        console.log(results); 
        res.send(results);
    }); 

})

//삭제 DELETE
app.delete("/customer/:id", (req,res)=>{
    const id = req.params.id; 
    sql = `delete from customer where id=${id}`;
    pool.query(sql, function (err, results, fields) { 
        if (err) {     
        console.log(err);    
        } 
        // 3. 결과 처리 
        console.log(results); 
        res.send(results);
    }); 
})



 
app.listen(port, () => { 
  console.log(`server runing http://localhost:${port}`); 
});
// mysql연결 및 쿼리 실행 테스트

const mysql = require("mysql2");

//mysql 접속 정보
const conn = {  host: "127.0.0.1",
                port: "3306",
                user: "hr",
                password: "hr",
                database: "test",
                connectionLimit:10,
};

 
// DB 커넥션 생성 

let pool = mysql.createPool(conn);

module.exports = pool;

//console.log(connection);


/*
// 2. SQL 실행 
sql = "SELECT * FROM customer"; 
connection.query(sql, function (err, results, fields) { 
if (err) {     
console.log(err);    
} 
// 3. 결과 처리 
console.log(results); 

}); 
*/
// DB 접속 종료(비동기이지만 SQL이 모두 실행되면 종료) 
//connection.end(); 


//let connection = mysql.createConnection(conn);  
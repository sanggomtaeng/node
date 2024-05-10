// const mysql = require("mysql2");

// const conn = {
//     host: "localhost", 
//     port: "3306",
//     user: "hr",
//     password: "hr",
//     database: "test",
//     connectionLimit: 10,
//   };

// let pool = mysql.createPool(conn);

// const query = async (sql, values) => {
//     return new Promise((resolve, reject) =>
//       pool.query(sql, values, (error, results) => {
//         if (error) {
//           console.log(error);
//           reject({ error });
//         } else {
//           resolve(results);
//         }
//       })
//     );
//   };
  
// module.exports = query;
  
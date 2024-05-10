const {pool} = require("./index");

function deleteCustomer() {
    const sql = "delete customer where id= ?";
    const id = 1;
    pool.query(sql, id, (err, results) => {
        if(err) { console.log(err) }
        console.log(results);
    });
}

function updateCustomer() {
    const sql = "update customer set ? where id= ?";
    const customer = {address:'부산', phone:'010-111'};
    const id = 1;
    pool.query(sql, [customer, id], (err, results) => {
        if(err) { console.log(err) }
        console.log(results);
    })
}

function insertCustomer() {
    const sql = "insert into customer set ?";
    const customer = {address:'포항', name:'yang', phone:'0101', email:'y@y.com'};
    pool.query(sql, customer, (err, results) => {
        if(err) { console.log(err) }
        console.log(results);
    });
}

function selectInfo() {
    const sql = "SELECT * FROM customer WHERE id=?";
    const id = 1;
    pool.query(sql, id, (err, results) => {
        if(err) { console.log(err) }
        console.log(results);
    });
}

function selectAll() {
    const sql = "SELECT * FROM customer";
    pool.query(sql, function (err, results) {
        if(err) { console.log(err) }
        console.log(results);
    });
}

insertCustomer();

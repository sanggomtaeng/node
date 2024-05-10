const {query} = require("./index");

selectAll = async () => {
    const sql = "select * from customer";
    const result = await query(sql);
    console.log(result);
}

selectInfo = async () => {
    const sql = "select * from customer where id=?";
    const id = 2;
    const result = await query(sql, id);
    console.log(result);
}

selectInfo();
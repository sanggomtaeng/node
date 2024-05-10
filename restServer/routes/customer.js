const express = require("express");
const router = express.Router();

const mysql = require("../mysql");
const sql = {
    customerList : "select * from customer",
    customerInfo : "select * from customer where id=?",
    insertCustomer : "insert into customer set ?",
    updateCustomer : "update customer set ? where id=?",
    deleteCustomer : "delete from customer where id=?",
}

//전체조회
router.get("/", async (req, res) => {
    let result = await mysql.query(sql.customerList);
    res.send(result);
})

//단건조회
router.get("/:id", async (req, res) => {
    const id = req.params.id;
    let result = await mysql.query(sql.customerInfo, id);
    res.send(result);
});

//등록
router.post("/", async (req, res) => {
    const body = req.body;
    let result = await mysql.query(sql.insertCustomer, body);
    if(result.affectedRows == 1) {
        res.send(true);
    } else {
        res.send(false);
    }
});

//수정
router.put("/:id", async (req, res) => {
    const id = req.params.id;
    const body = req.body;
    let result = await mysql.query(sql.updateCustomer, [body, id]);
    res.send(result);
});

//삭제
router.delete("/:id", async (req, res) => {
    const id = req.params.id;
    let result = await mysql.query(sql.deleteCustomer, id);
    res.send(result);
});

module.exports = router;
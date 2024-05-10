const express = require("express");
const router = express.Router();

const mysql = require("../mysql");
const sql = {
    todoList : "select * from todo",
    insertTodo : "insert into todo set ?",
    updateTodo : "update todo set complete=? where no=?",
    deleteTodo : "delete from todo where no=?",
}

//전체조회
router.get("/", async(req, res) => {
    let result = await mysql.query(sql.todoList);
    res.send(result);
});

//등록
router.post("/", async(req, res) => {
    const body = req.body;
    let result = await mysql.query(sql.insertTodo, body);
    res.send(result);
});

//수정
router.put("/:no", async(req, res) => {
    const body = req.body;
    const no = req.params.no;
    let result = await mysql.query(sql.updateTodo, [body, no]);
    res.send(result);
});

//삭제
router.delete("/:no", async(req, res) => {
    const no = req.params.no;
    let result = await mysql.query(sql.deleteTodo, no);
    res.send(result);
});

module.exports = router;
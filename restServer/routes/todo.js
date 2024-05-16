const express = require("express");
const router = express.Router();

const mysql = require("../mysql");
const sql = {
    todoList : "select * from todo",
    insertTodo : "insert into todo set ?",
    updateTodo : "update todo set ? where id=?",
    deleteTodo : "delete from todo where id=?",
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
router.put("/:id", async(req, res) => {
    const id = req.params.id;
    let result = await mysql.query(sql.updateTodo, [req.body, id]);
    res.send(result);
});

//삭제
router.delete("/:id", async(req, res) => {
    const id = req.params.id;
    let result = await mysql.query(sql.deleteTodo, id);
    res.send(result);
});

module.exports = router;
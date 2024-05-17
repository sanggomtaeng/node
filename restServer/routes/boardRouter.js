const express = require("express");
const router = express.Router();

const mysql = require("../mysql");
const sql = {
    boardList : "select * from boardrouter",
    boardInfo : "select * from boardrouter where id=?",
    boardInsert : "insert into boardrouter set ?",
    boardUpdate : "update boardrouter set ? where id=?",
    boardDelete : "delete from boardrouter where id=?",
}

//전체조회
router.get("/", async(req, res) => {
    let result = await mysql.query(sql.boardList);
    res.send(result);
});

//단건조회
router.get("/:id", async(req, res) => {
    const id = req.params.id;
    let result = await mysql.query(sql.boardInfo, id);
    res.send(result);
})

//등록
router.post("/", async(req, res) => {
    const body = req.body;
    let result = await mysql.query(sql.boardInsert, body);
    res.send(result);
});

//수정
router.put("/:id", async(req, res) => {
    const id = req.params.id;
    let result = await mysql.query(sql.boardUpdate, [req.body, id]);
    res.send(result);
});

//삭제
router.delete("/:id", async(req, res) => {
    const id = req.params.id;
    let result = await mysql.query(sql.boardDelete, id);
    res.send(result);
});

module.exports = router;
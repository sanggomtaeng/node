const express = require("express");
const router = express.Router();

const mysql = require("../mysql");
const sql = {
    movieList : "select * from mvinfo",
    movieInfo : "select * from mvinfo where no=?",
    insertMovie : "insert into mvinfo set ?",
    updateMovie : "update mvinfo set ? where no=?",
    deleteMovie : "delete from mvinfo where no=?",
}

//전체조회
router.get("/", async(req, res) => {
    let result = await mysql.query(sql.movieList);
    res.send(result);
});

//단건조회
router.get("/:no", async(req, res) => {
    const no = req.params.no;
    let result = await mysql.query(sql.movieInfo, no);
    res.send(result);
})

//등록
router.post("/", async(req, res) => {
    const body = req.body;
    let result = await mysql.query(sql.insertMovie, body);
    res.send(result);
});

//수정
router.put("/:no", async(req, res) => {
    const no = req.params.no;
    let result = await mysql.query(sql.updateMovie, [req.body, no]);
    res.send(result);
});

//삭제
router.delete("/:no", async(req, res) => {
    const no = req.params.no;
    let result = await mysql.query(sql.deleteMovie, no);
    res.send(result);
});

module.exports = router;
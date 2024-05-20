const express = require("express");
const router = express.Router();

const mysql = require("../mysql");
const sql = {
    reviewList : "select * from review",
    reviewInfo : "select * from review where no=?",
    insertReview : "insert into review set ?",
    updateReview : "update review set ? where reviewNo=?",
    deleteReview : "delete from review where reviewNo=?",
}

//전체조회
router.get("/", async(req, res) => {
    let result = await mysql.query(sql.reviewList);
    res.send(result);
});

//단건조회
router.get("/:no", async(req, res) => {
    const no = req.params.no;
    let result = await mysql.query(sql.reviewInfo, no);
    res.send(result);
})

//등록
router.post("/", async(req, res) => {
    const body = req.body;
    let result = await mysql.query(sql.insertReview, body);
    res.send(result);
});

//수정
router.put("/:reviewNo", async(req, res) => {
    const reviewNo = req.params.reviewNo;
    let result = await mysql.query(sql.updateReview, [req.body, reviewNo]);
    res.send(result);
});

//삭제
router.delete("/:reviewNo", async(req, res) => {
    const reviewNo = req.params.reviewNo;
    let result = await mysql.query(sql.deleteReview, reviewNo);
    res.send(result);
});

module.exports = router;
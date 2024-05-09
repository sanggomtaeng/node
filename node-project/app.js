const express = require("express");
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended : false }));
app.use(express.json());

app.get("/", (req, res) => {
res.send("hello world!");
});

//단건조회 : path variable => GET, req.params
app.get("/customer/:no", (req, res) => {
    const no = req.params.no;
    res.send({cmd:"고객정보조회", no});
});

//등록 : POST, req.body
app.post("/customer", (req, res) => {
    const no = req.body.no;
    const name = req.body.name;
    res.send({cmd:"신규고객추가", no, ...req.body});
});

//수정 : PUT, json => req.body
app.put("/customer/:no", (req, res) => {
    const no = req.params.no;
    const name = req.body.name;
    res.send({cmd:"고객정보 수정", no, ...req.body});
});

//삭제 : DELETE 
app.delete("/customer/:no", (req, res) => {
    const no = req.params.no;
    res.send({cmd:"고객정보 삭제", no});
});

app.listen(port, () => {
console.log(`server runing http://localhost:${port}`);
});

//웹서버
//http 모듈 포함
const http = require("http");
const movie = require("./movie.js");
//http 서버 생성
const server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type" : "application/json"});
    (async () => {
        let movieNm = await movie();
        let movieInfo = {movieNm:movieNm, movieCd:1};
        res.end(JSON.stringify(movieInfo));
    })();
});
//지정된 포트 및 호스트이름으로 수신 대기
//서버가 준비되면 콜백함수 호출
server.listen(3000, "192.168.0.23", () => {
    console.log("server running http://192.168.0.23:3000")
});

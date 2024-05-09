// 1. http 모듈 포함
const http = require('http');
const url = require('url');
const hostname = '127.0.0.1';
const port = 3000;
let emps = [ { no:100, name:'park', age:20 },
         { no:101, name:'choi', age:26 },
         { no:102, name:'kim', age:10 }
 ]

// 2. http 서버 생성(요청이 수신되면 응답 처리)
const server = http.createServer((req, res) => {
    const _url = url.parse(req.url, true);
    const pathname = _url.pathname;
    const empno = _url.query.no;
    const empname = _url.query.name;
    const empage = _url.query.age;

    res.writeHead(200, { "Content-Type": "application/json"});
    if(pathname == '/emp') {
        res.end(JSON.stringify(emps));
    } else if(pathname == '/empInfo') {
        for(let i=0; i<emps.length; i++) {
            if(empno == emps[i].no) {
                res.end(JSON.stringify(emps[i]))
            }
        }
    } else if(pathname == '/empDelete') {
        for(let i=0; i<emps.length; i++) {
            if(empno == emps[i].no) {
                emps.splice(i,1);
            }
        }
        res.end(JSON.stringify(emps));
    } else if(pathname == '/empInsert') {
        emps.push({no: empno, name: empname, age: empage});
        res.end(JSON.stringify(emps));
    } else {
        res.statusCode = 404;
        res.end();
    }
});

// 3. 지정된 포트 및 호스트이름으로 수신 대기
server.listen(port, hostname, () => { 
    console.log(`Server running at http://${hostname}:${port}/`);
});
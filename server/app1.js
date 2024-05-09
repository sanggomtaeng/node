//URL - pathname, searchParams
// 1. http 모듈 포함
const http = require('http');
const url = require('url');
const hostname = '127.0.0.1';
const port = 3000;

// 2. http 서버 생성(요청이 수신되면 응답 처리)
const server = http.createServer((req, res) => {
//  const myURL = new URL("http://127.0.0.1" + req.url);
//  const pathname = myURL.pathname;
 const _url = url.parse(req.url, true);
 const pathname = _url.pathname;
 console.log("pathname", _url.pathname);
 console.log("search", _url.query );
 console.log("id", _url.query.userid )
 if(pathname == "/json"){
    res.wirteHead(200, { "Content-Type": "application/json"}); 
    res.end(JSON.stringify({ data: "This is json"}));
 } else if(pathname == "/html") {
    res.statusCode = 200; 
    res.setHeader('Content-Type', 'text/plain'); 
    res.end('This is html');
 } else if(pathname == "/text") {
    res.statusCode = 200; 
    res.setHeader('Content-Type', 'text/plain'); 
    res.end('This is text');
 } else {
    res.statusCode = 404; 
    res.end();
 }
//  console.log("pathname", myURL.pathname);
//  console.log("search", myURL.searchParams);
//  console.log("id", myURL.searchParams.get("username"));
});

// 3. 지정된 포트 및 호스트이름으로 수신 대기
server.listen(port, hostname, () => { 
 console.log(`Server running at http://${hostname}:${port}/`);
});
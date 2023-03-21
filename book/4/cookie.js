const http = require("http");

http.createServer((req, res) => {
    console.log(req.url, req.headers.cookie);
    res.writeHead(200, { "Set-Cookie": "mycookie=test" });
    res.end("hello cookie");
}).listen(9393, () => {
    console.log("9393 PORT RUNNING");
});

const cluster = require("cluster");
const http = require("http");
const numCPUs = require("os").cpus().length;

if (cluster.isMaster) {
    console.log(`MASTER PROCESS ID : ${process.pid}`);
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    cluster.on("exit", (worker, code, signal) => {
        console.log(`${worker.process.pid} WORKER EXIT`);
        console.log("code : ", code, "/ signal : ", signal);
    });
} else {
    http.createServer((req, res) => {
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        res.write("<h1>CLUSTER TEST SERVER</h1>");
        res.end("<p>hello cluster</p>");
        setTimeout(() => {
            process.exit(1);
        }, 1000);
    }).listen(9393);

    console.log(`${process.pid}번 워커 실행`);
}

require("dotenv").config();
const http = require("http");
const app = require("./app");

// Cluster Server CPU
var cluster = require("cluster");
var numofCPUs = require("os").cpus().length;

const server = http.createServer(app);

if (cluster.isMaster) {
    // console.log(`Master with Process ID : ${process.pid} is running`);
    for (var i = 0; i < numofCPUs; i++) {
        cluster.fork();
    }
    cluster.on("fork", function (worker) {
    });
    cluster.on("online", function (worker) {
    });
    cluster.on("listening", function (worker, addr) {
    });
    cluster.on("disconnect", function (worker) {
    });
    cluster.on("exit", (worker, code, signal) => {
        // console.log(`worker with Process ID : ${worker.process.pid} died`);
        cluster.fork();
    });
}
if (cluster.isWorker) {
    const runServer = server.listen(process.env.PORT, process.env.HOST, () => {
        console.log(`messenger run ${process.env.HOST + ":" + process.env.PORT}`);
    });
}

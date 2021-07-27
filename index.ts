import http from "http"
import cluster from "cluster"
require("dotenv").config();
import {Socket} from "./config/socket";
import {trigger} from "./service/trigger";
let app = require("./app")
let numOfCPUs = require("os").cpus().length;
const server = http.createServer(app);

if (cluster.isMaster) {
    for (let i = 0; i < numOfCPUs; i++) {
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
        cluster.fork();
    });
}
if (cluster.isWorker) {
    const wss = Socket.init(server);
    wss.on('connection', function connection(ws) {
        ws.on('message', async function incoming(message: any) {
            try {
                const data = JSON.parse(message);
                let publisher = await trigger.initial(data['trigger'], data['data'])
                ws.send(JSON.stringify(publisher))
            } catch (e) {
                console.log(e)
            }
        });
    });
    const {HOST, REDIS_PORT, REDIS_HOST, PORT} = process.env;
    const runServer = server.listen(PORT, () => {
        console.log(`Fbi-Wanted Api run ${HOST + ":" + PORT}`);
    });
}
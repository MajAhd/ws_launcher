import WebSocket from "ws";

let wss: WebSocket;

export const Socket = {
    init: (httpServer: any) => {
        // @ts-ignore
        wss = new WebSocket.Server({ server: httpServer });
        return wss
    },
    getIO: () => {
        if (!wss) {
            throw new Error("Socket not initialized!");
        }
        return wss
    },
};

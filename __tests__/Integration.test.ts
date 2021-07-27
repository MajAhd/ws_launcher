import {Socket} from "../config/socket";

const WebSocket = Socket.getIO()
const ws = new WebSocket('ws://localhost:3000')

describe('Integration tests', () => {
    jest.setTimeout(30000);
    test("get user info", async () => {
        ws.on('open', function open() {
            let user = {trigger: "get_person", data: {}};
            ws.send(JSON.stringify(user))
            ws.addEventListener('message', function (event) {
                let person_info = JSON.parse(event.data)
                expect(Object.keys(person_info).sort()).toEqual(['status', 'data'].sort());
                expect(person_info["status"]).toBe(200)
            })
            ws.close()
        });
    });
})
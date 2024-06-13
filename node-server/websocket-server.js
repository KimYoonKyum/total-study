const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', ws => {
    ws.on('message', message => {
        console.log('Received %s', message);

        const responseData = {
            data: 'Connected',
            type: 'INIT_CONNECT'
        }
        ws.send(JSON.stringify(responseData));
    });


    //3초 마다 클라이언트에게 메세지 전송
    let responseCount = 0
    setInterval(() => {
        const responseData = {
            data: responseCount < 1 || Math.random() <= 0.7 ? 'NORMAL' : 'ERROR',
            count: responseCount,
            type: 'GET_SESSION_STATUS'
        }
        ws.send(JSON.stringify(responseData));
        responseCount++;
    }, 2000);
});
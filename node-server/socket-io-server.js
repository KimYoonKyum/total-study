const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');

const app = express();
app.use(cors());

const server = http.createServer(app);
const io = socketIo(server, {
    cors: {
        origin: "*", // Allow all origins
        methods: ["GET", "POST"], // Allow GET and POST methods
    }
});

io.on('connection', (socket) => {
    //3초 마다 클라이언트에게 메세지 전송
    let responseCount = 0
    setInterval(() => {
        const responseData = {
            data: responseCount < 1 || Math.random() <= 0.7 ? 'NORMAL' : 'ERROR',
            count: responseCount,
            type: 'GET_SESSION_STATUS'
        }
        socket.emit('message', JSON.stringify(responseData));
        responseCount++;
    }, 2000);

    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });
});

server.listen(4001, () => console.log('Listening on port 4001'));
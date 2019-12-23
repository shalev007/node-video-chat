import path from 'path';
import express from 'express';
import http from 'http';
import socketIo from 'socket.io';

const app = express();
const server = http.Server(app);
const io = socketIo(server);

app.use('/socket.io', express.static(path.join(__dirname, 'node_modules', 'socket.io-client', 'dist')));

app.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

io.on('connection', socket => {
    socket.on('button-click', data => {
        io.emit('push-data', data);
    })
});

server.listen(3000);
import http from 'http';
import { Server } from 'socket.io';
import app from './app.js';
import connectSocket from './socket.js';

const PORT = process.env.PORT

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: '*'
    }
})

server.listen(PORT, () =>{
    console.log(`listening on http://localhost:${PORT}`);
})

connectSocket(io);
const http = require('node:http');
const socketio = require('socket.io');

const server = http.createServer();

// this function call upgrade the connection from http to ws.
const io = socketio(server, {
    cors: {
        origin: ["http://localhost:5173"],
  },
});

io.on('connection', (socket) => {
    console.log('Connection Established');
    socket.on('send-msg', (data) => {
        console.log(`recived message from ${socket.id}----> ${data.msg}`);
        // socket.emit('msg-recived', { message: data.msg });
        io.emit('msg-recived', { message: data.msg });
    })
});


server.listen(3000, () => {
    console.log('server running on 3000');
});
let express = require('express')
let app = express();

let http = require('http');
let server = http.Server(app);

let socketIO = require('socket.io');
let io = socketIO(server);

const port = process.env.PORT || 3000;

users = [];

io.on('connection', (socket) => {

    socket.on('join_event', function (user) {
        users[user.nickName] = socket;
        let userObj = {
            nickName: user.nickName,
            socketId: socket.id
        }
        users.push(userObj);
        io.emit('all_users', users);
    });

    socket.on('send_message', function (data) {
        socket.broadcast.emit('message_received', data);
    });

    socket.on('send_like', function (data) {
        socket.broadcast.to(data.like).emit('recieved_like', data);
    });

    socket.on('disconnect', function () {
        console.log('user nickname at server end: ', socket);
        users = users.filter(user => user.socketId !== socket.id);
        io.emit('all_users', users);
    });

});

server.listen(port, () => {
    console.log(`started on port: ${port}`);
});
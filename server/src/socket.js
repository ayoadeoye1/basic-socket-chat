
const messages = []
const connectSocket = (io) =>{
    io.on('connection', async(socket) =>{
        console.log(`user connected ${socket.id}`)
        io.emit('recieve_msg', messages);

        socket.on('disconnect', (reason) =>{
            console.log(`user disconnect: ${reason}`)
        })

        socket.on('send_msg', (msg) =>{
            messages.push(msg)
            console.log(messages)
            io.emit('recieve_msg', messages);
        })
    })
}

export default connectSocket;
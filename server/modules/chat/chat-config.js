
export default server => {
  const io = require('socket.io')(server);
  io.on('connection', function (socket) {
    console.log('A user connected');
    socket.on('msg', function(msg){
      io.emit('msg', {'msg':msg});
    });
  });
};

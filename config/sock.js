var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

var startsock = function() {
server.listen(8010);

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
});
}
module.exports = {startsock}

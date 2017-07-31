var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

var conn = function() {
  server.listen(8010);

  app.get('/', function (req, res) {
    res.sendfile(__dirname + '/index.html');
  });
};

var startsock = function() {

io.on('connection', function (socket) {
//  socket.emit('news', { hello: 'world' });
  socket.on('fromClient', function (data) {
    console.log(data);
  });
});
}
module.exports = {startsock,conn}

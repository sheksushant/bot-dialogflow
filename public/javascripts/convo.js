var botui = new BotUI('api-bot');

var socket = io.connect('http://localhost:8010');
// read the BotUI docs : https://docs.botui.org/
botui.message.add({
    content: 'Lets Start Talking...',
    delay: 1500,
  }).then(function () {
    botui.action.text({
      action: {
        placeholder: 'Say Hello', }
    }
  ).then(function (res) {
    socket.emit('fromClient', { client : res.value }); // sends the message typed to server
      console.log(res.value); // will print whatever was typed in the field.

    }).then(function () {

      socket.on('fromServer', function (data) { // recieveing a reply from server.
        console.log(data.server);
      botui.message.add({
          content: data.server,
          delay: 500,
        });
      });

    })
  });

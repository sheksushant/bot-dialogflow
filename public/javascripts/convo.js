var botui = new BotUI('api-bot');

var socket = io.connect('http://localhost:8010');


botui.message.add({
    content: 'Lets Start Talking...',
    delay: 1500,
  }).then(function () {
    botui.action.text({
      action: {
        placeholder: 'Say Hello', }
    }
  ).then(function (res) {  // will be called when it is submitted.
    socket.emit('fromClient', { client : res.value });
      console.log(res.value); // will print whatever was typed in the field.

    }).then(function () {

      socket.on('fromServer', function (data) {
        console.log(data.server);
      botui.message.add({
          content: data.server,
          delay: 500,
        });
      });

    })
  });



  // socket
  // var socket = io.connect('http://0.0.0.0:4200');
  // socket.on('connect', function(data) {
  //    socket.emit('reply', {"res"  :Bot Started});
  // });

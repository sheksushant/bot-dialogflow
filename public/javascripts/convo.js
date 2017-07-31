var botui = new BotUI('api-bot');

var socket = io.connect('http://localhost:8010');
socket.on('fromServer', function (data) {
  console.log(data);
});




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

    });
  });



  // socket
  // var socket = io.connect('http://0.0.0.0:4200');
  // socket.on('connect', function(data) {
  //    socket.emit('reply', {"res"  :Bot Started});
  // });

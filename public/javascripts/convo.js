var botui = new BotUI('api-bot');
// var socket = io.connect('http://0.0.0.0:4200');
// socket.on('connect', function(data) {
//    socket.emit('reply', {"res"  :"Bot Connected"});
// });



botui.message.add({
    content: 'Lets Start Talking...',
    delay: 1500,
  }).then(function () {
    botui.action.text({
      action: {
        placeholder: 'Say Hello', }
    }
  ).then(function (res) {  // will be called when it is submitted.
      console.log(res.value); // will print whatever was typed in the field.
    });
  });



  // socket
  // var socket = io.connect('http://0.0.0.0:4200');
  // socket.on('connect', function(data) {
  //    socket.emit('reply', {"res"  :Bot Started});
  // });

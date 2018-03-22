var botui = new BotUI('api-bot');

var socket = io.connect('http://localhost:8010');
// read the BotUI docs : https://docs.botui.org/

botui.message.add({
  content: 'Hello! My name is TicketBot. I will ask you some questions to help solve the problem you are having. I can also write a ticket for you in case we cannot resolve your problem here.',
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
    socket.on('fromServer', function (data) { // recieve a reply from server.
      console.log(data.server);
      if (data.server.includes('button')) {
        newMessage(data.server.split(',')[0]);
        newButton(data.server.split(',').slice(0,-1));
      }
      else {
        newMessage(data.server);
        addAction();
      }
      // addAction();
  })
});
})

function newButton (response){
  console.log(response);
  let actions = [];
  for (let i = 1; i < response.length; i++) {
    actions.push({text: response[i], value: response[i]});
  }
  botui.action.button({ // let user do something
    delay: 1000,
    action: actions
  }).then(function (res) {
    socket.emit('fromClient', { client : res.value });
    console.log('client response: ', res.value);
  })
}

function newMessage (response) {
  botui.message.add({
    content: response,
    delay: 900,
  })
}

function addAction () {
  botui.action.text({
    action: {
      placeholder: 'enter response...',
    }
  }).then(function (res) {
    socket.emit('fromClient', { client : res.value });
    console.log('client response: ', res.value);
  })
}

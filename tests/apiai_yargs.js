var apiai = require('apiai');
// Using Yargs to test api.ai response on console.
var yargs = require('yargs');

var app = apiai("your_api_key");

var request = app.textRequest(yargs.argv._[0], {
	sessionId: '<unique session id>'
});

request.on('response', function(response) {
	console.log(response.result.fulfillment.speech);
});

request.on('error', function(error) {
	console.log(error);
});

request.end();


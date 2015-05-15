var auth = require('./auth.js');

var accountSid = auth.accountSid;
var authToken = auth.authToken;

var twilio = require('/usr/local/lib/node_modules/twilio');
var prompt = require('/usr/local/lib/node_modules/prompt');
var fs = require('fs');

if (process.argc != 2) {
	console.log('Usage:\t node texter.js <numbers_list>.csv');
	process.exit(1);
}

var numbersCSVFile = process.argv[2];
console.log(numbersCSVFile);

var numbersCSV = fs.readFileSync(numbersCSVFile);

var numbers = numbersCSV.toString().split(new RegExp('\r|\n', 'g'));

console.log(numbers);

prompt.start();
prompt.get(['message'], function (err, result) {
	if (err) 
		console.log(err);

	var message = result.message;
	
	console.log(message);

	var client = new twilio.RestClient(accountSid, authToken);
	 
	for (var i = 0; i < numbers.length; i++) {
		var number = numbers[i];
	
		client.messages.create({
		    body: message,
		    to: "+1" + number,
		    from: "+14154888950"
		}, function(err, message) {
			if (err)
		    	console.log(message.sid);
		});
	};
});

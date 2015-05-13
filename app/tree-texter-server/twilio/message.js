var accountSid = 'AC3441ffbb10cf4fd9ada0aaeed8505e99';
var authToken = '4182dfa563d7e71f3cc8c3ec08149d47';

var client = require('twilio')(accountSid, authToken);

var fs = require('fs');

var logger = require('../logger/log');
var msg = {};
 
msg.messageNumber = function(to, message, callback) {
  client.sendMessage({
    to: to,
    from: "+14154888950", 
    body: message 
  }, function(error, message) {
    // Log the response to DiskDB for auditing purposes
    if (error) {
      logger.logMsg({
        "status": "error",
        "error": error
      });
    } else {
      logger.logMsg({
        "status": "success",
        "message": message
      });
    }

    callback(error, message);
  });
};
 
msg.messageList = function(listId, message, callback) {
  // open csv file
  var numbersCSVFiles = fs.readdirSync("data/lists");
  var numbersCSVFile = "data/lists/" + numbersCSVFiles[listId];
  var numbersCSV = fs.readFileSync(numbersCSVFile);
  var numbers = numbersCSV.toString().split(new RegExp('\r|\n', 'g'));

  for (var i = 0; i < numbers.length; i++) {  
    var number = numbers[i];
    client.sendMessage({
      to: number,
      from: "+14154888950", 
      body: message 
    }, function(error, message) {
      // Log the response to DiskDB for auditing purposes
      if (error) {
        logger.logMsg({
          "status": "error",
          "error": error
        });
      } else {
        logger.logMsg({
          "status": "success",
          "message": message
        });
      }
    });
  }
  
  var _error;
  var _message = listId + ": " + message;
  callback(_error, _message);
};

msg.getLists = function(callback) {
  var numbersCSVFiles = fs.readdirSync("data/lists");
  var error;

  if (!numbersCSVFiles)
    error = "No lists exist!";

  var lists = [];

  for (var i = 0; i < numbersCSVFiles.length; i++) {
    lists.push({ id: i + 1, title: numbersCSVFiles[i].split(".")[0] });
  };

  callback(error, lists);
}
 
module.exports = msg;
var accountSid = 'AC3441ffbb10cf4fd9ada0aaeed8505e99';
var authToken = '4182dfa563d7e71f3cc8c3ec08149d47';

var client = require('twilio')(accountSid, authToken);

var logger = require('../logger/log');
var msg = {};
 
msg.sendMsg = function(to, message, callback) {
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
 
module.exports = msg;
var express = require('express');
var router = express.Router();
 
router.post('/send_message', function(req, res) {
  var resp = {};
  var msg = req.body;
 
  if (!msg || !msg.to || !msg.text) {
    resp.status = "error";
    resp.message = "invalid data";
    res.json(resp);
  }
 
  var twilioClient = require('../twilio/message').sendMsg(msg.to, msg.text, function(error, message) {
    if (error) {
      resp.status = "error";
      resp.message = error;
    } else {
      resp.status = "success";
      resp.message = message.sid;
    }
 
    res.json(resp);
  });
 
});

module.exports = router;
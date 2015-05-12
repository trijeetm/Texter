var express = require('express');
var router = express.Router();
 
router.post('/message_number', function(req, res) {
  var resp = {};
  var msg = req.body;
 
  if (!msg || !msg.to || !msg.text) {
    resp.status = "error";
    resp.message = "invalid data";
    res.json(resp);
  }
 
  var twilioClient = require('../twilio/message').messageNumber(msg.to, msg.text, function(error, message) {
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
 
router.post('/message_list', function(req, res) {
  var resp = {};
  var msg = req.body;
 
  if (!msg || !msg.listId || !msg.text) {
    resp.status = "error";
    resp.message = "invalid data";
    res.json(resp);
  }
 
  var twilioClient = require('../twilio/message').messageList(msg.listId, msg.text, function(error, message) {
    if (error) {
      resp.status = "error";
      resp.message = error;
    } else {
      resp.status = "success";
      resp.message = message;
    }
 
    res.json(resp);
  });
 
});

module.exports = router;
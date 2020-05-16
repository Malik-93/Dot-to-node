'use strict';

var utils = require('../utils/writer.js');
var Notification = require('../service/NotificationService');

module.exports.apiNotificationSendEmailPOST = function apiNotificationSendEmailPOST (req, res, next) {
  var body = req.swagger.params['body'].value;
  Notification.apiNotificationSendEmailPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

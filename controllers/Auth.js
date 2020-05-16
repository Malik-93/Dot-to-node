'use strict';

var utils = require('../utils/writer.js');
var Auth = require('../service/AuthService');

module.exports.apiAuthLoginPOST = function apiAuthLoginPOST (req, res, next) {
  var body = req.swagger.params['body'].value;
  Auth.apiAuthLoginPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

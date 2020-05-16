'use strict';

var utils = require('../utils/writer.js');
var Payment = require('../service/PaymentService');

module.exports.apiPaymentArrearsClearedPOST = function apiPaymentArrearsClearedPOST (req, res, next) {
  var body = req.swagger.params['body'].value;
  Payment.apiPaymentArrearsClearedPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiPaymentPaymentJobGET = function apiPaymentPaymentJobGET (req, res, next) {
  Payment.apiPaymentPaymentJobGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiPaymentPaymentResponseCompanyIDGET = function apiPaymentPaymentResponseCompanyIDGET (req, res, next) {
  var companyID = req.swagger.params['CompanyID'].value;
  Payment.apiPaymentPaymentResponseCompanyIDGET(companyID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiPaymentProcessPaymentPOST = function apiPaymentProcessPaymentPOST (req, res, next) {
  var body = req.swagger.params['body'].value;
  Payment.apiPaymentProcessPaymentPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiPaymentScheduleCreatePOST = function apiPaymentScheduleCreatePOST (req, res, next) {
  var body = req.swagger.params['body'].value;
  Payment.apiPaymentScheduleCreatePOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiPaymentScheduleDetailsPOST = function apiPaymentScheduleDetailsPOST (req, res, next) {
  var body = req.swagger.params['body'].value;
  Payment.apiPaymentScheduleDetailsPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiPaymentScheduleGeneratePOST = function apiPaymentScheduleGeneratePOST (req, res, next) {
  var body = req.swagger.params['body'].value;
  Payment.apiPaymentScheduleGeneratePOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

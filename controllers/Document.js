'use strict';

var utils = require('../utils/writer.js');
var Document = require('../service/DocumentService');

module.exports.apiDocumentGetApplicationDocumentsApplicationIdGET = function apiDocumentGetApplicationDocumentsApplicationIdGET (req, res, next) {
  var applicationId = req.swagger.params['applicationId'].value;
  Document.apiDocumentGetApplicationDocumentsApplicationIdGET(applicationId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiDocumentLoanAgreementPOST = function apiDocumentLoanAgreementPOST (req, res, next) {
  var body = req.swagger.params['body'].value;
  Document.apiDocumentLoanAgreementPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiDocumentUploadPOST = function apiDocumentUploadPOST (req, res, next) {
  var applicationId = req.swagger.params['ApplicationId'].value;
  var isReceived = req.swagger.params['IsReceived'].value;
  var documentType = req.swagger.params['DocumentType'].value;
  var document = req.swagger.params['Document'].value;
  Document.apiDocumentUploadPOST(applicationId,isReceived,documentType,document)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

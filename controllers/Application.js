'use strict';

var utils = require('../utils/writer.js');
var Application = require('../service/ApplicationService');

module.exports.apiApplicationAddresslookupPOST = function apiApplicationAddresslookupPOST (req, res, next) {
  var body = req.swagger.params['body'].value;
  Application.apiApplicationAddresslookupPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiApplicationApplicationJourneyIdGET = function apiApplicationApplicationJourneyIdGET (req, res, next) {
  var id = req.swagger.params['id'].value;
  Application.apiApplicationApplicationJourneyIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiApplicationApplicationLoanIdGET = function apiApplicationApplicationLoanIdGET (req, res, next) {
  var id = req.swagger.params['id'].value;
  Application.apiApplicationApplicationLoanIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiApplicationApplicationNotePOST = function apiApplicationApplicationNotePOST (req, res, next) {
  var body = req.swagger.params['body'].value;
  Application.apiApplicationApplicationNotePOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiApplicationApplicationNotesApplicationIdGET = function apiApplicationApplicationNotesApplicationIdGET (req, res, next) {
  var applicationId = req.swagger.params['applicationId'].value;
  Application.apiApplicationApplicationNotesApplicationIdGET(applicationId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiApplicationCompanyApplicationsCompanyIdGET = function apiApplicationCompanyApplicationsCompanyIdGET (req, res, next) {
  var companyId = req.swagger.params['companyId'].value;
  Application.apiApplicationCompanyApplicationsCompanyIdGET(companyId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiApplicationCompanylookupPOST = function apiApplicationCompanylookupPOST (req, res, next) {
  var body = req.swagger.params['body'].value;
  Application.apiApplicationCompanylookupPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiApplicationCreatePOST = function apiApplicationCreatePOST (req, res, next) {
  var body = req.swagger.params['body'].value;
  Application.apiApplicationCreatePOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiApplicationDropdownsGET = function apiApplicationDropdownsGET (req, res, next) {
  Application.apiApplicationDropdownsGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiApplicationDuplicateApplicationDetailsPOST = function apiApplicationDuplicateApplicationDetailsPOST (req, res, next) {
  var body = req.swagger.params['body'].value;
  Application.apiApplicationDuplicateApplicationDetailsPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiApplicationDuplicatesIdGET = function apiApplicationDuplicatesIdGET (req, res, next) {
  var id = req.swagger.params['id'].value;
  Application.apiApplicationDuplicatesIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiApplicationGetAccountScoreDataPOST = function apiApplicationGetAccountScoreDataPOST (req, res, next) {
  var body = req.swagger.params['body'].value;
  Application.apiApplicationGetAccountScoreDataPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiApplicationGetAccountScoreReportCompanyIdGET = function apiApplicationGetAccountScoreReportCompanyIdGET (req, res, next) {
  var companyId = req.swagger.params['companyId'].value;
  Application.apiApplicationGetAccountScoreReportCompanyIdGET(companyId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiApplicationGetEquifaxDataPOST = function apiApplicationGetEquifaxDataPOST (req, res, next) {
  var body = req.swagger.params['body'].value;
  Application.apiApplicationGetEquifaxDataPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiApplicationIdGET = function apiApplicationIdGET (req, res, next) {
  var id = req.swagger.params['id'].value;
  Application.apiApplicationIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiApplicationSearchPOST = function apiApplicationSearchPOST (req, res, next) {
  var body = req.swagger.params['body'].value;
  Application.apiApplicationSearchPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiApplicationUpdatePOST = function apiApplicationUpdatePOST (req, res, next) {
  var body = req.swagger.params['body'].value;
  Application.apiApplicationUpdatePOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

'use strict';

var utils = require('../utils/writer.js');
var Admin = require('../service/AdminService');

module.exports.apiAdminBusinessTypeCreatePOST = function apiAdminBusinessTypeCreatePOST (req, res, next) {
  var body = req.swagger.params['body'].value;
  Admin.apiAdminBusinessTypeCreatePOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiAdminBusinessTypesGET = function apiAdminBusinessTypesGET (req, res, next) {
  Admin.apiAdminBusinessTypesGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiAdminCheckListCategoriesGET = function apiAdminCheckListCategoriesGET (req, res, next) {
  Admin.apiAdminCheckListCategoriesGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiAdminCheckListCategoryCreatePOST = function apiAdminCheckListCategoryCreatePOST (req, res, next) {
  var body = req.swagger.params['body'].value;
  Admin.apiAdminCheckListCategoryCreatePOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiAdminGuarantorRolesCreatePOST = function apiAdminGuarantorRolesCreatePOST (req, res, next) {
  var body = req.swagger.params['body'].value;
  Admin.apiAdminGuarantorRolesCreatePOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiAdminGuarantorRolesGET = function apiAdminGuarantorRolesGET (req, res, next) {
  Admin.apiAdminGuarantorRolesGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiAdminLoanProductsCreatePOST = function apiAdminLoanProductsCreatePOST (req, res, next) {
  var body = req.swagger.params['body'].value;
  Admin.apiAdminLoanProductsCreatePOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiAdminLoanProductsGET = function apiAdminLoanProductsGET (req, res, next) {
  Admin.apiAdminLoanProductsGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiAdminLoanPurposesGET = function apiAdminLoanPurposesGET (req, res, next) {
  Admin.apiAdminLoanPurposesGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiAdminMaritalStatusCreatePOST = function apiAdminMaritalStatusCreatePOST (req, res, next) {
  var body = req.swagger.params['body'].value;
  Admin.apiAdminMaritalStatusCreatePOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiAdminMaritalStatusesGET = function apiAdminMaritalStatusesGET (req, res, next) {
  Admin.apiAdminMaritalStatusesGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiAdminNoteCategoryPOST = function apiAdminNoteCategoryPOST (req, res, next) {
  var body = req.swagger.params['body'].value;
  Admin.apiAdminNoteCategoryPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiAdminRoleCreatePOST = function apiAdminRoleCreatePOST (req, res, next) {
  var body = req.swagger.params['body'].value;
  Admin.apiAdminRoleCreatePOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiAdminRolePermissionsPOST = function apiAdminRolePermissionsPOST (req, res, next) {
  var body = req.swagger.params['body'].value;
  Admin.apiAdminRolePermissionsPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiAdminRolePermissionsRoleIdGET = function apiAdminRolePermissionsRoleIdGET (req, res, next) {
  var roleId = req.swagger.params['RoleId'].value;
  Admin.apiAdminRolePermissionsRoleIdGET(roleId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiAdminRoleUpdatePOST = function apiAdminRoleUpdatePOST (req, res, next) {
  var body = req.swagger.params['body'].value;
  Admin.apiAdminRoleUpdatePOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiAdminUserCreatePOST = function apiAdminUserCreatePOST (req, res, next) {
  var body = req.swagger.params['body'].value;
  Admin.apiAdminUserCreatePOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiAdminUserUpdatePOST = function apiAdminUserUpdatePOST (req, res, next) {
  var body = req.swagger.params['body'].value;
  Admin.apiAdminUserUpdatePOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

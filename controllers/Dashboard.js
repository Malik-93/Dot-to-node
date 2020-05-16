'use strict';

var utils = require('../utils/writer.js');
var Dashboard = require('../service/DashboardService');

module.exports.apiDashboardApplicationStatusesGET = function apiDashboardApplicationStatusesGET (req, res, next) {
  Dashboard.apiDashboardApplicationStatusesGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiDashboardChaseListGET = function apiDashboardChaseListGET (req, res, next) {
  Dashboard.apiDashboardChaseListGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiDashboardCompanyOverviewGET = function apiDashboardCompanyOverviewGET (req, res, next) {
  Dashboard.apiDashboardCompanyOverviewGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiDashboardCustomersListGET = function apiDashboardCustomersListGET (req, res, next) {
  Dashboard.apiDashboardCustomersListGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiDashboardMonthlyGrowthGET = function apiDashboardMonthlyGrowthGET (req, res, next) {
  Dashboard.apiDashboardMonthlyGrowthGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiDashboardPendingApplicationsGET = function apiDashboardPendingApplicationsGET (req, res, next) {
  Dashboard.apiDashboardPendingApplicationsGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

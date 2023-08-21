const express = require("express");
const companiesRouter = express.Router();
const userController = require("../controller/companiesController.js");

companiesRouter.get("/listAllcompanies", userController.listAllcompanies);
// get all companies
companiesRouter.get("/companies/:id", userController.getCompany);
// get one company by id

module.exports = companiesRouter;
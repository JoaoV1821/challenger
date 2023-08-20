const express = require("express");
const router = express.Router();
const userController = require("../controller/companiesController.js");

router.get("/listAllcompanies", userController.listAllcompanies);
// get all companies
router.get("/companies/:id", userController.getCompany);
// get one company by id
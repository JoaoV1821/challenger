const express = require("express");
const companiesRouter = require("./companiesRoute.js");
const router = express.Router();

router.use('/companies', companiesRouter);

module.exports = router;
"use strict";

const express = require("express");
const { upload } = require("../helpers/fileHelpers");
const { singleFileUpload, getSingleFiles } = require("../controllers/fileUploadedControllers");

const router = express.Router();

router.post("/singleFile", upload.single("file"), singleFileUpload);
router.get("/getSingleFiles", getSingleFiles);

module.exports = router;

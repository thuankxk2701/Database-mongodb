"use strict";

const express = require("express");
const { upload } = require("../helpers/filehelpers");
const {
  singleFileUpload,
  multipleFileUpload,
  getSingleFiles,
  getMultipleFiles,
} = require("../controllers/fileuploaderController");

const router = express.Router();

router.post("/singleFile", upload.single("file"), singleFileUpload);
router.post("/multipleFiles", upload.array("files"), multipleFileUpload);
router.get("/getSingleFiles", getSingleFiles);
router.get("/getMultipleFiles", getMultipleFiles);

module.exports = {
  routes: router,
};

const express = require("express");
require("dotenv").config();

const app = express();

//middleware
app.use(express.static("./public"));
app.use(express.json());

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is listening on port ${port}...`));

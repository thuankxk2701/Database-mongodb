const { readFile, writeFile } = require("fs");

console.log("start a first tasks");

readFile("../content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  } else {
    console.log(result);
    console.log("Complete first task");
  }
});

console.log("Start");

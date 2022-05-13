const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/my_secnd_db")
  .then(() => {
    console.log("hi");
  })
  .catch((err) => {
    console.log("something is not right", err);
  });

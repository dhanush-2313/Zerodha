require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL || 3002;

async function main() {
  await mongoose.connect(uri);
}

main()
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.error(err);
  });

app.get("/", (req, res) => {
  res.send("root");
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});

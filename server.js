const express = require("express");
const path = require("path");

const app = express();

app.get("/LocketGold_Premium_DNS.mobileconfig", (req, res) => {
  res.setHeader(
    "Content-Type",
    "application/x-apple-aspen-config"
  );

  res.sendFile(
    path.join(__dirname, "LocketGold_Premium_DNS.mobileconfig")
  );
});

app.get("/", (req, res) => {
  res.send("DNS Profile Server");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT);

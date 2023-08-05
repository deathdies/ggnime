const cors = require("cors");
const axios = require("axios");
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

const kuramanime = require("./sites/kuramanime/kuramanime");

const corsOptions = {
  origin: "api.ggtutor.com",
  credentials: true,
};

app.use(cors(corsOptions));
app.use("/v1", kuramanime);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/home.html");
});
app.listen(port, () => console.log("Server listen on port => " + port));

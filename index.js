const express = require("express");
const app = express();

//Enviroment Variable.
const port = process.env.PORT || 3000;

app.get("/", function (req, res) {
  res.send("First Web Server Port using Env.");
});

app.get("/api/waqas", function (req, res) {
  res.send("Url changed");
});

//Routing Parameters.
app.get("/api/waqas/:lastname", (req, res) => {
  res.send(req.params.lastname);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

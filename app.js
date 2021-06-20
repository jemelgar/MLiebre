const express = require("express");
const path = require("path");
const app = express();
const port = 3000;
app.use(express.static("public"));

app.listen(process.env.PORT || port, () =>
  console.log(`Servidor corriendo en puerto ${port}`)
);
app.get("/", (req, res) => {
  res.sendFile(path.resolve("views/home.html"));
});
app.get("/register", (req, res) => {
  res.sendFile(path.resolve("views/register.html"));
});
app.get("/login", (req, res) => {
  res.sendFile(path.resolve("views/login.html"));
});

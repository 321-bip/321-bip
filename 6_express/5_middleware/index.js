const express = require("express");
const path = require("path");

const app = express();
const port = 2000;
const basePath = path.join(__dirname, "templates");

const checkAuth = function (req, res, next) {
  req.status = true;

  if (req.status) {
    console.log("Esta logado, pode continuar");
    next();
  } else {
    console.log("nao esta logado, faça o login para continuar");
    next();
  }
};
app.use(checkAuth);

app.get("/", (req, res) => {
  res.sendFile(`${basePath}/index.html`);
});

app.listen(port, () => {
  console.log(`app rodando na porta ${port}`);
});

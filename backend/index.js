const express = require("express");
const server = express();
const filmes = require("./src/data/filmes.json");

//TEST 1
server.get("/", (req, res) => {
  return res.json({ mensagem: "rodando server" });
});

server.listen(3000, () => {
  console.log("rodando...");
});

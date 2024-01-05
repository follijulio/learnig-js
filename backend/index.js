const express = require("express");
const server = express();
const filmes = require("./src/data/filmes.json");

//TEST 1
server.get("/", (req, res) => {
  return res.json({ mensagem: "rodando server" });
});
//TEST 2
server.get("/usuarios", (req, res) => {
  return res.json({ usuario: "Júlio César" });
});

server.listen(3000, () => {
  console.log("rodando...");
});

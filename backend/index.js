const express = require("express");
const server = express();
const cors = require("cors");
const filmes = require("./src/data/filmes.json");

server.use(cors());

//TEST 1
server.get("/", (req, res) => {
  return res.json({ mensagem: "rodando server" });
});

//TEST 2
server.get("/usuarios", (req, res) => {
  return res.json({ usuario: "Júlio César" });
});

//TEST 3
server.get("/filmes", (req, res) => {
  return res.json(filmes);
});

server.listen(3000, () => {
  console.log("rodando...");
});

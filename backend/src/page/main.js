function fazerReq(url) {
  let request = new XMLHttpRequest();
  request.open("GET", url, false);
  request.send();
  return request.responseText;
}
function criarLinha(filme) {
  linha = document.createElement("div");
  titulo = document.createElement("h2");
  secaoAlta = document.createElement("nav");
  secaoBaixa = document.createElement("main");
  secaoTexto = document.createElement("article");
  imagem = document.createElement("img");
  texto = document.createElement("p");
  elenco = document.createElement("p");

  titulo.textContent = filme.nome;
  texto.innerHTML = filme.descricao;
  imagem.src = filme.foto;
  elenco.textContent = "Elenco: " + filme.elenco;

  secaoTexto.appendChild(texto);
  secaoTexto.appendChild(elenco);

  secaoAlta.appendChild(titulo);
  secaoBaixa.appendChild(imagem);
  secaoBaixa.appendChild(secaoTexto);

  linha.appendChild(secaoAlta);
  linha.appendChild(secaoBaixa);
  return linha;
}

function main() {
  let data = fazerReq("http://localhost:3000/filmes");
  let filmes = JSON.parse(data);
  let tabela = document.getElementById("tabela");
  filmes.forEach((element) => {
    let linha = criarLinha(element);
    tabela.append(linha);
  });
  console.log(filmes);
}
main();

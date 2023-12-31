function mostrarLivros() {
  for (var i = 0; i < biblioteca.length; i++) {
    console.log("|----------------------------------|");
    console.log("Titulo: " + biblioteca[i].titulo);
    console.log("Autor: " + biblioteca[i].autor);
    console.log("Páginas: " + biblioteca[i].paginas);
    console.log("Editora: " + biblioteca[i].editora);
  }
}

let livro0 = {
  titulo: "O Senhor dos Anéis",
  autor: "J. R. R. Tolkien",
  paginas: 752,
  editora: "Editora34",
};

let livro1 = {
  titulo: "As Crônicas de Nárnia",
  autor: "Tolkien, Christopher",
  paginas: 608,
  editora: "HarperCollins Publishers",
};

let livro2 = {
  titulo: "1984",
  autor: "George Orwell",
  paginas: 226,
  editora: "TriCaju",
};

let biblioteca = [livro0, livro1, livro2];

mostrarLivros();
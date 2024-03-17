const minutos = [
  7, 2, 5, 5, 9, 2, 5, 3, 2, 11, 2, 2, 3, 2, 3, 4, 5, 1, 1, 2, 5, 9, 11, 4, 8,
  10, 13, 1, 5, 3, 6, 7, 5, 3, 1, 7, 4, 9, 3, 2, 6, 5, 8, 2,
];
const segundos = [
  3, 29, 40, 0, 22, 41, 0, 40, 30, 41, 57, 56, 51, 46, 39, 49, 52, 23, 46, 55,
  52, 25, 5, 13, 35, 37, 57, 40, 36, 47, 51, 25, 53, 54, 42, 59, 39, 24, 6, 59,
  23, 17, 24, 5, 14, 4,
];
function soma(videos) {
  let total = 0;
  for (let i = 0; i < videos.length; i++) {
    total += videos[i];
  }
  return total;
}

function main() {
  var valor1 = soma(minutos);
  var valor2 = soma(segundos) / 60;
  var valor = valor1 + valor2;
  valor *= 1.5
  valor /= 60
  console.log(`A soma de todos os vídeos é: ${valor} minutos.`);
}

main();

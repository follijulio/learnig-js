const idades = [16, 17, 19, 19, 21, 14, 15, 17, 18, 20, 19];

function verificarIdade(valores) {
  var acima = [];
  var abaixo = [];
  for (var i = 0; i < valores.length; i++) {
    if (valores[i] >= 18) {
      acima.push(valores[i]);
    } else {
      abaixo.push(valores[i]);
    }
  }
  console.log("ACIMA => ", acima);
  console.log("ABAIXO => ", abaixo);
}

function main() {
  verificarIdade(idades);
}
main();

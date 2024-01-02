function calcular() {
  var calculo = document.getElementById("display").value;
  if (calculo === "") {
    limparDisplay();
    implementarDisplay("ERRO");
  } else {
    var resultado = eval(calculo);
    limparDisplay();
    implementarDisplay(resultado);
  }
}
function implementarDisplay(valor) {
  document.getElementById("display").value += valor;
}
function limparDisplay() {
  document.getElementById("display").value = "";
}

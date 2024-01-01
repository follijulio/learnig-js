function atualizarHorario() {
  var now = new Date();
  var hora = now.getHours();
  var minuto = now.getMinutes();
  var segundo = now.getSeconds();

  var ano = now.getFullYear();
  var mes = now.getMonth() + 1;
  var dia = now.getDate();

  var horario = hora + " : " + minuto + " : " + segundo;
  var data = mes + " / " + dia + " / " + ano;
  document.getElementById("relogio").textContent = horario;
  document.getElementById("data").textContent = data;
}

setInterval(atualizarHorario);

atualizarHorario();

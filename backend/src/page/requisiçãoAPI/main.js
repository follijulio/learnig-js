function fazerPost(body, url) {
  console.log("BODY => ", body);
  let request = new XMLHttpRequest();
  request.open("POST", url, true);
  request.setRequestHeader("Content-type", "application/json");
  request.send(JSON.stringify(body));
  request.onload = function () {
    console.log(this.responseText);
  };
}

function cadastrarUser() {
  let url = "http://localhost:3000/user";
  event.preventDefault();
  let nome = document.getElementById("nome").value;
  let email = document.getElementById("email").value;
  body = {
    Nome: nome,
    Email: email,
  };
  fazerPost(body, url);
}

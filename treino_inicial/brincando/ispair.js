function ispair(value) {
  var ispair_response;
  if(value%2==0){
    ispair_response = "par";
  } else {
    ispair_response = "ímpar";
  }
return ispair_response
}

function main() {
  for (let i = 0; i < 100; i++) {
    console.log("o número "+i+" é ",ispair(i));
  }
}

main()
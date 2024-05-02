function percentage(total, certain) {
  return (certain / total) * 100;
}

function calculate(certain, total, difference, expectation) {
  var i = 0;
  var proportion = certain / total;
  difference = difference + proportion;
  do {
    i++;
    certain = certain + 1;
    total = certain + difference;
    percentage = percentage(total, certain);
    if (total == 18500) {
      break;
    }
  } while (percentage <= expectation);
  var difference = total - certain;

  return `para obter os 
  ${expectation.toFixed(0)}% o usuário tem que fazer 
  ${total.toFixed(0)} questões acertando 
  ${certain.toFixed(0)} questões // 
  ${difference.toFixed(0)}`;

}
function main(certain, total, expectation) {

  var difference = total - certain;

  var text = calculate(certain, total, difference, expectation);

  console.log(text);

}

main(0, 0, 0);
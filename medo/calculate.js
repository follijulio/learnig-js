function calc_percentage(total, certain) {
  return (certain / total) * 100;
}

function calculate(certain, total, difference, expectation) {
  var i = 0;
  var more = 0;
  if(calc_percentage(total,certain) != expectation){
    
    do {
      
      more++;
      i++;
      certain = certain + 1;
      total = certain + difference;
      var percentage = calc_percentage(total, certain);
      if (total == 18500) {
        break;
      }
    } while (percentage <= expectation);
  }
    var difference = total - certain;
    
    return `para obter os ${expectation.toFixed(0)}% o usuário tem que fazer ${total.toFixed(0)} questões acertando ${certain.toFixed(0)} questões // ${difference.toFixed(0)} \n\n\n\n${more}`;
  }
function main(certain, total, expectation) {
  var difference = total - certain;

var _ = calc_percentage(total,certain)
  console.log(_.toFixed(2));
  var text = calculate(certain, total, difference, expectation);
  console.log(text);
}

var certain = 343;
var total = 517;
var expectativa_porc = 67;
main(certain, total, expectativa_porc);

var screen = document.getElementById('display');

function enter (display, resultado) {
  var display = document.getElementById(display);
  var operands = display.innerHTML.split ("+");
  var resultado = document.getElementById(resultado);
  var resultData = parseInt(operands[0]) ^ parseInt(operands[1]);

  resultado.innerHTML = resultData;
}
function key(number){
  screen.innerHTML=screen.innerHTML+number;
}

function del(){
  var display = document.getElementById("display");
  var borrado=display.innerHTML.slice(0,-1);
  display.innerHTML=borrado;
}

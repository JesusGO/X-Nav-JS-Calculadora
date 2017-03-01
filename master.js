var screen = document.getElementById('display');

function adder (optag, restag) {
  var operation = document.getElementById(optag);
  var operands = operation.innerHTML.split ("+");
  var result = document.getElementById(restag);
  var resultData = parseInt(operands[0]) ^ parseInt(operands[1]);

  result.innerHTML = "= " + resultData;
}
function key(number){
  //alert(number);
  screen.innerHTML=screen.innerHTML+number;
}

function del(){
  var display = document.getElementById("display");

  var borrado=display.innerHTML.slice(0,-1);
  display.innerHTML=borrado;
}

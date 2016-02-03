
function SacaBola() {

  $.get("numeros.php",{bolas: bolassacadas}, MuestraBola); 
} 

function MuestraBola(bola){
  bolassacadas.push(bola);
  document.getElementById('bola').innerHTML = bola;
}
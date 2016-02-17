
function SacaBola() {

  if(bolassacadas.length == 90){
    clearInterval(intervalo);
    alert("¡Ya han salido todas las bolas!");
  }
  else{
    var bolasJSON = JSON.stringify(bolassacadas); //Convertimos el array bolassacadas en json 
  	$.get("numeros.php",{bolas: bolasJSON}, MuestraBola); //Pasamos a php ese array
  }

  JuegoJugadoresSecundarios();

  if(numBingosAcertados > 0){
    alert("BINGO TERMINADO " + numBingosAcertados+ " HAN CANTADO BINGO");
    ParaBingo();
  }
} 

function MuestraBola(bola){
  bolassacadas.push(bola);//Añadimos la nueva bola sacada al array
  document.getElementById('bola').innerHTML = bola;//La mostramos
}

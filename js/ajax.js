
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
    MostrarVentanaFinJuego();
    ParaBingo();
  }
} 

function MuestraBola(bola){
  bolassacadas.push(bola);//Añadimos la nueva bola sacada al array
  document.getElementById('bola').innerHTML = bola;//La mostramos
}

function MostrarVentanaFinJuego() {
  swal({   title: "¡Juego Terminado!",   
    text: "Han ganado el bingo "+numBingosAcertados+" jugadores",   
    type: "success",   
    showCancelButton: false,   
    confirmButtonColor: "#A5DC86",   
    confirmButtonText: "Jugar de nuevo",   
    closeOnConfirm: true }, 
    function(){  ReiniciarBingo() });
}

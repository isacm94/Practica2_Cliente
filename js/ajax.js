
/**
* Envái una petición ajax para generar una bola aleatoriamente
*/
function SacaBola() {

  if(bolassacadas.length == 90){//Si se ha sacaso 90 bolas, se para de sacar
    clearInterval(intervalo);
  }
  else{
    var bolasJSON = JSON.stringify(bolassacadas); //Convertimos el array bolassacadas en json 
  	$.get("numeros.php",{bolas: bolasJSON}, MuestraBola); //Pasamos a php ese array
  }
} 

/**
* Muestra la bola generada en la página y comprueba si otros jugaores han ganado el bingo
*/
function MuestraBola(bola){
  if(numBingosAcertados == 0){
    bolassacadas.push(bola);//Añadimos la nueva bola sacada al array
    $("#bola").text(bola);//La mostramos

    JuegoJugadoresSecundarios();
  }
  else{//>0
    MostrarVentanaFinJuego();
  }
}

/**
* Muestra un ventana modal cuando se termina el juego, usando la libería sweetalert situada en la carpeta sweetalert-modal
*/
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

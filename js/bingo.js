
/**
* Función que tiene comprueba si el jugador principal ha ganado el bingo
*/
function CantaBingo(){

	//Generamos un array que contiene solo los números del cartón del jugador sin los huecos libres
	var bolas_15 = new Array();

	for (var i=0; i<3; i++){
		for (var j = 0; j < 9; j++){
					
			if(cartonPrincipal[i][j] != 'L'){
				bolas_15.push(cartonPrincipal[i][j].toString());
			}					
		}
	}

	if(esBingo(bolas_15)){
		numBingosAcertados++;
		MostrarVentanaBingoCorrecto();	
	}
	else
		MostrarVentanaBingoIncorrecto();

}

/**
* Función que le pasamos un cartón y comprueba si es ganador o no
* carton --> cartón a comprobar
*/
function esBingo(carton){

	var contBolas = 0;
	for(var i = 0; i < bolassacadas.length; i++){

		if(carton.indexOf(bolassacadas[i]) != -1){
			contBolas ++;
		}

	}

	if(contBolas >= 15)
		return true;
	else
		return false;
}

/**
* Calcula el premio que recibirá el jugador principal si gana
*/
function CalcularPremio(){

	return 0.80 *((numJugadores * valorCarton)/numBingosAcertados);
}

/**
* Muestra una ventana modal si el jugador principal pulsa el botón y gana, usando la libería sweetalert situada en la carpeta sweetalert-modal
*/
function MostrarVentanaBingoCorrecto() {
	ParaBingo();
	swal({   title: "¡Bingo Correcto!",   
		text: "Su premio es ",   
		type: "success",   
		showCancelButton: false,   
		confirmButtonColor: "#C1C1C1",   
		confirmButtonText: "Aceptar",   
		closeOnConfirm: true }, 
		function(){   SigueBingo(); });
}

/**
* Muestra una ventana modal si el jugador principal pulsa el botón y no gana, usando la libería sweetalert situada en la carpeta sweetalert-modal
*/
function MostrarVentanaBingoIncorrecto() {

	ParaBingo();
	swal({   title: "¡Bingo Incorrecto!",   
		text: "Siga jugando",   
		type: "warning",   
		showCancelButton: false,   
		confirmButtonColor: "#C1C1C1",   
		confirmButtonText: "Aceptar",   
		closeOnConfirm: true }, 
		function(){   SigueBingo(); });
}


/*JUGADORES SECUNDARIOS------------------------------------------------------------------------------------------*/


/**
* Genera los cartones de los jugadores secundarios
* numCartones --> Número de cartones a generar
*/
function getRestoCartones(numCartones){

	cartones = new Array(numCartones);

	for(var i = 0; i < numCartones; i++){
		var cart = getCarton();
		cartones[i] = cart;
	}
}

/**
* Genera un cartón de 15 números aleatorios 
*/
function getCarton(){
	var i = 0, rnd = "-1";

	var crtn = new Array();

	while(i < 15){

		rnd = getRandom(1, 90).toString();

		if(crtn.indexOf(rnd, 0) == -1){//No está repetido
			crtn[i] = rnd.toString();
			i++;		
		}
	}
	return crtn.sort();
}

/**
* Gestiona el juego de los jugadores segundarios
*/
function JuegoJugadoresSecundarios(){

	for(var i = 0; i < cartones.length; i++){
		
		if(esBingo(cartones[i])){
			numBingosAcertados++;
			MostrarVentanaJugador(i+1); //Le sumamos uno, porque empieza en 0
		}
	}

}

/**
* Ventana modal que se muestra cuando un jugador secundario gana el bingo, usando la libería sweetalert situada en la carpeta sweetalert-modal
*/
function MostrarVentanaJugador(jugador) {
	ParaBingo();
	swal({   title: "¡Bingo Correcto!",   
		text: "El jugador "+jugador+" ha ganado",   
		type: "success",   
		showCancelButton: false,   
		confirmButtonColor: "#A5DC86",   
		confirmButtonText: "Aceptar",   
		closeOnConfirm: true }, 
		function(){  SigueBingo(); });
}


/*INTERVALO BINGO------------------------------------------------------------------------------------------------*/

function ParaBingo(){
	clearInterval(intervalo);

	return intervalo;
}

function SigueBingo(){
	intervalo = setInterval("SacaBola()", milisegundos);
}

/**
* Recarga la página para empezar de nuevo el juego
*/
function ReiniciarBingo(){
	document.location.href = document.location.href;
}
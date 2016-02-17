//Funcion que tiene q comprobar si el jugador principal ha ganado el bingo
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

	//alert("Bolas: " + bolas_15);

	if(esBingo(bolas_15)){
		MostrarVentanaBingoCorrecto();
		numBingosAcertados++;
		//ReiniciarBingo();
	}
	else
		MostrarVentanaBingoIncorrecto();

}

//Función que le pasamos un carton y comprueba si es ganador o no
function esBingo(carton){

	var contBolas = 0;
	for(var i = 0; i < bolassacadas.length; i++){

		//alert("Carton: " + carton + " - Bola: " + bolassacadas[i] + " - Index: "+carton.indexOf(bolassacadas[i]))
		if(carton.indexOf(bolassacadas[i]) != -1){
			contBolas ++;
		}

	}

	//alert("Aciertos: "+ contBolas);

	if(contBolas >= 15)
		return true;
	else
		return false;
}

function CalcularPremio(){

	return 0.80 *((numJugadores * valorCarton)/numBingosAcertados);

}
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

//Genera los cartones de los jugadores secundarios
function getRestoCartones(numCartones){

	cartones = new Array(numCartones);

	for(var i = 0; i < numCartones; i++){
		var cart = getCarton();
		cartones[i] = cart;

		//alert("Cartón " + i + ': '+cartones[i]);
	}
}

//Genera un cartón de 15 números aleatorios 
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

	//alert(carton.sort());


	return crtn.sort();
}

function JuegoJugadoresSecundarios(){

	for(var i = 0; i < cartones.length; i++){
		//alert("jug " + cartones[i]);
		if(esBingo(cartones[i])){
			//alert("¡El jugador "+ (i+2) +" ha ganado el bingo!");
			numBingosAcertados++;
		}
	}
}

/*INTERVALO BINGO------------------------------------------------------------------------------------------------*/
function ParaBingo(){
	clearInterval(intervalo);

	return intervalo;
}

function SigueBingo(){
	intervalo = setInterval("SacaBola()", milisegundos);
}
function ReiniciarBingo(){
	document.location.href = document.location.href;
}
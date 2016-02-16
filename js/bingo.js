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
	ventanaBingoCorrecto = window.open("bingoCorrecto.html", "", "width=400px, height=250px");
	ventanaBingoCorrecto.moveTo(screen.width/2-150,screen.height/2-150); 

	/**ventanaBingoCorrecto.document.write("<center><h1>¡BINGO CORRECTO!</h1></center><br>");
	ventanaBingoCorrecto.document.write("<center><input type='submit' id='cerrarBingoCorrecto' value='Aceptar' onclick='CerrarVentana()' ></center>");

	ventanaBingoCorrecto.document.write("<script>function CerrarVentana(){window.close();}</script>");*/
}

function MostrarVentanaBingoIncorrecto() {
	intervalo = ParaBingo();

	ventanaBingoIncorrecto = window.open("bingoIncorrecto.html", "", "width=430px, height=250px");
	ventanaBingoIncorrecto.moveTo(screen.width/2-150,screen.height/2-150); 

	/*ventanaBingoIncorrecto.document.write("<center><h1>¡BINGO INCORRECTO!</h1>");
	ventanaBingoIncorrecto.document.write("<h2>¡Siga jugando!</h3>");
	ventanaBingoIncorrecto.document.write("<input type='submit' id='cerrarBingoCorrecto' value='Aceptar' onclick='CerrarVentana()' ></center>");

	ventanaBingoIncorrecto.document.write("<script>function CerrarVentana(){window.close(); }</script>");*/
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
			alert("¡El jugador "+ (i+2) +" ha ganado el bingo!");
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
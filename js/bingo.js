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

	if(CompruebaBingo(bolas_15)){
		MostrarVentanaBingoCorrecto();
		//ReiniciarBingo();
	}
	else
		MostrarVentanaBingoIncorrecto();

}

//Función que le pasamos un carton y com prueba si es ganador o no
function CompruebaBingo(carton){

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

function MostrarVentanaBingoCorrecto() {
	ventanaBingoCorrecto = window.open("", "", "width=400px, height=250px");
	ventanaBingoCorrecto.moveTo(screen.width/2-150,screen.height/2-150); 

	ventanaBingoCorrecto.document.write("<center><h1>¡BINGO CORRECTO!</h1></center><br>");
	ventanaBingoCorrecto.document.write("<center><input type='submit' id='cerrarBingoCorrecto' value='Aceptar' onclick='CerrarVentana()' ></center>");

	ventanaBingoCorrecto.document.write("<script>function CerrarVentana(){window.close();}</script>");
}

function MostrarVentanaBingoIncorrecto() {
	ventanaBingoIncorrecto = window.open("", "", "width=430px, height=250px");
	ventanaBingoIncorrecto.moveTo(screen.width/2-150,screen.height/2-150); 

	ventanaBingoIncorrecto.document.write("<center><h1>¡BINGO INCORRECTO!</h1>");
	ventanaBingoIncorrecto.document.write("<h2>¡Siga jugando!</h3>");
	ventanaBingoIncorrecto.document.write("<input type='submit' id='cerrarBingoCorrecto' value='Aceptar' onclick='CerrarVentana()' ></center>");

	ventanaBingoIncorrecto.document.write("<script>function CerrarVentana(){window.close();}</script>");
}

function CreaCarton(){

	var crtn = Array();

	var i = 0;
	var rnd;

	while(i < 15){

		rnd = getRandom(1, 98);

		if(crtn.indexOf(rnd, 0) == -1){//No está repetido
			crtn[i] = rnd;
			i++;		
		}
	}

	return crtn;
}

function ReiniciarBingo(){
	document.location.href = document.location.href;
}
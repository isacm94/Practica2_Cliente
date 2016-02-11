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

	if(CompruebaBingo(bolas_15))
		alert("¡BINGO CORRECTO!");
	else
		alert("¡BINGO INCORRECTO! Siga jugando");

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

	alert("Aciertos: "+ contBolas);

	if(contBolas >= 15)
		return true;
	else
		return false;
}


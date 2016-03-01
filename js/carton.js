
var cartonPrincipal;//Cartón del jugador principal
var cartones;//Cartones de los jugadores secundarios

/**
* Función principal de la aplicación, empieza el juego.
**/
function Jugar(){
	if($("#numJugadores").val() == null || $("#numJugadores").val() == "")
		alert("¡Error! Introduzca el número de jugadores")
	else if($("#numJugadores").val() < 5 || $("#numJugadores").val() > 20)
		alert("¡Error! El número de jugadores debe estar entre 5 y 20")
	else if(isNaN($("#numJugadores").val())){		
		alert("¡Error! El valor del número de jugadores debe ser númerico")
	}

	else{
		$('#contenido').attr('style', '');//Mostramos el contenido
		$('#pre-contenido').hide();//Ocultamos la imagen de inicio
		$('#jugar').attr("disabled", true);//Deshabilita botón

		//Guarda el nº de jugadores y el valor del cartón introducido
		numJugadores = $("#numJugadores").val();
		valorCarton = $("#valorcarton").val();		
		valorCarton = valorCarton.substring(0, 1);
		valorCarton = parseInt(valorCarton);
		numJugadores = parseInt(numJugadores);
		
		MostrarCarton(); //Muestra el cartón con el que jugaremos

		getRestoCartones(numJugadores - 1); //Situada en bingo.js
		
		intervalo = setInterval("SacaBola()", milisegundos);//Situada en ajax.js
		
	}
}

/**
* Muestra el cartón del jugador principal
**/
function MostrarCarton(){
	cartonPrincipal = getCartonPrincipal();
	var id= "";
	
		for (var i=0; i<3; i++){
			for (var j = 0; j < 9; j++){

				id = '#' + i.toString() + j.toString();
					
				if(cartonPrincipal[i][j] == 'L'){
					$(id).addClass("imgHuecoLibre");
				}
				
				else {//Si no viene vacío, mostramos el número
					$(id).text(cartonPrincipal[i][j]);
				}
					
			}
		}
}

/**
* Genera un carton de 3x9 con números sin repetir del 1 al 90
**/
function getCartonPrincipal(){
	var carton = new Array(3);

	carton[0] = new Array(9);
	carton[1] = new Array(9);
	carton[2] = new Array(9);

	//Creamos las columnas con los números aleatorios
	var columna0 = getColumna(1, 9);
	var columna1 = getColumna(10, 19);
	var columna2 = getColumna(20, 29);
	var columna3 = getColumna(30, 39);
	var columna4 = getColumna(40, 49);
	var columna5 = getColumna(50, 59);
	var columna6 = getColumna(60, 69);
	var columna7 = getColumna(70, 79);
	var columna8 = getColumna(80, 90);

	//Guardamos las columnas en el array
	for (i = 0; i < 3; i++)
	{
		for (j = 0; j < 9; j++)
		{
			switch(j) {
			    case 0:{			    		
			        	carton[i][j] = columna0[i];
			    	}
			        break;
			    case 1:{			    		
			        	carton[i][j] = columna1[i];
			    	}
			        break;
			    case 2:{
			        	carton[i][j] = columna2[i];
			    	}
			        break;
			    case 3:{
			        	carton[i][j] = columna3[i];
			    	}
			        break;
			    case 4:
			        {
			        	carton[i][j] = columna4[i];
			    	}
			        break;
			    case 5:
			        {
			        	carton[i][j] = columna5[i];
			    	}
			        break;
			    case 6:
			    	{
			        	carton[i][j] = columna6[i];
			    	}
			    	break;
			    case 7:
			    	{
			        	carton[i][j] = columna7[i];
			    	}
			        break;
			    case 8:
			    	{
			        	carton[i][j] = columna8[i];
			    	}
			        break;
			}
			
		}
	}

	return getCartonConHuecosLibres(carton);
}

/**
* Genera una columna de 3 celdas con números sin repetir
* min ---> número mínimo que puede generar
* max ---> número máximo que puede generar
*/
function getColumna(min, max){

	var columna = Array(3);
	var rnd = -1 ;
	var i = 0;

	while(i < 3) {
		
		rnd = getRandom(min, max);

		if(columna.indexOf(rnd, 0) == -1){//No está repetido
			columna[i] = rnd;
			i++;
		}

	}
	return columna.sort();
}


/**
*Establece 4 espacios libres en cada fila del cartón
* carton --> cartón del jugador principal
*/
function getCartonConHuecosLibres(carton){

	var HuecosLibres;

	for (var i = 0; i < 3; i++){
		HuecosLibres = get4NumAleat(); //Devuelve 4 posiciones aleatorias sin repetir para ponerlo vacío
		
		for (var j = 0; j < 9; j++){

			if(HuecosLibres.indexOf(j, 0) != -1 && i != 2){//Si por la j está en el array de huecos libres, le ponemos L
				carton[i][j] = 'L';
			}		
		}
	}
	
	carton[2] = ultimafila(carton)
	return carton;
}

/**
* Genera un array de 4 números sin repetir, para crear cada fila.
*/
function get4NumAleat(){

	var i = 0, rnd = -1;

	var NumerosSinRepetir = new Array();

	while(i < 4){

		rnd = getRandom(0, 8);

		if(NumerosSinRepetir.indexOf(rnd, 0) == -1){//No está repetido
			NumerosSinRepetir[i] = rnd;
			i++;		
		}
	}

	return NumerosSinRepetir;

}

/**
* Devuelve un número aleatorio
* min ---> número mínimo que puede generar
* max ---> número máximo que puede generar
*/
function getRandom(min, max) {
    return Math.round(Math.random()*(max-min)+parseInt(min));
}


/**
* Función que se ejecuta cuando se pulsa sobre un número. Muestra una X sobre él
* idx --> ID de la celda(div)
*/
function TacharCelda(idx){

	//Añade el # al id
	var id = "";
	if(idx.toString().length == 2)
		id = "#" + idx.toString();
	else if(idx.toString().length == 1)//Cuando es 1, 2, 3...
		id = "#0" + idx.toString();

	//No se puede tachar si tiene es un hueco libre
	if($(id).hasClass("tachado") && ! $(id).hasClass("imgHuecoLibre")){//Si está tachado, le quita el tachado.
		$(id).removeClass("tachado");
	
	}
	else if(! $(id).hasClass("imgHuecoLibre")){//Sino está tachado, lo pone tachado. 
		$(id).addClass('tachado');
	}

}

/**
* Función que establece 4 huecos libres en la última fila del cartón, teniendo en cuenta que en una misma columna no puede existir 3 huecos libres.
* carton --> Cartón generado para el jugador principal
*/
function ultimafila(carton){
	var iguales=[];

	var fila1 = carton[0];
	var fila2 = carton[1];
	var fila3 = carton[2];

	
	//Guardamos en un array si una posicion de la ultima fila se puede poner vacía, es decir, si las dos valores de arriba no son iguales	
	for(var i = 0; i < 9; i++){
		if(fila1[i] == fila2[i])//Si son iguales fila1 y fila2, no se puede poner espacio libre
			iguales[i] = true;
		else
			iguales[i] = false;
 	}


 	var posHuecosLibre;
	i = 0;
	var contHuecosLibres = 0;

	//Recorremos la última fila hasta rellenarla con 4 huecos libres
	while(contHuecosLibres < 4){
		posHuecosLibre = getRandom(1, 8);
		
		if(iguales[i] == false && posHuecosLibre == i && fila3[i] != 'L'){//Hay q poner hueco libre y se puede
			contHuecosLibres++;
			fila3[i] = 'L';		
		}

		if(i == 8)
			i = 0;
		else
			i++;
	}
	return fila3;
}





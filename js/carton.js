
var cartonPrincipal;//Carton del jugador principal

function Jugar(){
	if($("#numJugadores").val() == null || $("#numJugadores").val() == "")
		alert("¡Error! Introduzca el número de jugadores")
	else if($("#numJugadores").val() < 5 || $("#numJugadores").val() > 20)
		alert("¡Error! El número de jugadores estar entre 5 y 20")
	else{
		$('#contenido').attr('style', '');//Mostramos el contenido
		$('#pre-contenido').hide();
		$('#jugar').attr("disabled", true);
		
		//var milisegundos = 2000 //1000 = 1 segundo
		//intervalo = setInterval("SacaBola()", milisegundos);
		MostrarCarton(); //Muestra el cartón con el que jugaremos
		
		var milisegundos = 200 //1000 = 1 segundo
		intervalo = setInterval("SacaBola()", milisegundos);
		
	}
}

function MostrarCarton(){
	cartonPrincipal = getCarton();
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

//Genera un carton de 3x9 con números sin repetir del 1 al 90
function getCarton(){
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

//Genera una columna de 3 celdas con números sin repetir
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


//Establece 4 espacios libres en cada fila del cartón
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

//Genera un array de 4 números sin repetir 
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

function getRandom(min, max) {
    return Math.round(Math.random()*(max-min)+parseInt(min));
}

function TacharCelda(idx){


	var id = "";

	if(idx.toString().length == 2)
		id = "#" + idx.toString();
	else if(idx.toString().length == 1)
		id = "#0" + idx.toString();

	if($(id).hasClass("tachado") && ! $(id).hasClass("imgHuecoLibre")){
		$(id).removeClass("tachado");
	
	}
	else if(! $(id).hasClass("imgHuecoLibre")){
		$(id).addClass('tachado');
	}

}


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





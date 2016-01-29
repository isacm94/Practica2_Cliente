function MostrarCarton(){

	if($("#numJugadores").val() == null || $("#numJugadores").val() == "")
		alert("¡Error! Introduzca el número de jugadores")
	else if($("#numJugadores").val() < 5 || $("#numJugadores").val() > 20)
		alert("¡Error! El número de jugadores debe ser un campo númerico")
	else{
		$('#contenido').attr('style', '');//Mostramos el contenido
		$('#pre-contenido').hide();

		alert(getCarton());
	}
}

function getCarton(){
	var carton = new Array(3);

	carton[0] = new Array(9);
	carton[1] = new Array(9);
	carton[2] = new Array(9);

	for (i=0; i<3; i++)
	{
		for (j=0; j<9; j++)
		{
			switch(expression) {
    case n:
        code block
        break;
    case n:
        code block
        break;
    default:
        default code block
}
			carton[i][j] = getRandom(1, 99)
		}
	}

	return carton;
}

function getRandom(min, max) {
         return Math.round(Math.random()*(max-min)+parseInt(min));
         }
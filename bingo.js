function MostrarCarton(){

	if($("#numJugadores").val() == null || $("#numJugadores").val() == "")
		alert("¡Error! Introduzca el número de jugadores")
	else if($("#numJugadores").val() < 5 || $("#numJugadores").val() > 20)
		alert("¡Error! El número de jugadores debe ser un campo númerico")
	else{
		$('#contenido').attr('style', '');//Mostramos el contenido
		$('#pre-contenido').hide();
	}
}
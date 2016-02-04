
function SacaBola() {

	var bolas = JSON.stringify(bolassacadas); //Convertimos el array bolassacadas en json 
  	$.get("numeros.php",{bolas: bolas}, MuestraBola); //Pasamos a php ese array
} 

function MuestraBola(bola){
  bolassacadas.push(bola);//Añadimos la nueva bola sacada al array
  document.getElementById('bola').innerHTML = bola;//La mostramos
}
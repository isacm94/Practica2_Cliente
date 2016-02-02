function SacaBola() {

  //alert("hola");
  $.get("numeros.php",null, MuestraBola); 
} 

function MuestraBola(bola){
  alert(bola);
}
<?php
$bolassacadas = json_decode($_GET['bolas']); //Convertimos el array bolas que está en json a php
	
do{
	$bola = rand(1, 90);
}while(in_array($bola, $bolassacadas));//Saca bola mientras esté repetida

echo $bola; //Devuelve la bola generada
	
	

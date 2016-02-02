<?php

	$bolasBingo = Array();

	do{
		$bola = rand(1, 90);
	}while(in_array($bola, $bolasBingo));//Contínua mientras el número generado esté en el array, ed, esté repetido

	while($i < 90){

		$rnd = rand(1, 90);

		if(! in_array($rnd, $bolasBingo)){
			$bolasBingo[$i] = 
		}
	}
	
	echo $bola;
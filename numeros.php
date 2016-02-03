<?php

	do{
		$bola = rand(1, 5);
	}while(in_array($rnd, $_GET['bolas']));

	echo $bola;
	
	

function analex(file){	
	var automaton2 = automaton;
	//variable que va a guardar el apuntador al stream del archivo
	if(!file) { // si el apuntador del archivo es nulo significa que no se encontró
//		fprintf(stderr,"Error: archivo no encontrado\n");
		return -1;
	}
	
	var i, j; //índices para localizar los estados en el autómata
	var anti, antj; //índices para localizar los estados anteriores en el autómata
	var c; //variable que guarda el caracter que se está leyendo
					 //se declara como unsigned para que pueda guardar caracteres del ASCII extendido
	var buffer = ""; //buffer que va a guardar las palabras, comentarios, etc. mientras se analizan
	var repetir = 0; //se usa para cuando es necesario repetir una lectura
	
	i = 0; //se inicializa a 0 i porque se inicia en el estado de leyendo
	j = "";
	anti = 0; //se inicializa a 0 también porque en un principio no hay nada
	antj = 0; //se inicializa a 0 también
	
	//
	var fin_constante_alfanum = 0; //bandera que indica que se ha terminado una constante alfanumérica
	//
	
	var fileLength = 0;
	while(repetir || fileLength < file.length-1 ) { //ciclo principal que itera mientras haya un caracter qué leer
		c = file[fileLength];											  //el caracter se guarda en c
													  //mediante corto circuito se puede hacer que se repita el ciclo sin leer
		
		if(repetir) { //en caso de que se active la bandera para repetir la lectura, se cambia la bandera a 0 para que no se cicle
			repetir = 0;
		}
		

		j =  c.charCodeAt(0); //se transforma el caracter a su código ASCII
		i = automaton2[i][j]; //se obtiene el índice del siguiente estado
		
		if(i < 0) { //en caso de que se haya leído un caracter no válido, el analex termina su ejecución
			document.write("Error: caracter no válido encontrado --> (ASCII:%d)\n",j);
			document.write("Los caracteres de ASCII extendido solamente pueden estar en:\n");
			document.write("a) constantes alfanuméricas\nb) comentarios\n");
			return -3;
		}

		if(i != 0) { //si i no es cero, entonces se guarda el caracter leído en el buffer
			
			//Caso especial de operadores alfanuméricos que delimitan constantes alfanuméricas
			if(caso_especial_inicio(c,i) != 1) {
				buffer += c; //se guarda el caracter actual en el buffer
			}
		}
		
		if(anti != 0 && i == 0) { //transición a cero desde un estado que no era cero: se llegó a un estado terminal
			if(imprimir(buffer,anti) < 0) { //se manda imprimir el buffer y se evalúa si hubo error 
				return -4; //hubo un error, el mensaje debe haber sido impreso donde se ocasionó
			}
			//Caso especial de operadores alfanuméricos, cuando terminan una constante alfanumérica
			if(fin_constante_alfanum == 1) {

  		 //       $("div#result").append(buffer + " String Literal<br>");//estos operadores se imprimen directamente y no se guardan en el buffer

			}
			else if(fin_constante_alfanum == 2) {
		//	alert(buffer);
  		  //	      $("div#result").append(c + "Operador Alfa num&eacute;rico");
			}
			buffer = "";
			repetir = 1; //se tiene que volver a leer el caracter (por la transición con Epsilon)
		}
		
		fin_constante_alfanum = caso_especial_final(c,i); //se evalúa si se aproxima el fin de una cadena alfanumérica

		anti = i; //se guarda el índice i (estado) en anti para la siguiente vuelta
		antj = j; //se guarda el índice j (caracter) en antj para la siguiente vuelta

		if(!repetir)fileLength++;
	}
	if(imprimir(buffer,anti)<0) { //se manda imprimir el último caracter que fue leído
		return -4; //se manda un error en caso de que lo haya
	}
	

	return 0; //el programa termina satisfactoriamente.
}


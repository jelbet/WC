// Funciones para el analex de C

var symbol_table = {"tabla":[{"palabras_reservadas":[]},
			     { "identificadores":[]}]};
var num_estados = 71;
var num_caracteres = 256;
var tamano_buffrer = 1024;

var automaton;

var palabras_reservadas = new Array("auto","asm","break","case","char","const","continue","default","do","double","else","enum", "extern","float","for","goto","if","int","inline","long","register","return","short","signed",
						       "sizeof","static","struct","switch","typedef","union","unsigned","void","volatile","while");
                               
var palabras_reservadas_num = 34;


function obtener_estado(i) {
    var estado =  "";
    switch(i) {
		case 1://Palabra Reservada o Identificador			
			estado = "Identificador<br/>";		
			break;
		case 2://N&uacute;mero entero		
			estado = "N&uacute;mero Entero<br/>";		
			break;
		case 3://N&uacute;mero Real		
			estado = "N&uacute;mero Real<br/>";		
			break;
		case 4://N&uacute;mero Cient&iacute;fico		
			estado = "N&uacute;mero en Notaci&oacute;n Cient&iacute;fica<br/>";		
			break;
		case 5://N&uacute;mero Hexadecimal		
			estado = "N&uacute;mero Hexadecimal<br/>";		
			break;
		case 6://Operador de Suma 6	
			estado = "Operador de Suma<br/>";		
			break;
		case 7://Operador de Incremento Unitario	
			estado = "Operador de Incremento Unitario<br/>";		
			break;
		case 8://Operador de Asignaci&oacute;n de Suma	
			estado = "Operador de Asignaci&oacute;n de Suma<br/>";		
			break;
		case 9://Operador de Resta	
			estado = "Operador de Resta<br/>";		
			break;
		case 10://Operador de Decremento Unitario	
			estado = "Operador de Decremento Unitario<br/>";		
			break;
		case 11://Operador de Asignaci&oacute;n de Resta	
			estado = "Operador de Asignaci&oacute;n de Resta<br/>";		
			break;
		case 12://Operador de Divisi&oacute;n	
			estado = "Operador de Divisi&oacute;n<br/>";		
			break;
		case 13://Comentario Sencillo	
			estado = "Comentario Sencillo<br/>";		
			break;
		case 15://Operador de Asignaci&oacute;n de Divisi&oacute;n	
			estado = "Operador de Asignaci&oacute;n de Divisi&oacute;n<br/>";		
			break;
		case 16://Operador de Multiplicaci&oacute;n	
			estado = "Operador de Multiplicaci&oacute;n<br/>";		
			break;
		case 17://Operador de Asignaci&oacute;n de Multiplicaci&oacute;n	
			estado = "Operador de Asignaci&oacute;n de Multiplicaci&oacute;n<br/>";		
			break;
		case 18://Operador Relacional Mayor Que	
			estado = "Operador Relacional Mayor Que<br/>";		
			break;
		case 19://Operador Relacional Mayor o Igual Que	
			estado = "Operador Relacional Mayor o Igual Que<br/>";		
			break;
		case 20://Operador de Desplazamiento a Derecha	
			estado = "Operador de Desplazamiento a Derecha<br/>";		
			break;
		case 21://Operador de Asignaci&oacute;n de Desplazamiento a Derecha	
			estado = "Operador de Asignaci&oacute;n de Desplazamiento a Derecha<br/>";		
			break;
		case 22://Operador Selector Indirecto de Miembro	
			estado = "Operador Selector Indirecto de Miembro<br/>";		
			break;
		case 23://Operador Relacional Menor Que	
			estado = "Operador Relacional Menor Que<br/>";		
			break;
		case 24://Operador Relacional Menor o Igual Que	
			estado = "Operador Relacional Menor o Igual Que<br/>";		
			break;
		case 25://Operador de Desplazamiento a Izquierda	
			estado = "Operador de Desplazamiento a Izquierda<br/>";		
			break;
		case 26://Operador de Asignaci&oacute;n de Desplazamiento a Izquierda	
			estado = "Operador de Asignaci&oacute;n de Desplazamiento a Izquierda<br/>";		
			break;
		case 27://Operador de Asignaci&oacute;n	
			estado = "Operador de Asignaci&oacute;n<br/>";		
			break;
		case 28://Operador Relacional de Igualdad	
			estado = "Operador Relacional de Igualdad<br/>";		
			break;
		case 29://Negaci&oacute;n L&oacute;gica	
			estado = "Negaci&oacute;n L&oacute;gica<br/>";		
			break;
		case 30://Operador Relacional de Desigualdad	
			estado = "Operador Relacional de Desigualdad<br/>";		
			break;
		case 31://Operador M&oacute;dulo o Resto	
			estado = "Operador M&oacute;dulo o Resto<br/>";		
			break;
		case 32://Operador de Asignaci&oacute;n de M&oacute;dulo	
			estado = "Operador de Asignaci&oacute;n de M&oacute;dulo<br/>";		
			break;
		case 33://Operador de Introducci&oacute;n	
			estado = "Operador de Introducci&oacute;n<br/>";		
			break;	
		case 34://Operador de Acceso a Ámbito 	
			estado = "Operador de Acceso a Ámbito<br/>";		
			break;
		case 35://Operador de Selecci&oacute;n de Miembros	
			estado = "Operador de Selecci&oacute;n de Miembros<br/>";		
			break;
		case 36://Operador Apuntador a Miembro	
			estado = "Operador Apuntador a Miembro<br/>";		
			break;
		case 37://Operador de Complemento a Uno	
			estado = "Operador de Complemento a Uno<br/>";		
			break;
		case 38://Operador XOR	
			estado = "Operador XOR<br/>";		
			break;
		case 39://Operador de Asignaci&oacute;n de XOR entre bits	
			estado = "Operador de Asignaci&oacute;n de XOR entre bits<br/>";		
			break;	
		case 40://Operador OR	
			estado = "Operador OR<br/>";		
			break;
		case 41://Operador OR L&oacute;gico	
			estado = "Operador OR L&oacute;gico<br/>";		
			break;
		case 42://Operador de Asignaci&oacute;n de OR entre bits OR	
			estado = "Operador de Asignaci&oacute;n de OR entre bits<br/>";		
			break;
		case 43://Operador AND	
			estado = "Operador AND<br/>";		
			break;
			// 44
		case 44://Operador AND L&oacute;gico	
			estado = "Operador AND L&oacute;gico<br/>";		
			break;
			// 45	
		case 45://Operador de Asignaci&oacute;n de AND entre bits	
			estado = "Operador de Asignaci&oacute;n de AND entre bits<br/>";		
			break;
		case 46://Operador Apuntador a Miembro	
			estado = "Operador Apuntador a Miembro<br/>";		
			break;
		case 47://Operador Alfanum&eacute;rico
			estado = "Operador Alfanum&eacute;rico<br/>";		
			break;
		case 48://Operador de Preproceso	
			estado = "Operador de Preproceso<br/>";		
			break;
		case 49://S&iacute;mbolo de Puntuaci&oacute;n ,
		case 50://S&iacute;mbolo de Puntuaci&oacute;n	;
			estado = "S&iacute;mbolo de Puntuaci&oacute;n<br/>";		
			break;
		case 51://Operador de Agrupamiento [
		case 52://Operador de Agrupamiento ]
		case 53://Operador de Agrupamiento {
		case 54://Operador de Agrupamiento }
		case 55://Operador de Agrupamiento (
		case 56://Operador de Agrupamiento )
			estado = "Operador de Agrupamiento<br/>";		
			break;
		case 58://Operador Alfanum&eacute;rico	
			estado = "Operador Alfanum&eacute;rico<br/>";		
			break;
		case 59://Operador de Expresi&oacute;n Condicional
			estado = "Operador de Expresi&oacute;n Condicional<br/>";		
			break;
		case 65://@ 	
			estado = "Constante Alfanum&eacute;rica<br/>";
			break;
		case 64://si el programa termina con este estado, entonces hay un error
		case 66:
		case 67:
		case 68:
			estado = null; //se devuelve nulo para saber que hubo un error
			break;
		case 70:
			estado = "Comentario Largo<br/>";
			break;
		case 14://si el programa termina con este estado, entonces hay un error
		case 69:
			estado = null;
			break;
		default:
			estado = ""; //en dado caso de que se obtenga un &iacute;ndice inválido, no se regresa ning&uacute;n estado
			break;
    }
    return estado;
}

function es_palabra_reservada(palabra) {
    //Checa contra todas las palabras reservadas. Regresa 1 si es palabra reservada,
    //regresa 0 si no lo es.
    for(var i = 0; i < palabras_reservadas_num; i++) {
        if (palabra == palabras_reservadas[i]) {
            return 1;
        }
    }
    return 0;
}

function caso_especial_inicio(caracter, indice) {
    if (caracter == '"' && indice == 47 || caracter == '\'' && indice == 58) {
        return 1;//Si estan al inicio de una cadena
    }
    
    if(caracter == '"' && indice == 65 || caracter == '\'' && indice == 65) {
        return 1;//Si esta en el final de la cadena
    }
    return 0;
}

function caso_especial_final(caracter, anti) {
    if (caracter == '"' && anti == 65) {
        return 1;//Comilla doble
    }
    else if (caracter == '\'' && anti == 65) {
        return 2;//Comilla sencilla
    }
    return 0;
}

function imprime_palabras_reservadas() {
    var lista_de_palabras_reservadas;
    for(var i = 0; i < palabras_reservadas_num; i++) {
        lista_de_palabras_reservadas += ", " + palabras_reservadas[i];
    }
    return lista_de_palabras_reservadas;
}

function imprimir(texto, index) {
    var estado = obtener_estado(parseInt(index));
    var ident = 1;
    if (estado == null) {
        return "-1";//Si hubo error
    }
    
    if (index == 1) {
        if (es_palabra_reservada(texto) == 1) {
            estado = "Palabra Reservada";
	    symbol_table.tabla[0].palabras_reservadas.push({"estado" : estado, "texto" : texto});

        } else {


		$("div#result").append(texto + " - " + estado +"<br>");        
		ident = 0;
	    symbol_table.tabla[1].identificadores.push({"estado" : estado, "texto" : texto});


    //        var divFile2 = document.getElementById("file2")
      //      divFile2.innerHTML += texto + "<br/>";
        } 
    }
    
    if(estado != "" && ident) {
//	document.write(texto + " - " + estado +"<br>");        
       // var divFile = document.getElementById("file")
        ///divFile.innerHTML += texto + estado + "<br/>";
	    symbol_table.tabla[1].identificadores.push({"estado" : estado, "texto" : texto});

	        
	$("div#result").append(texto + " - " + estado +"<br>");
        
//        var divStdOut = document.getElementById("stdout")
  //      divStdOut.innerHTML += texto + estado + "<br/>";
    }
    return "0";
}



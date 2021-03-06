$(document).ready(function(){
	/*Vars*/
	//var names in case their selectors in the DOM are changed
	var terminalDialog = $("div#terminal-dialog");
	var compileButton = $("input#compile");
	var textEditor = $("textarea#text");
	
	/*Initial state*/
	//Stuff done since the beginning
	terminalDialog.dialog({title:"Terminal",autoOpen:false,modal:true,width:"600px",height:400,resize:false});
	textEditor.tabby();
	
	/*Funciones usadas por el parser y cosas así*/
	var terminallog = function(message){
		$("div#result").append(message+"<br/>");
	}
	
	function isInt(n) {
	   return typeof n === 'number' && parseFloat(n) == parseInt(n) && !isNaN(n);
	}

	
	//This button triggers the compilation process
	compileButton.click(function(){
		
		//Vaciar la terminal
		$("div#result").empty();
		//Mostrar la terminal
		terminalDialog.dialog("open");
		//Obtener el codigo de la textarea
		var text = textEditor.val();
		//Creo que esto es como lo del prompt de al terminal
		//$("div#terminal-dialog").append("$ root@wc-test/ - ./Analex <br><br>");
		//Vaciar tabla de símbolos
		myTable = {};
		//Parser. u don't say
		
		var ast = ansic_ast.parse(text);
//		var sem = semantic.parse(text);
		var parsing = ansic.parse(text);
		
		//El arbol primitivo, no recuerdo si se hizo bien
		//document.write(tree);
		//Feedback del parseo
		console.log('Parseo correcto: ', parsing);
		//Feedback del codigo traducido a JS
		console.log('Código en Javascript: ', code);
		if (parsing){
			try{
				eval(code);
				var result = eval("main()");
				
				if(typeof result === "string"){
					result = '"' + result + '"';
				}
				//alert(result);
				terminallog("Execution succeded.");
				if(typeof result === "undefined"){
					console.log("Table", myTable);
					terminallog("Function main returned nothing.");
				}else{
					if(myTable["main"].typeValue == myTable[result].typeValue){
						terminallog("Function main returned: " + result + ".");
					}else{
						terminallog(result + " is not a valid return value for function main.");
					}
				}
			}catch(err){
				terminallog("Error: " + err.message + ".");
				terminallog("Excecution Stopped.");
			}
		}else{
			$("div#result").append(parsing);
		}
		text = "";
	});
});


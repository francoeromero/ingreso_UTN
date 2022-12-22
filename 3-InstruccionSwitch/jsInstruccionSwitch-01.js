function mostrar()
{
	//tomo el mes
	let mes = document.getElementById("txtIdMes").value; // var mesDelAño =txtIdMes.value;
	

	switch(mes){
		case "Enero" : // condicional mes == "Enero" 
			alert("Que comiences bien el año!!!"); //Instrucciones
			break;//finalizar bloque
		case "Marzo" :
			alert("A clases!!");
			break;
		case "Julio" :
			alert("Se viene las vacaciones!!");
			break;
		case "Diciembre" :
			alert("Felices fiestas!!");
			break;
	}

	// if(mes == "Enero"){
	// 	alert("Que comiences bien el año!!!");
	// }
	// else if(mes == "Marzo"){
	// 	alert("A clases!!");
	// }
	// else if (mes == "Julio"){
	// 	alert("Se viene las vacaciones!!");
	// }
	// else if(mes == "Diciembre"){
	// 	alert("Felices fiestas!!");
	// }
	// else {
	// 	alert("Mes común")
	// }

}

/*

LA DIFERENCIA ENTRE SWITCH E IF

Como puedes ver, la declaración switch es más concisa y fácil de leer, especialmente cuando hay un gran número de condiciones que verificar. Sin embargo, las declaraciones if son más flexibles y pueden manejar una gama más amplia de condiciones.

Es importante elegir la declaración de control adecuada para el trabajo. En general, switch es una buena opción cuando hay un número limitado de valores discretos que puede tomar una expresión, y if es una buena opción cuando se tienen condiciones más complejas que no se pueden expresar fácilmente con una declaración switch.


Como vemos en el codigo estamos evaluando a la variable mes para condicionarlo en diferentes bloques, en situaciones como esta vamos a usar SWITCH

"En el caso que la variables "variable" hago esto" y voy a tener casos (case)

switch(variable){
		case "cadena" :
			accion de lo que sucedera si es "cadena"
			break;
	}

SWITCH ES UNA SENTENCIA 
Define varios valores posibles para una prueba de valor a traves de casos (case).

switch (parametro o variable){
	caso 1:
	instrucciones; 
	break; // finalizar caso

	caso 2:
	instrucciones;
	break;
	
}

*/


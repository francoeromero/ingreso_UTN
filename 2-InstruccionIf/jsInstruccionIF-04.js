function mostrar()
{
	let edad;

	edad = parseInt(document.getElementById("txtIdEdad").value);

	if( edad >= 13 && edad <= 17){
		alert("Adolescente");
	}else {
		alert("Usted no es Adolescente");
	}

	
}

/*
 otra forma de resolverlo

 if(edad == 13){
		alert("adolescente");
	}
	if else(edad == 14){
		alert("adolescente");
	}
	if else(edad == 15){
		alert("adolescente");
	}
	if else(edad == 16){
		alert("adolescente");
	}
	else(edad == 17){
		alert("adolescente")
	}

el else if se pueden repetir las veces que quieras, no es muy eficiente este resultado pero si funciona 

otra forma: 

if (edad >= 13){
	if(edad <= 17){
		alert("Es adolescente");
	}
}

Aca estoy agarrando un rango de edad [13 ; 17]

otra forma es hacer una condicion COMPUESTA:

aplicamos un operador logico en el medio && o || 
son conectivos binarios

OR = ||
AND = &&
		OR	AND			
F	F	F	F	
F	V	V	F
V	F	V	F
V	V	V	V

Cual de los dos uso el OR o el AND?
Nos fijamos la tabla, primero yo quiero que los dos me den verdadero, pero que si uno es verdadero y el otro falso, que no me de verdadero igual
sino por ejemplo pusiera 12, me daria (FALSO VERDADERO) y si nos fijamos en la tabla en OR  puede redondearlo a verdadero y eso no quiero, porque entonces al poner 12 me saltaria la alerta como adolescente.
Entonces me viene mejor el AND porque es mas estricto, uno es falso y todo el falso. Y eso es lo que quiero que me de V en caso de que sean los dos Verdadero.

if(edad >= 13 && edad <= 17){  //tenemos dos operando booleanos
	alert("Es adolescente");
}

if(edad < 13  ||  edad > 17){
	alert("No eres adolescente");
}

uso el OR porque si miramos la tabla yo quiero que me de verdadero en total, y por mas que una sea falsa y la otra verdadera, me lo redondee como verdadero. En cambio en el anterior queria que me de si o si verdadero si los dos son verdaderos, si uno es falso que se descarte como falso. 
Aca no es asi porque quiero que no sea tan estricto, si uno es verdadero que lo redondee todo verdadero



 */

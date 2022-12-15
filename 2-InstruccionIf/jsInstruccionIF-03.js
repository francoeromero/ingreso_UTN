function mostrar()
{
	//pido espacio de memoria
	let edad;

	//asigno al input
	edad = parseInt(document.getElementById("txtIdEdad").value);

	//condicional 
	if (edad >= 18){
		alert("Sos mayor de edad");
	} 
	
	else {
		alert("Sos menor de edad");
	}

}

/*

que es lo que esta mal?

if (edad >= 18){
		alert("Sos mayor de edad");
	} 

if	{
		alert("Sos menor de edad");
	}

la maquina lo va a procesar dos veces, la condicion se tiene que evaluar si es verdadero o falso, 

Esta mal porque estamos trabajando con operadores booleanos, donde o es true or false, el primer bloque va a ser verdadero y el segundo bloque sera falso 

if = primer bloque 
else = segundo bloque

cual es la diferencia es que el if tiene condicion y el else no tiene, en caso de dar una condicion podemos usar el else if 

otra forma de resolverlo 

if (edad < 18){
	alert("menor de edad")
 }
 else{
	alert("mayor de edad")
 }

 
 if(edad >= 18){
	alert("mayor de edad")
 }

 else {
	alert("menor de edad")
 }

*/
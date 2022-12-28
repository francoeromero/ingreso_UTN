/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{	
	//pedimos espacio de memoria
	let sexoIngresado;
	//pedimos al usuario que coloque informacion dentro del espacio de memoria osea la variable
	sexoIngresado = prompt("ingrese f ó m");

	//calculo con lo que el usuario dejo de dato

	while(sexoIngresado == "f" || sexoIngresado == "m"){
		//muestro el resultado de lo que puso con una alerta si fue correcto
	 alert("sexo elegido");
	 sexoIngresado = prompt("vuelve a pedir otro sexo");
	}
		//muestro el resultado de lo que puso con una alerta si fue incorrecto
	alert("incorrecto");
	
}

/*
siempre es el mismo mecanismo:

1. pido espacio de memoria 
2. solicito informacion al usuario
3. con esa info calculo
4 muestro el resultado 

*/


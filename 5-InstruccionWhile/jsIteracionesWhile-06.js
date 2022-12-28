function mostrar()
{
	//primero pido espacio de memoria creando las variables de los 5 numeros, la suma y el promedio
	let num1;
	let num2;
	let num3;
	let num4;
	let num5;
	let suma;
	let promedio;

	//luego creamos un prompt para que el usuario ingrese los numeros, le damos paseint porque quiero que sean numeros enteros
	num1 = parseInt( prompt("Ingrese numero: "));
	num2 = parseInt( prompt("Ingrese numero: "));
	num3 = parseInt( prompt("Ingrese numero: "));
	num4 = parseInt( prompt("Ingrese numero: "));
	num5 = parseInt( prompt("Ingrese numero: "));
	
	//ahora hacemos el calculo de los numeros que puso el usuario
	suma = num1 + num2 + num3 + num4 + num5;
	promedio = suma / 5;
	

	//por ultimo arrojamos el resultado en las entradas
	document.getElementById("txtIdSuma").value = suma;
	document.getElementById("txtIdPromedio").value = promedio;

}

/*

1- Creamos las variables (espacios de memoria)

2- pedimos al usuario que llene de informacion a esas variables

3- hacemos el calculo con la informacion que puso el usuario

4- mostramos el resultado 



*/
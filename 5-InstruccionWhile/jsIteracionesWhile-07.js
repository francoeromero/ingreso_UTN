/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	//creamos los espacios de memoria
	let num;
	let suma;
	let promedio;
	//solicito numeros al usuario 
	num = prompt("ingrese numero")

	//calculo segun los numeros que puso el usuario
	
	while(num < 0){
		prompt("Ingrese el numero : ");
	}

	//muestro el resultado en las entradas
	document.getElementById("txtIdSuma").value = suma;
	document.getElementById("txtIdPromedio").value = promedio;

	
}
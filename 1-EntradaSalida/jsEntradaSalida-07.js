/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	//pido espacio de memoria
	let num1;
	let num2;
	let resultado;

	//asigno el valor alas variables y transformo de string a number
	num1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	num2 = parseInt(document.getElementById("txtIdNumeroDos").value);

	//Ahora hago la operacion y asigno el valor a la variable resultado
	resultado = num1 + num2;

	//muestro el valor en pantalla

	alert("El resultado es " + resultado);

	//limpio las entradas para una nueva operacion
	document.getElementById("txtIdNumeroUno").value = "";
	document.getElementById("txtIdNumeroDos").value = "";


}

function restar()
{
	//pido espacio de memoria
	let num1;
	let num2;
	let resultado;

	//Asigno el valor de las entradas alas variables y cambio de string a number
	num1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	num2 = parseInt(document.getElementById("txtIdNumeroDos").value);

	//operacion
	resultado = num1 - num2;

	//muestro en resultado en la pantalla
	alert("El resultado es " + resultado)

	//limpio las entradas para una nueva operacion
	document.getElementById("txtIdNumeroUno").value = "";
	document.getElementById("txtIdNumeroDos").value = "";

}

function multiplicar()
{ 
	let num1;
	let num2;
	let resultado;

	//Asigno el valor de las entradas alas variables y cambio de string a number
	num1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	num2 = parseInt(document.getElementById("txtIdNumeroDos").value);

	//operacion
	resultado = num1 * num2;

	//muestro en resultado en la pantalla
	alert("El resultado es " + resultado)
	//limpio las entradas para una nueva operacion
	document.getElementById("txtIdNumeroUno").value = "";
	document.getElementById("txtIdNumeroDos").value = "";
	
}

function dividir()
{
	let num1;
	let num2;
	let resultado;

	//Asigno el valor de las entradas alas variables y cambio de string a number
	num1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	num2 = parseInt(document.getElementById("txtIdNumeroDos").value);

	//operacion
	resultado = num1 / num2;

	//muestro en resultado en la pantalla
	alert("El resultado es " + resultado)
	//limpio las entradas para una nueva operacion
	document.getElementById("txtIdNumeroUno").value = "";
	document.getElementById("txtIdNumeroDos").value = "";
}


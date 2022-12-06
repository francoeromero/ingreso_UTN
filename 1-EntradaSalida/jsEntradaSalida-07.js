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

/*
APUNTES: 

dentro de una funcion no es visible afuera, las variables se pueden repetir 

scote global: Es el espacio de codigo que esta fuera de cualquier funcion

Por ejemplo todos los ejercicios hasta ahora el scote global esta vacio, no se ejecuta nada a menos que apretes un boton.
Porque las funciones se activan cuando le des click a uno de los botones sumar restar multiplicar dividir

type of: para saber que tipo es el valor, si es un string o es un number ejemplo:
alert(typeof resultado);


operadores:  
			Aritmeticos: 
						- suma
						- resta
						- multiplicacion
						-division
						-modulo % (el resto de la division)
			Relacionales:
			Logicos: 




*/
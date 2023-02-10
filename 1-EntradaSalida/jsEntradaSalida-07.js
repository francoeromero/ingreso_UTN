/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	//pido espacio de memoria creando variables
	let numUno;
	let numDos;
	let numUnoIngresado;
	let numDosIngresado;
	let resultado;
	//asigno el valor de las entradas alas variables
	numUnoIngresado = document.getElementById("txtIdNumeroUno").value;
	numDosIngresado = document.getElementById("txtIdNumeroDos").value;
	//transformo de string a number
	numUno = parseInt(numUnoIngresado);
	numDos = parseInt(numDosIngresado);
	//Ahora hago la operacion y asigno el valor a la variable resultado
	resultado = numUno + numDos;
	//muestro el valor en pantalla
	alert(`El resultado por medio de la suma entre ${numUno} y ${numDos} es : \n ${resultado}`);
	//limpio las entradas para una nueva operacion
	document.getElementById("txtIdNumeroUno").value = "";
	document.getElementById("txtIdNumeroDos").value = "";
}

function restar()
{
	//pido espacio de memoria
	let numUno;
	let numDos;
	let numUnoIngresado;
	let numDosIngresado;
	let resultado;
	//asigno el valor de las entradas alas variables
	numUnoIngresado = document.getElementById("txtIdNumeroUno").value;
	numDosIngresado = document.getElementById("txtIdNumeroDos").value;
	//transformo de string a number
	numUno = parseInt(numUnoIngresado);
	numDos = parseInt(numDosIngresado);
	//operacion
	resultado = numUno - numDos;
	//muestro en resultado en la pantalla
	alert(`El resultado por medio de la resta entre ${numUno} y ${numDos} es : \n ${resultado}`);
	//limpio las entradas para una nueva operacion
	document.getElementById("txtIdNumeroUno").value = "";
	document.getElementById("txtIdNumeroDos").value = "";
}

function multiplicar()
{ 
	//pido espacio de memoria creando variables
	let numUno;
	let numDos;
	let numUnoIngresado;
	let numDosIngresado;
	let resultado;
	//asigno el valor de las entradas alas variables
	numUnoIngresado = document.getElementById("txtIdNumeroUno").value;
	numDosIngresado = document.getElementById("txtIdNumeroDos").value;
	//transformo de string a number
	numUno = parseInt(numUnoIngresado);
	numDos = parseInt(numDosIngresado);
	//operacion
	resultado = numUno * numDos;
	//muestro en resultado en la pantalla
	alert(`El resultado por medio del producto entre ${numUno} y ${numDos} es : \n ${resultado}`);
	//limpio las entradas para una nueva operacion
	document.getElementById("txtIdNumeroUno").value = "";
	document.getElementById("txtIdNumeroDos").value = "";
}

function dividir()
{
	//pido espacio de memoria creando variables
	let numUno;
	let numDos;
	let numUnoIngresado;
	let numDosIngresado;
	let resultado;
	//asigno el valor de las entradas alas variables
	numUnoIngresado = document.getElementById("txtIdNumeroUno").value;
	numDosIngresado = document.getElementById("txtIdNumeroDos").value;
	//transformo de string a number
	numUno = parseInt(numUnoIngresado);
	numDos = parseInt(numDosIngresado);
	//operacion
	resultado = numUno / numDos;
	//muestro en resultado en la pantalla
	alert(`El resultado por medio de la division entre ${numUno} y ${numDos} es : \n ${resultado}`);
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
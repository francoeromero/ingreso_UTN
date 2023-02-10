/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	//pido espacio de memoria creando variables
	let dividendo;
	let divisor;
	let dividendoIngresado;
	let divisorIngresado;
	let resultado;
	//ahora asigno los valores del id alas variables
	dividendoIngresado = document.getElementById("txtIdNumeroDividendo").value;
	divisorIngresado = document.getElementById("txtIdNumeroDivisor").value;
	//ahora asigno los valores y cambio el string a number
	dividendo = parseInt(dividendoIngresado);
	divisor = parseInt(divisorIngresado);
	//hago la operación
	resultado = dividendo % divisor;
	//ahora muestro ala pantalla el resultado
	alert(`El resto entre ${dividendo} y ${divisor} es : \n ${resultado}`);
	//por ultimo limpio las entradas para una nueva operacion
	document.getElementById("txtIdNumeroDividendo").value = "";
	document.getElementById("txtIdNumeroDivisor").value = "";
}

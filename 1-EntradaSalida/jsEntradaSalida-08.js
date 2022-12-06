/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	//pido espacio de memoria
	let dividendo;
	let divisor;
	let resultado;

	//ahora asigno los valores y cambio el string a number
	dividendo = parseInt(document.getElementById("txtIdNumeroDividendo").value);
	divisor = parseInt(document.getElementById("txtIdNumeroDivisor").value);

	//ahora opero
	resultado = dividendo % divisor;

	//ahora muestro ala pantalla el resultado
	alert("el resultado es " + resultado);

	//limpio las entradas para nueva operacion
	document.getElementById("txtIdNumeroDividendo").value = "";
	document.getElementById("txtIdNumeroDivisor").value = "";

}

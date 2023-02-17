/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	let num;
	let i;
	num = prompt("Ingrese un numero del 0 al 9");
	num = parseInt(num);
	while(num < 0 || num > 9)
	{
		num = prompt("Tiene que ser del 0 al 9");
		num = parseInt(num);
	}
	document.getElementById("txtIdNumero").value = num;
}




























/*

	let variableControl;
	// let datoValidado;
	variableControl = prompt("Ingrese un numero entre 0 y 9");
	variableControl = parseInt(variableControl);

	while(variableControl < 0 || variableControl > 9)
	{
		variableControl = prompt("incorrecto, tiene que ser del 0 al 9");
		variableControl = parseInt(variableControl);
	}
	// datoValidado = datoValidado + numeroIngresado;
	document.getElementById("txtIdNumero").value = variableControl;

*/









/*
let numeroIngresado;
	numeroIngresado = prompt("ingrese un número entre 0 y 9.");

	while(numeroIngresado >= 9 || numeroIngresado <= 0){
		alert("El numero tiene que ser entre 0 y 9");
		numeroIngresado = prompt("vuelva a escribir"); //error que cometi es que me olvide renombrar la variable numeroIngresado
	}
	alert("numero correcto!!");
}
*/
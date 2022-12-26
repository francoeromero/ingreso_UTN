/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
let numeroIngresado;
	numeroIngresado = prompt("ingrese un número entre 0 y 9.");

	while(numeroIngresado >= 9 || numeroIngresado <= 0){
		alert("El numero tiene que ser entre 0 y 9");
		numeroIngresado = prompt("vuelva a escribir"); //error que cometi es que me olvide renombrar la variable numeroIngresado
	}
	alert("numero correcto!!");
	
}

/*

*/
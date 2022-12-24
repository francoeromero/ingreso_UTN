/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	let claveIngresada; // pido espacio de memoria
	claveIngresada = prompt("ingrese el número clave."); //le pido al usuario que ingrese la clave para meterlo a esa variable
	
	const CLAVECORRECTA = "utn750"; //creo una variable constante para la clave correcta

	//uso while para generar un bucle, de no ser correcta la clave entonces que la vuelva a escribir
	while(claveIngresada != CLAVECORRECTA){ 
		alert("INCORRECTO");
		claveIngresada = prompt("vuelva a ingresar");
	}

	alert("CORRECTO!!!!");
	
}

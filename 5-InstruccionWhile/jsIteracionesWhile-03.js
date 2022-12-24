/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	let claveIngresada;
	claveIngresada = prompt("ingrese el número clave.");
	
	const CLAVECORRECTA = "utn750";

	while(claveIngresada != CLAVECORRECTA){
		alert("INCORRECTO");
		claveIngresada = prompt("vuelva a ingresar");
	}

	alert("CORRECTO!!!!")
	
}

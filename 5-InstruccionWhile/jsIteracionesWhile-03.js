/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	let clave = "utn750";
	clave = prompt("Ingrese su clave: ").toLowerCase();
	while(clave != "utn750")
	{
		clave = prompt("Clave incorrecta vuelva a escribir").toLowerCase();
	}
	alert("Clave correcta! acaba de iniciar sesion");
}

//toLowerCase() de mayuscula a minuscula
//toUpperCase() de minuscula a mayuscula

/*

do
{
	clave = prompt("Ingrese la contraseña").toLowerCase();
}while(contraseña != "utn750");


*/






















/*





//declaro variable con la clave
	let claveIngresada = "utn750";
	//pido al usuario que ingrese su clave
	claveIngresada = prompt("Ingrese su clave: ");
	//si no es "utn750" entonces inicia el bucle
	while(claveIngresada != "utn750")
	{
		claveIngresada = prompt("clave incorrecta");
	}
	alert("clave correcta");



*/



// let claveIngresada; // pido espacio de memoria
// 	claveIngresada = prompt("ingrese el número clave."); //le pido al usuario que ingrese la clave para meterlo a esa variable
	
// 	const CLAVECORRECTA = "utn750"; //creo una variable constante para la clave correcta

// 	//uso while para generar un bucle, de no ser correcta la clave entonces que la vuelva a escribir
// 	while(claveIngresada != CLAVECORRECTA){ 
// 		alert("INCORRECTO"); //instrucciones si no es igual ala clave correcta
// 		claveIngresada = prompt("vuelva a ingresar");
// 	}

// 	alert("CORRECTO!!!!"); // instruccion si llega a ser igual, va a saltar esta instruccion

/*

TIP

la primera instruccion tiene que ser la fasla, porque sino no se hace el BUCLE
El bucle se genera cuando el usuario se equivoca y tiene que volver a escribir
y luego la instruccion correcta y finaliza 
dd



*/
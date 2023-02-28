/*
Al presionar el  botón, 
se debe mostrar un mensaje como el siguiente "Esto funciona de maravilla"*/
function mostrar()
{
	// alert("Esto funciona de maravilla"); //sentencia 
	/*

En una partida de todos contra todos de CS-GO (Juego de disparos) un grupo de 5 amigos quiere saber las estadísticas al finalizar la partida.
Para esto se requieren los siguientes datos:
Nombre del jugador.
Edad del jugador - Mayor de edad.
Bajas (Cantidad de veces que mató) - Número positivo inclusive 0.
Muertes (Cantidad de veces que murió) - Número positivo inclusive 0.
INFORMAR
A) Nombre del jugador más joven. (fla)
B) El jugador que más bajas tuvo.
C) El jugador que menos muertes tuvo.
D) El promedio de bajas.
E) Cantidad de jugadores que tienen entre 20 y 30 años cuyas bajas están entre 10 y 15.
F) El nombre y edad del jugador que más muertes tuvo.

*/

var continua;
var mensaje;
var nombreJugador;
var edadJugador; // mayor edad
var bajas; // Número positivo inclusive 0.
var muertes; // Número positivo inclusive 0.
var flagJoven = 0;
var minEdad;
var flagBajas = 0;
var masBajas;
var nombreMasBajas;
var flagMuertes = 0;
var minMuertes;
var nombreMasJoven;
var nombreMinMuertes;
var acumuladorBajas = 0;
var contadorJugadoresD;
var maxMuertes;
var nombreMasMuertes;
var promedioBajas;
var edadMasMuertes;
var i;
for (i = 0; i < 5; i++) {     
	do
	{
		nombreJugador = prompt("Ingrese nombreJugador").toLowerCase();
	}while(!isNaN(nombreJugador));
	do
	{
		edadJugador = prompt("Ingrese edadJugador");
		edadJugador = parseInt(edadJugador);
	}while(isNaN(edadJugador) || edadJugador < 18);
	do
	{
		bajas = prompt("Ingrese bajas");
		bajas = parseInt(bajas);
	}while(isNaN(bajas) || bajas < 0);
	do
	{
		muertes = prompt("Ingrese muertes");
		muertes = parseInt(muertes);
	}while(isNaN(muertes) || muertes < 0);
	//a
	// A) Nombre del jugador más joven. (fla)
	if(flagJoven == 0)
	{
		minEdad = edadJugador;
		flagJoven = 1;
		nombreMasJoven = nombreJugador;
	}
	else
	{
		if(edadJugador < minEdad)
		{
			minEdad = edadJugador;
			nombreMasJoven = nombreJugador;
		}
	}
	//b
	// B) El jugador que más bajas tuvo.
	if(flagBajas == 0)
	{
		masBajas = bajas;
		flagBajas = 1;
		nombreMasBajas = nombreJugador;
	}
	else
	{
		if(bajas > masBajas)
		{
			masBajas = bajas;
			nombreMasBajas = nombreJugador;
		}
	}
	//c
	// C) El jugador que menos muertes tuvo.
	if(flagMuertes == 0)
	{
		maxMuertes = muertes;
		minMuertes = muertes;
		flagMuertes = 1;
		nombreMinMuertes = nombreJugador;
		nombreMasMuertes = nombreJugador;
	}
	else
	{
		if(muertes < minMuertes)
		{
			minMuertes = muertes;
			nombreMinMuertes = nombreJugador;
		}
		else
		{
			if(muertes > maxMuertes)
			{
				maxMuertes = muertes;
				nombreMasMuertes = nombreJugador;
				edadMasMuertes = edadJugador;
			}
		}
	}
	//D
	acumuladorBajas += bajas;
	//Cantidad de jugadores que tienen entre 20 y 30 años cuyas bajas están entre 10 y 15.
	if(!(edadJugador < 19 || edadJugador > 31))
	{
		if(!(bajas < 9 || bajas > 16))
		{
			contadorJugadoresD++;
		}
	}
}
//calculo o comparacion 
//d
promedioBajas = acumuladorBajas / i;

//muestro
mensaje = "\n Nombre del jugador más joven " + nombreMasJoven;
mensaje += "\n El jugador que más bajas tuvo. " + nombreMasBajas;
mensaje += "\n El promedio de bajas." + promedioBajas;
mensaje += "\n Cantidad de jugadores que tienen entre 20 y 30 años cuyas bajas están entre 10 y 15." + contadorJugadoresD;
mensaje += "\n El nombre del jugador que más muertes tuvo. " + nombreMasMuertes;
mensaje += "\n edad del jugador que más muertes tuvo." + edadMasMuertes;

alert(mensaje);
}

/* 
APUNTES: 

con f12 nos fijamos que es lo que esta mal, en consola, hasta incluso te muestra el archivo y el numero de linea. Importante saber eso porque cuando no funcione algun ejercicio 

alert genera una ventana emergente

Cuales son los datos de entrada de la funcion alert? 
rta: el texto entre parentesis ( ) estan para recibir los datos de la funcion para cumplir la sentencia 

Para que uso las comillas ? 
Es una cadena de caracteres 

como crear una funcion?
1 paso: Declarar una funcion
2 paso: Darle un nombre
3 paso: Parametros 
4 paso: Instrucciones de la funcion
5 paso: Llamar ala funcion para activar 


function nombreFunction (parametros) {
	intrucciones
}
nombreFunction(); 



*/
/*
Ejercicio 1 
La premier league de Inglaterra necesita un sistema capaz de reunir las estadisticas de los jugadores que la integran
para ellos se pide realizar una app
se debe ingresar por cada jugador
Nombre del jugador:
Nnalidad
Posicion (arquero, defensor mediocampista o delantero)
cantidad de tarjetas rojas recibidas
goles
se necesita saber
a) el goleador del torneo
b) el jugador argentino con menos rojas recibidas
c) el porcentaje de jugadores ingleses de la liga   
Nota: deben poder ingresar todos numeros positivos, no se deben ingresar numeros negativos 
*/


function comenzar ()
{
    let continua;
	let mensaje;
    let nombreJugador;
    let nacionalidadJugador;
    let posicionJugador;
    let cantidadRojas;
    let cantidadGoles;
    let bandera=0;
    let maximoGoles;
    let nombreJugadorConMaximoGoles;
    let menosRojas;
    let contadorJugadoresIngleses=0;
    let contadorGeneralJugadores=0;
    let porcentajeIngleses ;
	
	
	do
	{
        do
        {
            nombreJugador = prompt("Ingrese nombreJugador").toLowerCase();
        }while(!isNaN(nombreJugador));
        do
        {
            nacionalidadJugador = prompt("Ingrese nacionalidadJugador").toLowerCase();
        }while(nacionalidadJugador != "argentino" && nacionalidadJugador != "ingles");
        do
        {
            posicionJugador = prompt("Ingrese posicionJugador (arquero, defensor mediocampista o delantero)").toLowerCase();
        }while(posicionJugador != "arquero" && posicionJugador != "defensor" && posicionJugador != "mediocampista"&& posicionJugador != "delantero");
        do
        {
            cantidadRojas = prompt("Ingrese cantidadRojas");
            cantidadRojas = parseInt(cantidadRojas);
        }while(isNaN(cantidadRojas) || cantidadRojas < 0);
        do
        {
            cantidadGoles = prompt("Ingrese cantidadGoles");
            cantidadGoles = parseInt(cantidadGoles);
        }while(isNaN(cantidadGoles) || cantidadGoles < 0);

       if(bandera==0)
       {
        menosRojas = cantidadRojas;
        maximoGoles = cantidadGoles;
        nombreJugadorConMaximoGoles = nombreJugador;
        nombreJugadorConMenosRojas = nombreJugador;
        bandera=1;
       }
       else
       {
        //A
        if(cantidadGoles > maximoGoles)
        {
            nombreJugadorConMaximoGoles = nombreJugador;
        }
        //B
        if(cantidadRojas < menosRojas)
        {
            nombreJugadorConMenosRojas = nombreJugador;
        }
       }
       //C
       if(nacionalidadJugador == "ingles")
       {
        contadorJugadoresIngleses++;
       }
       contadorGeneralJugadores++;
      
		
		continua = confirm("Quieres continuar?");
	}while(continua);
	//****************FIN DE ITERACIÓN************************ */
    //C
    if(contadorJugadoresIngleses != 0)
    {
        porcentajeIngleses = contadorJugadoresIngleses*100 / contadorGeneralJugadores;
    }
    else
    {
        porcentajeIngleses=0;
    }
	//muestro
	mensaje = "\n nombre Jugador Con Maximo Goles " +nombreJugadorConMaximoGoles ;
	mensaje += "\n nombre Jugador Con Menos Rojas" + nombreJugadorConMenosRojas;
	mensaje += "\n porcentaje de jugadores Ingleses " + porcentajeIngleses + "%";
	
	alert(mensaje);

}
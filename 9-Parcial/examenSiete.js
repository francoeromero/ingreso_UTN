/*
Apellido: 
nombre: 
comision:
tutor:
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
c) el porcentaje de jugadores ingleses de la liga   Porcentaje = (suma de ingleses / total jugadores) * 100

Nota: deben poder ingresar todos numeros positivos, no se deben ingresar numeros negativos 
*/

/*
a) el goleador del torneo
b) el jugador argentino con menos rojas recibidas
c) el porcentaje de jugadores ingleses de la liga   Porcentaje = (suma de ingleses / total jugadores) * 100
*/
    var continua;
	var mensaje;
	var nombreJugador;
	var posicion;
    var nacionalidad;
	var cantidadRojas;
	var cantidadGoles;
	var flagGoles = 0;
	var maxGoles;
	var flagRojas;
	var menosRojas;
	var contadorIngleses = 0;
	var porcentajeIngleses;
    var contadorJugadoresIngresados = 0;
    var nombreGoleador;
    var nombreMenosRojas;
    var a;
	do
	{
        do
		{
			nombreJugador = prompt("Ingrese el nombre del jugador").toLowerCase();
		}while(!isNaN(nombreJugador));
        do
		{
			nacionalidad = prompt("Ingrese nacionalidad del jugador argentino o ingles").toLowerCase();
		}while(nacionalidad != "argentino" && nacionalidad != "ingles" );
        do
		{
			cantidadRojas = prompt("Ingrese cantidad  tarjetas rojas");
			cantidadRojas = parseInt(cantidadRojas);
		}while(isNaN(cantidadRojas) && cantidadRojas < 0);
        do
		{
			cantidadGoles = prompt("Ingrese cantidad goles");
			cantidadGoles = parseInt(cantidadGoles);
		}while(isNaN(cantidadGoles) && cantidadGoles < 0);
        do
		{
			posicion = prompt("Ingrese posicion (arquero, defensor mediocampista o delantero)").toLowerCase();
		}while(posicion != "arquero" && posicion != "defensor" && posicion != "mediocampista" && posicion != "delantero");

        //a
        if(flagGoles == 0)
        {
            maxGoles = cantidadGoles;
            flagGoles = 1;
        }
        else
        {
            if(cantidadGoles > maxGoles)
            {
                maxGoles = cantidadGoles;
                nombreGoleador = nombreJugador;
            }
        }
        //b
        if(nacionalidad == "argentino")
        {
            if(flagRojas == 0)
            {
                menosRojas = cantidadRojas;
                flagRojas = 1;
            }
            else
            {
                if(cantidadRojas < menosRojas)
                {
                    menosRojas = cantidadRojas;
                    nombreMenosRojas = nombreJugador;
                }
            }
        }
        else
        {
            //Porcentaje = (suma de ingleses / total jugadores) * 100
            contadorIngleses++;
        }
        contadorJugadoresIngresados++;
        continua = confirm("Quieres continuar?");
	}while(continua);
	//calculo o comparposicionion 
    porcentajeIngleses = contadorIngleses / contadorJugadoresIngresados;
	//muestro
	mensaje = "\n El goleador del torneo " + nombreGoleador;
	mensaje += "\n El jugador argentino con menos rojas " + nombreMenosRojas;
	mensaje += "\n El porcentaje de jugadores ingleses" + porcentajeIngleses + "%";
	
	alert(mensaje);

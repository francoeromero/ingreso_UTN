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


function comenzar ()
{
    
	let i;
	let mensaje;
    let cantidadBajas;
    let nombreJugador;
    let cantidadMuertes;
    let edadJugador;
    let flag=true;
    let menosEdad;
    let maxBajas;
    let menosMuertes;
    let nombreJugadorMasJoven;
    let nombreJugadorMasBajas;
    let nombreJugadorMenosMuertes;
    let contadorJugadoresEdadBajas=0;
    let masMuertes;
    let nombreJugadorMasMuertes;
    let edadJugadorMasmuertes;
    let acumuladorDeBajas=0;
    let promedioBajas;
    
    
	for (i = 0; i < 5; i++) {
   
        do
        {
            nombreJugador = prompt("Ingrese nombreJugador").toLowerCase();
        }while(!isNaN(nombreJugador));
        do
        {
            edadJugador = prompt("Ingrese edadJugador");
            edadJugador = parseInt(edadJugador);
        }while(isNaN(edadJugador) || edadJugador < 17);
        do
        {
            cantidadBajas = prompt("Ingrese cantidadBajas");
            cantidadBajas = parseInt(cantidadBajas);
        }while(isNaN(cantidadBajas) || cantidadBajas < -1);
        do
        {
            cantidadMuertes = prompt("Ingrese cantidadMuertes");
            cantidadMuertes = parseInt(cantidadMuertes);
        }while(isNaN(cantidadMuertes) || cantidadMuertes < -1);

        if(flag==true)
        {
            nombreJugadorMasJoven= nombreJugador;
            nombreJugadorMasBajas =nombreJugador;
            nombreJugadorMenosMuertes=nombreJugador;
            menosEdad=edadJugador;
            maxBajas=cantidadBajas;
            menosMuertes=cantidadMuertes;
            masMuertes=cantidadMuertes;
            flag=false; 
        }
        else
        {
            if(edadJugador < menosEdad)
            {
                nombreJugadorMasJoven= nombreJugador;
            }
            if(cantidadBajas > maxBajas)
            {
                nombreJugadorMasBajas =nombreJugador;
            }
            if(cantidadMuertes < menosMuertes)
            {
                nombreJugadorMenosMuertes=nombreJugador;
            }
            if(cantidadMuertes > masMuertes)
            {
                nombreJugadorMasMuertes = nombreJugador;
                edadJugadorMasmuertes = edadJugador;
            }
        }

        if(!(edadJugador < 19 && edadJugador > 31))
        {
            if(!(cantidadBajas < 9 && cantidadBajas > 16))
            {
                contadorJugadoresEdadBajas++;
            }
        }
        acumuladorDeBajas += cantidadBajas;
	}
	//****************FIN DE ITERACIÓN************************ */
    ///D
    if(acumuladorDeBajas!=0)
    {
        promedioBajas = acumuladorDeBajas / i;
    }
    else
    {
        promedioBajas=0;
    }
	//muestro
	mensaje = "\n A) Nombre del jugador más joven. " + nombreJugadorMasJoven;
	mensaje += "\n B) El jugador que más bajas tuvo." + nombreJugadorMasBajas;
	mensaje += "\n C) El jugador que menos muertes tuvo. " + nombreJugadorMenosMuertes;
	mensaje += "\n D) promedio de bajas" + promedioBajas;
	mensaje += "\n E) Cantidad de jugadores que tienen entre 20 y 30 años cuyas bajas están entre 10 y 15.cantidad de jug" + contadorJugadoresEdadBajas;
	mensaje += "\n F) El nombre y edad del jugador que más muertes tuvo. " + edadJugadorMasmuertes;
	
	alert(mensaje);


}
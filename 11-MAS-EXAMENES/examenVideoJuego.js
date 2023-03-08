/*
Para el nuevo videojuego "surviving the UTN admission test" se ha solicitado desarrollar el sistema de
estadísticas que nos mostrará información sobre los jugadores registrados en el juego.

Para ello por cada jugador, debemos ingresar:
Nombre del jugador,
Tipo de personaje("guerrero", "arquero" o "mago"),
Fuerza de ataque ( 1 a 10 inclusive ),
Resistencia a ataques (1 a 5 inclusive),
Tiene bonificación (si o no). Si tiene bonificación, el ataque y la resistencia se duplican.

Se nos pide mostrar:

a) Nombre y tipo de personaje del personaje más poderoso y el más débil con y sin bonificación.

b) Cuantos personajes de cada tipo atacan por más de 5,y resisten por más de 3.

c) Cuantos arqueros sin bonificación tienen fuerza de ataque menor a 3 pero resistencia mayor a 3.

d) Cual es el promedio de fuerza de ataque de todos los guerreros sin bonificación,
y cual de todos los magos con bonificación.

e) Que porcentaje del total de personajes ingresados representa cada tipo de personaje.

*/


function comenzar()
{
    let continua;
	let mensaje;
    let nombreJugador;
    let tipoPersonaje;
    let cantidadFuerza;
    let cantidadResistencia;
    let tieneBonificacion;
    let flag = 0;
    let maximaFuerza;
    let nombreMasPoderoso;
    let tipoPersonajeMasPoderoso;
    let minimaResistencia;
    let nombreMinimaResistencia;
    let tipoPersonajeMinimaResistencia;
    let maximaResistencia;
    let minimaFuerza;
    let nombreMasDebil;
    let tipoPersonajeMasDebil;
    let contadorPersonajes=0;
    let contadorArqueros=0;
    let contadorMagos=0;
    let contadorGuerreros=0;
    let contadorArqueros3y3=0;
    let acumuladorFuerzaGuerreroSinBoni=0;
    let acumuladorFuerzaArqueroSinBoni=0;
    let acumuladorFuerzaGeneral=0;
    let contadorGuerrerosSinBoni=0;
    let contadorArquerosSinBoni=0;
    let promedioFuerzaGuerrerosSinBoni;
    let promedioFuerzaArquerosSinBoni;
    let contadorArquerosTotales=0;
    let contadorGuerrerosTotales=0;
    let contadorMagosTotales=0;
    let contadorGeneralPersonajes=0;
    let porcentajeGuerreros;
    let porcentajeMagos;
    let porcentajeArqueros;
	
	
	do
	{
        do
        {
            nombreJugador = prompt("Ingrese nombreJugador");
            nombreJugador = nombreJugador.toLowerCase();
        }while(!isNaN(nombreJugador));	
        do
        {
            tipoPersonaje = prompt("Ingrese tipoPersonaje guerrero mago arquero");
            tipoPersonaje = tipoPersonaje.toLowerCase();
        }while(tipoPersonaje != "arquero" && tipoPersonaje != "guerrero" && tipoPersonaje != "mago");
        do
        {
            cantidadFuerza = prompt("Ingrese cantidadFuerza");
            cantidadFuerza = parseFloat(cantidadFuerza);
        }while(cantidadFuerza < 1 || cantidadFuerza > 10);
        do
        {
            cantidadResistencia = prompt("Ingrese cantidadResistencia");
            cantidadResistencia = parseFloat(cantidadResistencia);
        }while(cantidadResistencia < 1 || cantidadResistencia > 5);
        do
        {
            tieneBonificacion = prompt("Ingrese tieneBonificacion");
            tieneBonificacion = tieneBonificacion.toLowerCase();
        }while(tieneBonificacion != "si" && tieneBonificacion != "no");
        if(tieneBonificacion=="si")
        {
            cantidadResistencia=2*cantidadResistencia;
            cantidadFuerza=2*cantidadFuerza;
        }
        else
        {
            //D
            switch (tipoPersonaje) {
                case "guerrero":
                    acumuladorFuerzaGuerreroSinBoni+=cantidadFuerza;
                    contadorGuerrerosSinBoni++;
                break;
                case "arquero":
                    acumuladorFuerzaArqueroSinBoni+=cantidadFuerza;
                    contadorArquerosSinBoni++;
                    //C
                    if(cantidadFuerza<3 && cantidadResistencia>3 )
                    {
                        contadorArqueros3y3++;
                    }
                break;
            }
        }
        
        //a
        if(flag==0)
        {
            //mas poderoso
            maximaFuerza=cantidadFuerza;
            maximaResistencia=cantidadResistencia;
            nombreMasPoderoso=nombreJugador;
            tipoPersonajeMasPoderoso=tipoPersonaje;
            //mas debil
            minimaResistencia=cantidadResistencia;
            minimaFuerza=cantidadFuerza;
            nombreMasDebil=nombreJugador;
            tipoPersonajeMasDebil=tipoPersonaje;
        }
        else
        {
            if(cantidadFuerza > maximaFuerza && cantidadResistencia > maximaResistencia)
            {
                nombreMasPoderoso=nombreJugador;
                tipoPersonajeMasPoderoso=tipoPersonaje;
            }
            if(cantidadFuerza < minimaFuerza && cantidadResistencia < minimaResistencia)
            {
                nombreMasDebil=nombreJugador;
                tipoPersonajeMasDebil=tipoPersonaje;
            }
        }
        //B
        if(cantidadFuerza>5 && cantidadResistencia>3)
        {
            switch (tipoPersonaje) {
                case "arquero":
                    contadorArqueros++;
                break;
                case "mago":
                    contadorMagos++;
                break;
                default:
                    contadorGuerreros++;
                break;
            }
        }
        //E
        switch (tipoPersonaje) {
            case "arquero":
                contadorArquerosTotales++;
            break;
            case "guerrero":
                contadorGuerrerosTotales++;
            break;
        
            default:
                contadorMagosTotales++;
            break;
        }
        contadorGeneralPersonajes++;
    

		continua = confirm("Quieres continuar?");
	}while(continua);
	//****************FIN DE ITERACIÓN************************ */
    //D
    if(acumuladorFuerzaArqueroSinBoni!=0)
    {
        promedioFuerzaArquerosSinBoni=acumuladorFuerzaArqueroSinBoni / contadorArquerosSinBoni;
    }
    else
    {
        promedioFuerzaArquerosSinBoni=0;
    }
    if(acumuladorFuerzaGuerreroSinBoni!=0)
    {
        promedioFuerzaGuerrerosSinBoni=acumuladorFuerzaGuerreroSinBoni / contadorGuerrerosSinBoni;
    }
    else
    {
        promedioFuerzaGuerrerosSinBoni=0;
    }



    //E
    if(contadorArquerosTotales!=0)
    {
        porcentajeArqueros= (contadorArquerosTotales*100)/contadorGeneralPersonajes;
    }
    else
    {
        porcentajeArqueros=0;
    }

    if(contadorGuerrerosTotales!=0)
    {
        porcentajeGuerreros= (contadorGuerrerosTotales*100)/contadorGeneralPersonajes;
    }
    else
    {
        porcentajeGuerreros=0;
    }
    if(contadorMagosTotales!=0)
    {
        porcentajeMagos=(contadorMagosTotales*100)/contadorGeneralPersonajes;
    }
    else
    {
        porcentajeMagos=0;
    }

	//muestro
	mensaje = "\n A- nombre del Mas poderoso es: " + nombreMasPoderoso;
	mensaje += "\n A- tipo Personaje del MasPoderoso " + tipoPersonajeMasPoderoso;
	mensaje += "\n A- nombre DEL MAS DEBIL " + nombreMasDebil;
	mensaje += "\n A- tipo personaje mas debil " + tipoPersonajeMasDebil;
	mensaje += "\n B- CANTIDAD MAGOS atacan por más de 5,y resisten por más de 3." + contadorMagos;
	mensaje += "\n B- CANTIDAD ARQUEROS atacan por más de 5,y resisten por más de 3." + contadorArqueros;
	mensaje += "\n B- CANTIDAD GUERREROS atacan por más de 5,y resisten por más de 3." + contadorGuerreros;
	mensaje += "\n C- CANTIDAD ARQUEROS SIN BONI  tienen fuerza de ataque menor a 3 pero resistencia mayor a 3." + contadorArqueros3y3;
	mensaje += "\n D promedioFuerzaArquerosSinBoni" + promedioFuerzaArquerosSinBoni;
	mensaje += "\n D- promedioFuerzaGuerrerosSinBoni" + promedioFuerzaGuerrerosSinBoni;
	mensaje += "\n D- promedioFuerzaGuerrerosSinBoni " + promedioFuerzaGuerrerosSinBoni;
	mensaje += "\n E- PORCENTAJE ARQUEROS TOTALES " + porcentajeArqueros + "%";
	mensaje += "\n E- PORCENTAJE GUERREROS TOTALES " + porcentajeGuerreros + "%";
	mensaje += "\n E- PORCENTAJE MAGOS TOTALES " + porcentajeMagos + "%";
	alert(mensaje);
}
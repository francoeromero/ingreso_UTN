/*
1) 
Se desea desarrollar un programa que permita al usuario ingresar 

el nombre videojuego,
año emitido (Superior a 2000), 
Tipo videojuego (si es online u offline) 
 costo 5 videojuegos.

Realizar las siguientes operaciones:

A - Encontrar el videojuego más caro y el más barato ingresado.
B - Calcular el promedio de los costos de los videojuegos, pero solo para aquellos que son online.
C - Encontrar los videojuegos con el costo máximo y mínimo de aquellos emitidos antes de 2015.
D - Calcular el porcentaje de videojuegos offline en relación al total de videojuegos ingresados.  
*/
function comenzar()
{
    let continua;
	let mensaje;
    let añoEmitido;
	let nombreVideojuego;
    let tipoVideojuego;
    let costoVideojuego;
    let acumuladorCostosOffline=0;
    let contadorOfflineIngresados=0;
    let promedioCostosOffline;
    let contadorGeneralVideojuegosIngresados=0;
    let porcentajeOffline;
	
	
	do
	{
	do
	{
		nombreVideojuego = prompt("Ingrese nombreVideojuego");
		nombreVideojuego = nombreVideojuego.toLowerCase();
	}while(!isNaN(nombreVideojuego));
	do
	{
		añoEmitido = prompt("Ingrese añoEmitido");
		añoEmitido = parseInt(añoEmitido);
	}while(isNaN(nombreVideojuego) || añoEmitido < 2000 );	
	do
	{
		tipoVideojuego = prompt("Ingrese tipoVideojuego");
		tipoVideojuego = tipoVideojuego.toLowerCase();
	}while(tipoVideojuego != "online" && tipoVideojuego != "offline");
	do
	{
		costoVideojuego = prompt("Ingrese costoVideojuego");
		costoVideojuego = parseInt(costoVideojuego);
	}while(isNaN(costoVideojuego) || costoVideojuego < 0);
    //A
    let flag=0;
    if(flag==0)
    {
        //A
        costoMaximo=costoVideojuego;
        costoMinimo=costoVideojuego;
        nombreMasCaro=nombreVideojuego;
        nombreMasBarato=nombreVideojuego;
        //C
        nombreMasCaro2015=nombreVideojuego;
        nombreMasBarato2015=nombreVideojuego;
    }
    else
    {
        //A
        if(costoVideojuego>costoMaximo)
        {
            nombreMasCaro=nombreVideojuego;
        }
        if(costoVideojuego<costoMinimo)
        {
            nombreMasBarato=nombreVideojuego;
        }
        //C
        if(costoVideojuego>costoMaximo && añoEmitido==2015)
        {
            nombreMasCaro2015=nombreVideojuego;
        }
        if(costoVideojuego<costoMinimo && añoEmitido==2015)
        {
            nombreMasBarato2015=nombreVideojuego;
        }
    }
    //B
    if(tipoVideojuego=="offline")
    {
        acumuladorCostosOffline+=costoVideojuego;
        contadorOfflineIngresados++;//x%
    }
    contadorGeneralVideojuegosIngresados++;//100%
    
    
		continua = confirm("Quieres continuar?");
	}while(continua);
	//****************FIN DE ITERACIÓN************************ */
    if(acumuladorCostosOffline!=0)
    {
        promedioCostosOffline= acumuladorCostosOffline / contadorOfflineIngresados;
    }
    else
    {
        promedioCostosOffline=0;
    }
    //contadorGeneralVideojuegos _______100% ingresados
    //contadorOfflinevideojuegos________x% ingresados
    if(contadorOfflineIngresados!=0)
    {
        porcentajeOffline = (contadorOfflineIngresados*100)/contadorGeneralVideojuegosIngresados;
    }
    else
    {
        porcentajeOffline=0;
    }
	//muestro
	mensaje = "\n A" + nombreMasCaro;
	mensaje += "\n A " + nombreMasBarato;
	mensaje += "\n B promedio Costos Offline" + promedioCostosOffline;
	mensaje += "\n C- nombre Mas Caro 2015" + nombreMasCaro2015;
	mensaje += "\n C- nombre Mas barato 2015" + nombreMasBarato2015;
	mensaje += "\n D porcentajeOffline" + porcentajeOffline + " %";
	
	alert(mensaje);
}
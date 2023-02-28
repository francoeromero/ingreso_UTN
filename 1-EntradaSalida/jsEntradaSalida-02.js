/*
En una carga indefinida de datos (hasta que el usuario quiera) se desea llevar a cabo el registro diario de una granja de minería en Bitcoin y Ethereum.
Se requieren los siguientes datos:

Nombre de la criptomoneda (VALIDAR EL INGRESO solo de BTC o ETH).
Cantidad de BTC o ETH minado ese día - Número positivo.
Cotización diaria en USD - Número positivo inclusive 0.
INFORMAR
A) Nombre y cantidad de la criptomoneda más minada. flag
B) Nombre de la criptomoneda que mayor cotización tuvo. flag 
C) Cantidad total de ingreso bruto en USD de cada criptomoneda. acumulador btc eth

D) Sabiendo que el coste de electricidad para:
BTC es de un 7% y para ETH es un 4% calcular el ingreso total neto en USD. if

E) Convertir el ingreso neto en ARS solo para ETH. Sabiendo que la cotización de 1 USD a ARS es de $337. 
Si el ingreso supera los 100.000 ARS calcular impuesto de AFIP del 21% e informar
"El ingreso neto por ETH es de X1 pesos y se descontó X2 pesos de AFIP".
Siendo .X1 el neto en ARS y X2 el impuesto aplicado.
*/
function comenzar()
{
	var continua;
	var mensaje;
	var nombreCripto;
	var cantidad;
	var flagMasMinada = 0;
	var cantidadMasMinado;
	var nombrecantidadMasMinado;
	var cotizacionUsd;
	var nombreMayorCotizacion;
	var flagMayorCotizacion = 0;
	var mayorCotizacion;
	var a;
	var a;
	var a;
	var a;
	var a;
	var a;
	do
	{
		do
		{
			nombreCripto = prompt("Ingrese nombreCripto btc o eth").toLowerCase();
		}while(nombreCripto != "btc" && nombreCripto != "eth");

		do
		{
			cantidad = prompt("Ingrese cantidad");
			cantidad = parseInt(cantidad);
		}while(isNaN(cantidad) || cantidad < 0);
		
		do
		{
			cotizacionUsd = prompt("Ingrese cotizacionUsd");
			cotizacionUsd = parseInt(cotizacionUsd);
		}while(isNaN(cotizacionUsd) || cotizacionUsd < 0);
	
		//consulta profe 1 
		// if(flag==0 || cantidad  > cantidadMasMinado )
		// {
			// 	cantidadMasMinado=cantidad;
			// 	nombreCantidadMasMinado=nombreCripto;
			// }
			// if(flag==0  || cotizacionUsd > mayorCotizacion)
			// {
				// 	mayorCotizacion=cotizacionUsd;
				// 	nombreMayorCotizacion=nombreCripto;
				// 	flag=1;
				// }
		//consulta profe 2
		// if(flag==0)
		// {
		// 	cantidadMasMinado=cantidad;
		// 	nombreCantidadMasMinado=nombreCripto;
		// 	mayorCotizacion=cotizacionUsd;
		// 	nombreMayotCotizacion=nombreCripto;
		// 	flag=1;
		// }
		// else 
		// {
		// 	if(cantidad>cantidadMasMinado)
		// 	{
		// 		cantidadMasMinado=cantidad;
		// 		nombreCantidadMasMinado=nombreCripto;
		// 	}
		// 	if(cotizacionUsd > mayorCotizacion)
		// 	{
		// 		mayorCotizacion=cotizacionUsd;
		// 		nombreMayorCotizacion=nombreCripto;
		// 	}
		// }
				
				
				
		// A) Nombre y cantidad de la criptomoneda más minada. flag
		if(flag== 0)
		{
			cantidadMasMinado = cantidad;
			nombrecantidadMasMinado = nombreCripto;
			
		}
		else
		{
			if(cantidad > cantidadMasMinado)
			{
				cantidadMasMinado = cantidad;
				nombrecantidadMasMinado = nombreCripto;
			}
		}
		//B) Nombre de la criptomoneda que mayor cotización tuvo. flag 
		if(flag == 0)
		{
			mayorCotizacion = cotizacionUsd;
			nombreMayorCotizacion = nombreCripto;
			flag = 1;
		}
		else
		{
			if(cotizacionUsd > mayorCotizacion)
			{
				mayorCotizacion = cotizacionUsd;
				nombreMayorCotizacion = nombreCripto;
			}
		//C) Cantidad total de ingreso bruto en USD de cada criptomoneda. acumulador btc eth
		
		// }
		// // A) Nombre y cantidad de la criptomoneda más minada. flag
		// if(flagMasMinada == 0)
		// {
		// 	cantidadMasMinado = cantidad;
		// 	nombrecantidadMasMinado = nombreCripto;
		// 	flagMasMinada = 1;
		// }
		// else
		// {
		// 	if(cantidad > cantidadMasMinado)
		// 	{
		// 		cantidadMasMinado = cantidad;
		// 		nombrecantidadMasMinado = nombreCripto;
		// 	}
		// }
		// //B) Nombre de la criptomoneda que mayor cotización tuvo. flag 
		// if(flagMayorCotizacion == 0)
		// {
		// 	mayorCotizacion = cotizacionUsd;
		// 	nombreMayorCotizacion = nombreCripto;
		// 	flagMayorCotizacion = 1;
		// }
		// else
		// {
		// 	if(cotizacionUsd > mayorCotizacion)
		// 	{
		// 		mayorCotizacion = cotizacionUsd;
		// 		nombreMayorCotizacion = nombreCripto;
		// 	}
		// }
		continua = confirm("Quieres continuar?");
	}while(continua);
	//calculo o comparacion 
	//muestro
	mensaje = "\n " + a;
	mensaje += "\n " + a;
	mensaje += "\n " + a;
	mensaje += "\n " + a;
	mensaje += "\n " + a;
	mensaje += "\n " + a;
	mensaje += "\n " + a;
	mensaje += "\n " + a;
	alert(mensaje);
}
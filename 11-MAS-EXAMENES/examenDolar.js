/*
El usuario debe ingresar las cotizaciones semanales del dólar (semana laboral de 5 días), los valores deben ser positivos:
Se debe Informar al usuario lo siguiente:

1) Informar cuál fue el dólar con mayor cotización promedio en la semana ()
2) informar cotización más alta del dólar oficial
3) Informar cotización más baja del dólar blue
validar:
-cotizacionDolarHoy(mayor a 0)

*/

function comenzar()
{
    let i;
	let mensaje;
    let dolarBlue;
    let dolarOficial;
    let acumuladorDolarBlue=0;
    let acumuladorDolarOficial=0;
    let promedioDolarBlue;
    let promedioDolarOficial;
    let dolarConMayorCotizacion;
    let flagDolar=0;
    let cotizacionMasAltaDolarOficial;
	for (i = 0; i < 5; i++) {
        do
        {
            dolarBlue = prompt("Ingrese dolarBlue");
            dolarBlue = parseFloat(dolarBlue);
        }while(isNaN(dolarBlue) || dolarBlue < 0);
        do
        {
            dolarOficial = prompt("Ingrese dolarOficial");
            dolarOficial = parseFloat(dolarOficial);
        }while(isNaN(dolarOficial) || dolarOficial < 0);
        //1
        acumuladorDolarBlue+=dolarBlue;
        acumuladorDolarOficial+=dolarOficial;

        if(flagDolar==0)
        {
            cotizacionMasAltaDolarOficial=dolarOficial;
            cotizacionMasBajaDolarBlue=dolarBlue;
            flagDolar=1;
        }
        else
        {
            //2
            if(dolarOficial > cotizacionMasAltaDolarOficial)
            {
                cotizacionMasAltaDolarOficial=dolarOficial;
            }
            //3
            if(dolarBlue < cotizacionMasBajaDolarBlue)
            {
                cotizacionMasBajaDolarBlue=dolarBlue;
            }
        }
	}
	//****************FIN DE ITERACIÓN************************ */
    //1
    if(acumuladorDolarBlue!=0)
    {
        promedioDolarBlue=acumuladorDolarBlue/i
    } 
    else
    {
        promedioDolarBlue=0;
    }
    if(acumuladorDolarOficial!=0)
    {
        promedioDolarOficial=acumuladorDolarOficial/i;
    }
    else
    {
        promedioDolarOficial=0;
    }
    if(promedioDolarBlue > promedioDolarOficial)
    {
        dolarConMayorCotizacion= "DOLAR BLUE";
    }
    else
    {
        dolarConMayorCotizacion="DOLAR OFICIAL"
    }
	//muestro
	mensaje = "\n 1- el dólar con mayor cotización promedio en la semana " + dolarConMayorCotizacion;
	mensaje += "\n 2- cotizacion Mas Alta del Dolar Oficial " + cotizacionMasAltaDolarOficial;
	mensaje += "\n 3- cotizacion Mas Baja Dolar Blue " + cotizacionMasBajaDolarBlue;

	alert(mensaje);


}
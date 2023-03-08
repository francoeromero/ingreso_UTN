
/*
1-Un bar nos contrato para administrar el consumo de los clientes en las distintas mesas del local. Para esto debemos desarrollar un algoritmo que nos permita el ingreso de los siguientes datos de varias mesas:

Nombre del cliente (no puede ser un número)
// Tipo de bebida (validar cerveza, limonada, gaseosa, ninguno)
// Tipo de comida (papitas, hamburguesa, rabas, ninguno)
Importe total
    
Necesitamos saber:
a-El tipo de comida más vendido 
b-el promedio de precio sobre el total
c-Cuánta gente ordenó comida pero no bebida.
*/

function comenzar()
{
    let continua;
	let mensaje;
    let nombreCliente;
    let tipoBebida;
    let contadorHamburguesa=0;
    let contadorRabas=0;
    let contadorPapitas=0;
    let tipoComidaMasVendido;
    let acumuladorPrecioTotal=0;
    let contadorImportesTotales=0;
    let promedioPrecioTotal;
    let contadorComidaNoBebida=0;
	
	
	do
	{
        do
        {
            nombreCliente = prompt("Ingrese nombreCliente");
            nombreCliente = nombreCliente.toLowerCase();
        }while(!isNaN(nombreCliente));
        do
        {
            tipoBebida = prompt("Ingrese tipoBebida");
            tipoBebida = tipoBebida.toLowerCase();
        }while(tipoBebida != "cerveza" && tipoBebida != "limonada" && tipoBebida != "gaseosa"&& tipoBebida != "ninguno");
        let tipoComida;
        do
        {
            tipoComida = prompt("Ingrese tipoComida");
            tipoComida = tipoComida.toLowerCase();
        }while(tipoComida != "papitas" && tipoComida != "hamburguesa" && tipoComida != "rabas"&& tipoComida != "ninguno");
        let importeTotal;
        do
        {
            importeTotal = prompt("Ingrese importeTotal");
            importeTotal = parseFloat(importeTotal);
        }while(isNaN(importeTotal) || importeTotal < 0);
        //a
        switch (tipoComida) {
            case "hamburguesa":
                contadorHamburguesa++;
            break;

            case "papitas":
                contadorPapitas++;
            break;
        
            default:
                contadorRabas++;
            break;
        }
        //b
        acumuladorPrecioTotal+=importeTotal;
        contadorImportesTotales++;
        //c
        if(tipoBebida=="ninguno"&& (tipoComida=="hamburguesa"||tipoComida=="papitas"||tipoComida=="rabas"))
        {
            contadorComidaNoBebida++;
        }


		continua = confirm("Quieres continuar?");
	}while(continua);
	//****************FIN DE ITERACIÓN************************ */
    if(contadorHamburguesa > contadorPapitas && contadorHamburguesa > contadorRabas)
	{
        tipoComidaMasVendido = "HAMBURGUESA";
    }else{
        if(contadorPapitas > contadorRabas && contadorPapitas > contadorHamburguesa)
		{
            tipoComidaMasVendido = "PAPITAS";
        }else{
            tipoComidaMasVendido = "RABAS";
        }
    }
    //b
    if(acumuladorPrecioTotal!=0)
    {
        promedioPrecioTotal=acumuladorPrecioTotal / contadorImportesTotales;
    }
    else
    {
        promedioPrecioTotal=0;
    }
	//muestro
	mensaje = "\n A " + tipoComidaMasVendido;
	mensaje += "\n B " + promedioPrecioTotal;
	mensaje += "\n C " + contadorComidaNoBebida;
	
	alert(mensaje);
}
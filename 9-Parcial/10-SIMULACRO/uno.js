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

function comenzar ()

{
    let nombreCliente;
    let contadorHamburguesa =0;
    let continua;
	let mensaje;
    let tipoComidadMasVendido;
    let tipoBebida;
    let importeTotal;
    let contadorRabas = 0;
    let contadorPapitas = 0;
    let acumuladorPrecio = 0;
    let promedioPrecio;
    let cantidadCompras = 0;
    let contadorPersonasSinBebidas = 0;
    

	do
	{
		
        do
        {
            nombreCliente = prompt("Ingrese nombreCliente").toLowerCase();
        }while(!isNaN(nombreCliente));
        do
        {
            tipoBebida = prompt("Ingrese tipoBebida").toLowerCase();
        }while(tipoBebida != "cerveza" && tipoBebida != "limonada" && tipoBebida != "gaseosa"&& tipoBebida != "ninguno");
        let tipoComidad;
        do
        {
            tipoComidad = prompt("Ingrese tipoComidad").toLowerCase();
        }while(tipoComidad != "papitas" && tipoComidad != "hamburguesa" && tipoComidad != "rabas"&& tipoComidad != "ninguno");
        do
        {
            importeTotal = prompt("Ingrese importeTotal");
            importeTotal = parseInt(importeTotal);
        }while(isNaN(importeTotal) || importeTotal < 0);

      

        if(tipoComidad == "hamburguesa")
        {
            contadorHamburguesa++;
        }
        else
        {
            if(tipoComidad == "papitas")
            {
                contadorPapitas++;
            }
            else
            {
                if(tipoComidad == "rabas")
                {
                    contadorRabas++;
                }
            }
        }
       
        //b
        importeTotal = 
        acumuladorPrecio += importeTotal;
        cantidadCompras++;

        //c
        if(tipoBebida == "ninguno")
        {
           if(!(tipoComidad == "ninguno")) 
           {
                contadorPersonasSinBebidas++;
           }
        }
        
		continua = confirm("Quieres continuar?");
	}while(continua);
	//********************************************************************* */
    // a-El tipo de comida más vendido 
    if(contadorHamburguesa > contadorPapitas && contadorHamburguesa > contadorRabas)
    {
        tipoComidadMasVendido = "HAMBURGUESAS";
    }
    else
    {
        if(contadorPapitas > contadorRabas && contadorPapitas > contadorHamburguesa )
        {
            tipoComidadMasVendido = "PAPITAS";
        }
        else
        {
            tipoComidadMasVendido = "RABAS";
        }
    }
    
    if(contadorHamburguesa == 0 && contadorPapitas == 0 && contadorRabas == 0)
    {
        tipoComidadMasVendido = "NINGUNA";
    }
    // b-el promedio de precio sobre el total
    promedioPrecio = acumuladorPrecio / cantidadCompras;
    

	//muestro
	mensaje = "\n a-El tipo de comida más vendido " + tipoComidadMasVendido;
	mensaje += "\n b-el promedio de precio sobre el total " + promedioPrecio;
	mensaje += "\n c- Cantidad de gente que ordeno comida pero NO bebida " + contadorPersonasSinBebidas;
	
	alert(mensaje);
	
}

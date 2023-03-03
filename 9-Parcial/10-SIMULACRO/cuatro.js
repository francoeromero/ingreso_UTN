/*
⦁	Un bar nos contrato para administrar el consumo de los clientes en las distintas mesas del local. Para esto debemos desarrollar un algoritmo que nos permita el ingreso de los siguientes datos:
a.	Nombre del cliente (no puede ser un número)
b.	Tipo de bebida (validar cerveza, limonada, gaseosa, ninguno)
c.	Tipo de comida (papitas, hamburguesa, rabas, ninguno)
	
	Los precios del bar son:
		Cerveza 500 $
		Limonada 300 $
		Gaseosa 250 $
		Papitas 1200 $
		Hamburguesa 2000 $
		Rabas 1800 $

Luego de tomar los datos, se nos pide también realizar algunos datos estadísticos    con respecto a las consumiciones hechas durante la jornada de la cual no se sabe exactamente cuanta cantidad de ventas se han realizado, a saber se nos pide


a.	El tipo de comida más vendido y bebida más vendida si la hay.
b.	El promedio de clientes que ordena solamente bebida. 
c.	Calcular la recaudación bruta y recaudación neta del local.
d.	Cuánta gente ordenó comida pero no bebida.

	Se debe tener en cuenta los distintos combos y promociones que el local ofrece:
		Cerveza y Papitas tiene un precio completo de 1500 $
		Rabas y Gaseosa tiene un precio de 1900 $
		Hamburguesa tiene gratis la bebida

	
*/

function comenzar()
{
    let continua;
    let contadorHamburguesas=0;
	let mensaje;
    let precioCerveza = 500;
    let precioLimonada= 300;
    let precioGaseosa=250;
    let precioPapitas=1200;
    let precioHamburguesa = 2000;
    let contadorRabas=0;
    let precioRabas= 1800;
    let promedioClienteSoloBebida 
    let tipoComidaMasVendido;
    let contadorClientes=0;
    let contadorPapitas=0;
    let contadorClienteSoloBebida=0;
    let precioBebida;
    let precioComida;
    let precioTotal;
    let acumuladorPrecios=0;
    let contadorSoloComida=0;
    
    
    
	
	do
	{
		
        let nombreCliente;
        do
        {
            nombreCliente = prompt("Ingrese nombreCliente").toLowerCase();
        }while(!isNaN(nombreCliente));
        let tipoBebida;
        do
        {
            tipoBebida = prompt("Ingrese tipoBebida").toLowerCase();
        }while(tipoBebida != "cerveza" && tipoBebida != "limonada" && tipoBebida != "gaseosa" && tipoBebida != "ninguno");
        let tipoComida;
        do
        {
            tipoComida = prompt("Ingrese tipoComida").toLowerCase();
        }while(tipoComida != "papitas" && tipoComida != "hamburguesa" && tipoComida != "rabas" && tipoComida != "ninguno");

        if(tipoComida == "hamburguesa")
        {
            contadorHamburguesas++;
        }
        else
        {
            if(tipoComida=="rabas")
            {
                contadorRabas++;
            }
            else
            {
                contadorPapitas++;
            }
        }

        if(tipoComida =="ninguno")
        {
            if(tipoBebida=="cerveza" || tipoBebida == "gaseosa" ||tipoBebida== "limonada")
            {
                contadorClienteSoloBebida++;
            }
        }
        else
        {
            contadorSoloComida++;
        }
        contadorClientes++;

        if(tipoBebida=="cerveza")
        {
            precioBebida= precioCerveza;
        }
        else
        {
            if(tipoBebida=="limonada")
            {
                precioBebida=precioLimonada;
            }
            else
            {
                if(tipoBebida=="gaseosa")
                {
                    precioBebida==precioLimonada;
                }
                else
                {
                    precioBebida = 0;
                }
            }
        }
        if(tipoComida=="hamburguesa")
        {
            precioComida = precioHamburguesa;
        }
        else
        {
            if(tipoComida=="papitas")
            {
                precioComida= precioPapitas;
            }
            else
            {
                if(tipoComida=="rabas")
                {
                    precioComida = precioRabas;
                }
                else
                {
                    precioComida = 0;
                }
            }
        }
        //promociones:
        //Cerveza y Papitas tiene un precio completo de 1500 $
		// Rabas y Gaseosa tiene un precio de 1900 $
		// Hamburguesa tiene gratis la bebida
        if(tipoBebida=="cerveza" && tipoComida=="papitas")
        {
            precioTotal = 1500;
        }
        else
        {
            if(tipoBebida=="gaseosa" && tipoComida=="rabas")
            {
                precioTotal = 1900
            }
            else
            {
                if(tipoBebida=="ninguno" && tipoComida=="hamburguesa")
                {
                    precioTotal = precioComida;
                }
                else
                {
                    precioTotal = precioBebida + precioComida;
                }
            }
        }
        acumuladorPrecios += precioTotal;
        
		continua = confirm("Quieres continuar?");
	}while(continua);
    	//**************************************** */
    if(contadorHamburguesas > contadorPapitas && contadorHamburguesas > contadorRabas)
    {
        tipoComidaMasVendido = "HAMBURGUESAS";
    }
    else
    {
        if(contadorPapitas > contadorRabas && contadorPapitas > contadorHamburguesas)
        {
            tipoComidaMasVendido = "PAPITAS";

        }
        else
        {
        tipoComidaMasVendido = "RABAS";

        }
    }
    //b
    promedioClienteSoloBebida= contadorClienteSoloBebida / contadorClientes;
    //c
	//muestro
	mensaje = "\n a) El tipo de comida más vendido y bebida más vendida es: " + tipoComidaMasVendido;
	mensaje += "\n b.	El promedio de clientes que ordena solamente bebida:  " + promedioClienteSoloBebida;
	mensaje += "\n c) La recaudación bruta es: " + acumuladorPrecios;
	mensaje += "\n d)	geente  q ordenó comida pero no bebida. " + contadorSoloComida;
	
	alert(mensaje);
}
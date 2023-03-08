/*
⦁   Un bar nos contrato para administrar el consumo de los clientes en las distintas mesas del local. Para esto debemos desarrollar un algoritmo que nos permita el ingreso de los siguientes datos:
a.  Nombre del cliente (no puede ser un número)
b.  Tipo de bebida (validar cerveza, limonada, gaseosa, ninguno)
c.  Tipo de comida (papitas, hamburguesa, rabas, ninguno)
    
    Los precios del bar son:
        Cerveza 500 $
        Limonada 300 $
        Gaseosa 250 $
        Papitas 1200 $
        Hamburguesa 2000 $
        Rabas 1800 $
Luego de tomar los datos, se nos pide también realizar algunos datos estadísticos    con respecto a las consumiciones hechas durante la jornada de la cual no se sabe exactamente cuanta cantidad de ventas se han realizado, a saber se nos pide

a.  El tipo de comida más vendido y bebida más vendida si la hay.
b.  El promedio de clientes que ordena solamente bebida. 
c.  Calcular la recaudación bruta y recaudación neta del local.
d.  Cuánta gente ordenó comida pero no bebida.
    Se debe tener en cuenta los distintos combos y promociones que el local ofrece:
        Cerveza y Papitas tiene un precio completo de 1500 $
        Rabas y Gaseosa tiene un precio de 1900 $
        Hamburguesa tiene gratis la bebida
    
*/

function comenzar()
{
    let PAPITAS=1200;
    let HAMBURGUESA=2000;
    let RABAS=1800;
    let CERVEZA=500;
    let LIMONADA=300;
    let GASEOSA=250;
	let continua;
	let mensaje;
	let nombreCliente;
    let tipoBebida;
    let tipoComida;
	let precioUnitario;
	
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
        do
        {
            tipoComida = prompt("Ingrese tipoComida");
            tipoComida = tipoComida.toLowerCase();
        }while(tipoComida != "papitas" && tipoComida != "hamburguesa" && tipoComida != "rabas"&& tipoComida != "ninguno");


        let precioBebida;
        let precioComida;
        let combo1=0;
        let combo2=0;
        if(tipoBebida=="cerveza")
        {
            combo1+=CERVEZA;
            if(tipoComida=="papitas")
            {
                combo1+=1000;
            }
        }
        if(tipoComida=="rabas")
        {
            combo2+=RABAS;
            if(tipoBebida=="gaseosa")
            {
                combo2+=100;
            }
        }


		continua = confirm("Quieres continuar?");
	}while(continua);
	//****************FIN DE ITERACIÓN************************ */

	//muestro
	// mensaje = "\n " + a;
	// mensaje += "\n " + a;
	// mensaje += "\n " + a;
	// mensaje += "\n " + a;
	// mensaje += "\n " + a;
	// mensaje += "\n " + a;
	// mensaje += "\n " + a;
	// mensaje += "\n " + a;
	alert(mensaje);
	
}
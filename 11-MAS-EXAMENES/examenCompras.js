
/*
El gerente de "El super de Anto" nos pide desarrollar un programa que permite cargar y analizar las compras realizadas por sus clientes.
Para ello se debe ingresar en cada una de las compras:

Nombre del comprador
Edad del comprador (Debe ser mayor de edad)
Cantidad de productos comprados (no debe ser negativo ni cero)
total gastado (no debe ser negativo ni cero)
metodo de pago (efectivo debito o credito)

En base a todas la compras registradas informar:

A) El promedio de edad entre todos los compradores;
B) El promedio de dinero gastado por los compradores menores de 25 años
C) El porcentaje de dinero que representa el total de las compras realizadas con tarjeta de debito
D) Nombre y cantidad de productos del comprador que menos gastó
*/

function comenzar()
{
    let continua;
	let mensaje;
    let nombreComprador;
    let edadComprador;
    let cantidadProducto;
    let totalGastado;
    let metodoPago;
    let acumuladorEdades=0;
    let contadorGeneralCompradores=0;
    let promedioEdades;
    let acumuladorGastosMenores25=0;
    let promedioGastosMenores25;
    let contadorMenores25=0;
    let acumuladorGastadoDebito=0;
	let acumuladorGastosGenerales;
    let porcentajeGastosDebito;
    let flag = 0;
    let minimoGasto;
    let nombreCompradorMenosGasto;
    let cantidadProductoMenosGasto
	
	do
	{
        do
        {
            nombreComprador = prompt("Ingrese nombreComprador");
            nombreComprador = nombreComprador.toLowerCase();
        }while(!isNaN(nombreComprador));	
        do
        {
            edadComprador = prompt("Ingrese edadComprador");
            edadComprador = parseInt(edadComprador);
        }while(edadComprador < 17 || isNaN(nombreComprador));
        do
        {
            cantidadProducto = prompt("Ingrese cantidadProducto comprados");
            cantidadProducto = parseFloat(cantidadProducto);
        }while(isNaN(cantidadProducto) || cantidadProducto < 1);
        do
        {
            totalGastado = prompt("Ingrese total Gastado de todos los productos");
            totalGastado = parseInt(totalGastado);
        }while(isNaN(totalGastado) || totalGastado < 1);
        do
        {
            metodoPago = prompt("Ingrese metodo de Pago efectivo debito o credito");
            metodoPago = metodoPago.toLowerCase();
        }while(metodoPago != "efectivo" && metodoPago != "debito" && metodoPago != "credito");   
        
        //a
        contadorGeneralCompradores++;
        acumuladorEdades=edadComprador;
        //b
        if(edadComprador < 25)
        {
            acumuladorGastosMenores25 += totalGastado;
            contadorMenores25++;
        }

		continua = confirm("Quieres continuar?");
        //c
        if(metodoPago=="debito")
        {
            acumuladorGastadoDebito+=totalGastado;
        }
        acumuladorGastosGenerales+=totalGastado;

        //d
        if(flag == 0 || totalGastado < minimoGasto)
        {
            minimoGasto = totalGastado;
            nombreCompradorMenosGasto = nombreComprador;
            cantidadProductoMenosGasto=cantidadProducto;
            flag = 1;
        }    
	}while(continua);
	//****************FIN DE ITERACIÓN************************ */

    //A
    if(acumuladorEdades!=0)
    {
        promedioEdades= acumuladorEdades/contadorGeneralCompradores; //ACA son generales por eso se divide por algo general de todos los compradores
    }
    else
    {
        promedioEdades=0;
    }
    //B
    if(acumuladorGastosMenores25!=0)
    {
        promedioGastosMenores25 = acumuladorGastosMenores25/contadorMenores25; //se divide de lo que especificamente me pide NO general
    }
    else
    {
        promedioGastosMenores25=0;
    }
    //C
    //acumuladorGastosGenerales__100%
    //acumuladorGastosDebito_____x%
    if(acumuladorGastadoDebito!=0)
    {
        porcentajeGastosDebito = (acumuladorGastadoDebito*100)/acumuladorGastosGenerales;
    }
    else
    {
        porcentajeGastosDebito=0;
    }
	//muestro
	mensaje = "\n A) El promedio de edad entre todos los compradores. " + promedioEdades;
	mensaje += "\n B) El promedio de dinero gastado por los compradores menores a 25 años." + promedioGastosMenores25;
	mensaje += "\n C) El porcentaje de dinero que representa el total de las compras realizadas con tarjeta de debito." + porcentajeGastosDebito;
	mensaje += "\n D) Nombre y cantidad de productos del comprador que menos gasto." + nombreCompradorMenosGasto + " y la cantidad es " + cantidadProductoMenosGasto;
	
	alert(mensaje);
	
}
/*
Desarrollar y probar el código en Entrada y salida Ej 1:

2- Una concesionaria necesita realizar un sistema de ventas online, donde se calculará las preferencias de 11 clientes.


Los datos necesarios son:
-Nombre del cliente: (no puede contener números)
-Edad: (validar que sea mayor a 18 años)
-Tipo de vehículo:  (Auto - Camioneta - PickUp)
-Preferencia: (Nafta – Diesel - GNC)
-Precio por vehículo.
-Cantidad de vehículos.


Calcular y mostrar en un document.write:
A- A la compra más grande realizada, se le otorgará un 15% de descuento, mostrando el nombre del cliente y su edad.
B- La mínima cantidad de vehículos vendidos.
C- Cuántas camionetas a GNC se compraron.
D- El cliente más viejo que compró una PickUp Nafta.
E- El porcentaje de clientes que compraron Auto, Camioneta y PickUp.


*/

function comenzar()
{
    let i;
    let mensaje;
    let nombreCliente;
    let edadCliente;
    let tipoVehiculo;
    let precioVehiculo;
    let preferencias;
    let cantidadVehiculos;
    let flag = 0;
    let compraMayor;
    let nombreClienteMayorCompra;
    let edadClienteMayorCompra;
    let porcentajeDescuento;
    let precioMayorCompra;
    let primerIngreso = 0;
    let minimaCantidadVehiculos;
    let contadorCamionetasGNC=0;
    let acumuladorCamioneta=0
    let banderaViejo = 0;
    let clienteMasViejoPickup;
    let nombreClienteMasViejoPickup;
    let acumuladorPickup=0;
    let acumuladorAuto=0;
    let pocentajeAutos;
    let porcentajePickup;
    let porcentajeCamionetas;
    

	for (i = 0; i < 11; i++) {
        
        do
        {
            nombreCliente = prompt("Ingrese nombreCliente").toLowerCase();
        }while(!isNaN(nombreCliente));

        do
        {
            edadCliente = prompt("Ingrese edadCliente");
            edadCliente = parseInt(edadCliente);
        }while(isNaN(edadCliente) || edadCliente < 17);
        do      
        {
            tipoVehiculo = prompt("Ingrese tipoVehiculo auto camioneta o pickup").toLowerCase();
        }while(tipoVehiculo != "auto" && tipoVehiculo != "camioneta" && tipoVehiculo != "pickup");

        do
        {
            preferencias = prompt("Ingrese preferencias nafta diesel o gnc").toLowerCase();
        }while(preferencias != "nafta" && preferencias != "diesel" && preferencias != "gnc");

        do
        {
            precioVehiculo = prompt("Ingrese precioVehiculo");
            precioVehiculo = parseFloat(precioVehiculo);
        }while(isNaN(precioVehiculo) || precioVehiculo < 0);

        do
        {
            cantidadVehiculos = prompt("Ingrese cantidadVehiculos");
            cantidadVehiculos = parseInt(cantidadVehiculos);
        }while(isNaN(cantidadVehiculos) || cantidadVehiculos < 0);

        //A- A la compra más grande realizada, se le otorgará un 15% de descuento, mostrando el nombre del cliente y su edad.
        if(flag == 0 || precioVehiculo > compraMayor)
        {
            compraMayor = precioVehiculo;
            porcentajeDescuento = 0.85;
            nombreClienteMayorCompra = nombreCliente;
            edadClienteMayorCompra = edadCliente;
            flag = 1;
        }
        //B- La mínima cantidad de vehículos vendidos.
        if(primerIngreso == 0 || cantidadVehiculos < minimaCantidadVehiculos)
        {
            minimaCantidadVehiculos = cantidadVehiculos;
            primerIngreso = 1;
        }
        //C- Cuantos GNC se compraron
        if(tipoVehiculo =="camioneta")
        {
            acumuladorCamioneta+=cantidadVehiculos;
            if(preferencias=="gnc")
            {
                contadorCamionetasGNC++;
            }
        }
        else
        {
            if(tipoVehiculo=="pickup")
            {
                acumuladorPickup+=cantidadVehiculos;
                if(banderaViejo == 0 || edadCliente > clienteMasViejoPickup)
                {
                    clienteMasViejoPickup = edadCliente;
                    nombreClienteMasViejoPickup = nombreCliente;
                    banderaViejo = 1;
                }
            }
            else
            {
                acumuladorAuto+=cantidadVehiculos;
            }
        }
	}
	//**************************************** */
    precioMayorCompra = precioVehiculo * porcentajeDescuento;

    
    porcentajeCamionetas = (acumuladorCamioneta * 100 )/ i; 
    porcentajePickup = (acumuladorPickup *100) / i;
    pocentajeAutos = (acumuladorAuto *100) / i

	//muestro
	mensaje = "\n A- A la compra más grande realizada, se le otorgará un 15% de descuento " + precioMayorCompra;
	mensaje += "\n B- La minima cantidad vehiculos" + minimaCantidadVehiculos;
	mensaje += "\n C- cantidad camionetas gnc " + contadorCamionetasGNC;
	mensaje += "\n D- El cliente mas viejo pick up " + nombreClienteMasViejoPickup;
	mensaje += "\n porcentajeCamionetas es : " + porcentajeCamionetas + "%";
	mensaje += "\n porcentajePickup es : " + porcentajePickup+ "%";
	mensaje += "\n pocentajeAutos es : " + pocentajeAutos+ "%";
	
	alert(mensaje);

}
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
    let precioVehiculo;
    let edadCliente;
    let preferencias;
    let tipoVehiculo;
    let cantidadVehiculos;
    let primerIngreso = 0;
    let mayorPrecio;
    let nombreMayorPrecio;
    let edadMayorPrecio;
    let porcentajeDescuento;
    let flag = 0;
    let minCantidad;
    let descuentoMayorCompra;
    let contadorGnc =0;
    let contadorAuto=0;
    let porcentajeAuto;
    let porcentajeCamioneta;
    let porcentajePickup;
    let contadorPickup=0;
    let contador=0
    let banderaViejo = 0;
    let masViejo;
    let nombreMasViejo;
    
    
    
    
    

	for (i = 0; i < 11; i++) {

        do
        {
            nombreCliente = prompt("Ingrese nombreCliente").toLowerCase();
        }while(!isNaN(nombreCliente));

        do
        {
            edadCliente = prompt("Ingrese edadCliente");
            edadCliente = parseInt(edadCliente);
        }while(isNaN(edadCliente) || edadCliente < 18 );

        do
        {
            tipoVehiculo = prompt("Ingrese tipoVehiculo: auto camioneta o pickup").toLowerCase();
        }while(tipoVehiculo != "auto" && tipoVehiculo != "camioneta" && tipoVehiculo != "pickup");

        do
        {
            preferencias = prompt("Ingrese preferencias  (Nafta  Diesel o  GNC)").toLowerCase();
        }while(preferencias != "gnc" && preferencias != "diesel" && preferencias != "nafta");

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

        // A

        if(primerIngreso == 0 || precioVehiculo > mayorPrecio)
        {
            mayorPrecio = precioVehiculo;
            nombreMayorPrecio = nombreCliente;
            edadMayorPrecio = edadCliente;
            porcentajeDescuento = 0.85;
            primerIngreso = 1;
        }
        //B- La mínima cantidad de vehículos vendidos.
        
        if(flag == 0 || cantidadVehiculos < minCantidad)
        {
            minCantidad = cantidadVehiculos;
            flag = 1;
        }
        //C- Cuántas camionetas a GNC se compraron.
        if(preferencias=="gnc")
        {
            contadorGnc++;
        }
        //D- El cliente más viejo que compró una PickUp Nafta.
        if(banderaViejo == 0 || edadCliente > masViejo)
        {
            masViejo = edadCliente;
            nombreMasViejo = nombreCliente;
            banderaViejo = 1;
        }
        //E- El porcentaje de clientes que compraron Auto, Camioneta y PickUp.
        
        if(tipoVehiculo =="auto")
        {
            contadorAuto++;
        }
        else
        {
            if(tipoVehiculo=="camioneta")
            {
                contadorCamioneta++;
            }
            else
            {
                contadorPickup++;
            }
        }
        
        
        
	}
    
	//**************************************** */
    //A
    descuentoMayorCompra = mayorPrecio + (mayorPrecio * porcentajeDescuento);
    //E
    // 11 ________________100%
    // contadorAuto_______x %
    if(contadorAuto==0)
    {
        porcentajeAuto = "No se compro ninguno";
    }
    else
    {  
        porcentajeAuto = (contadorAuto *100 ) / i;
    }
    
    if(contadorCamioneta==0)
    {
        porcentajeCamioneta  = "No se compro ninguno";
    }
    else
    {
        porcentajeCamioneta = (contadorCamioneta*100) / i;
    }
    if(contadorPickup==0)
    {
        porcentajePickup =   "No se compro ninguno";
    }
    else
    {
        porcentajePickup= (contadorPickup*100) / i;
    }
    
	//muestro
	mensaje = "\n A- De la mayor compra el nombre es: " + nombreCliente;
	mensaje += "\n A- La edad del mayor cliente es de : " + edadCliente;
	mensaje += "\n B- La minima cantidad de vehiculos vendidos " + minCantidad;
	mensaje += "\n C- La cantidad de gnc que se compraron" + contadorGnc;
	mensaje += "\n D- El cliente más viejo que compró una PickUp Nafta es: " + nombreMasViejo;
	mensaje += "\n E- El porcentaje de compra de AUTOS" + porcentajeAuto + "%";
	mensaje += "\n E- El porcentaje de compra de CAMIONETAS" + porcentajeCamioneta+ "%";
	mensaje += "\n  E- El porcentaje de compra de PICKUP" + porcentajePickup+ "%";
	alert(mensaje);

}
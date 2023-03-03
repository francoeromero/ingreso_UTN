/*
Parador Atalaya

Para la nueva sucursal de Atalaya a la vuelta de UTN Avellaneda, es necesario llevar un registro de la venta diaria de cafés, medialunas y churros, esto durante las siguientes 12 horas.
Para eso, al momento de cada venta, se debe ingresar:

Nombre del cliente a retirar
Tipo (Café / Medialunas /Churros) 
Cantidad.

El precio por unidad de cada producto es:

Café $100.
Medialunas $60.
Churros $50.


// Si compra 2 docenas de Medialunas o Churros tendrá un 30% de descuento.
// Si compra 1 docena Medialunas o Churros tendrá un 20% de descuento.
// Si compra 10 Medialunas o Churros tendrá un 10% de descuento.
// Si compra 5 Medialunas o Churros y un café tendrá un 5% de descuento.

Informes:

Cuantas Medialunas se compraron durante toda la jornada.
Cuál fue el producto con más unidades vendidas.
Nombre del cliente, y tipo de producto con mayor cantidad de compras
En caso de haber excedido el monto de $1300 sumarle un 20% de impuestos.
Informar cuál fue el producto menos vendido


*/


// Café $100.
// Medialunas $60.
// Churros $50.

function comenzar()
{
    let continua;
    let tipoProducto;
	let mensaje;
    let nombreCliente;
    let cantidadProducto;
	let i;
    let CAFE = 100;
    let MEDIALUNAS = 60;
    let CHURROS = 50;
	let porcentajeDescuento;















	for (i = 0; i < 7; i++) {

        	
        do
        {
            nombreCliente = prompt("Ingrese nombreCliente").toLowerCase();
        }while(!isNaN(nombreCliente));
        
        do
        {
            tipoProducto = prompt("Ingrese tipoProducto").toLowerCase();
        }while(tipoProducto != "cafe" && tipoProducto != "medialunas" && tipoProducto != "churros");
        do
        {
            cantidadProducto = prompt("Ingrese cantidadProducto");
            cantidadProducto = parseInt(cantidadProducto);
        }while(isNaN(cantidadProducto) || cantidadProducto < 0);

        // Si compra 2 docenas de Medialunas o Churros tendrá un 30% de descuento.
        // Si compra 1 docena Medialunas o Churros tendrá un 20% de descuento.
        // Si compra 10 Medialunas o Churros tendrá un 10% de descuento.
        // Si compra 5 Medialunas o Churros y un café tendrá un 5% de descuento.

        if(tipoProducto == "medialunas" || tipoProducto == "churros")
        {
            if(cantidadProducto == 24)
            {
                porcentajeDescuento = 0.7;
            }
            else
            {
                if(cantidadProducto == 12)
                {
                    porcentajeDescuento = 0.8;
                }
                else
                {
                    if(cantidadProducto == 10)
                    {
                        porcentajeDescuento = 0.9;
                    }
                    else
                    {
                        porcentajeDescuento = 1;
                    }
                }
            }
        }
        else
        {
            if(tipoProducto == "cafe")
            {
                if(cantidadProducto == 5)
                {
                    porcentajeDescuento = 0.95;
                }
                else
                {
                    porcentajeDescuento = 1;
                }
            }
        }
	}
	//**************************************** */

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
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


function comenzar()
{

    
	let i;
	let mensaje;
    let nombreCliente;
    let tipoProducto;
    let cantidadProducto;
    let CAFE=100;
    let MEDIALUNA=60;
    let CHURRO=50;
    let descuento;
    let precioTotal;
    let precioUnitario;
    let comproCafe=false;
    let acumuladorMedialunas=0;
    let acumuladorChurros=0;
    let acumuladorCafes=0;
    let productoConMasUnidadesVendidas;
    let flagCliente=0;
    let nombreClienteConMayorCantidadCompras;
    let tipoProductoConMayorCantidadCompras;
    let impuesto=1.2;
    let precioConImpuesto;
    let preguntar;
	for (i = 0; i < 12; i++) 
    {
        do
        {
            nombreCliente = prompt("Ingrese nombre del Cliente").toLowerCase();
        }while(!isNaN(nombreCliente));
        do
        {
            do
            {
                tipoProducto = prompt("Ingrese tipo de Producto (cafe medialunas churros)").toLowerCase();
            }while(tipoProducto != "cafe" && tipoProducto != "medialunas" && tipoProducto != "churros");
            do
            {
                cantidadProducto = prompt("Ingrese cantidad Producto");
                cantidadProducto = parseInt(cantidadProducto);
            }while(isNaN(cantidadProducto) || cantidadProducto < 0);

            preguntar=confirm("Algo mas?");
        }while(preguntar);

        if(tipoProducto=="medialunas")
        {
            acumuladorMedialunas+=cantidadProducto;
            if(cantidadProducto==24)
            {
                precioUnitario=MEDIALUNA*0.70;
            }
            else
            {
                if(cantidadProducto==12)
                {
                    precioUnitario=MEDIALUNA*0.8;
                }
                else
                {
                    if(cantidadProducto==10)
                    {
                        precioUnitario=MEDIALUNA*0.9;
                    }
                    else
                    {
                        if(cantidadProducto==5)
                        {
                            comproCafe=confirm("compró cafe?");
                        }
                        if(comproCafe)
                        {
                            precioUnitario=MEDIALUNA*0.95;
                        }
                    }
                }
            }
        }
        if(tipoProducto=="churros")
        {
            acumuladorChurros+=cantidadProducto;
            if(cantidadProducto==24)
            {
                precioUnitario=CHURRO*0.70;
            }
            else
            {
                if(cantidadProducto==12)
                {
                    precioUnitario=CHURRO*0.8;
                }
                else
                {
                    if(cantidadProducto==10)
                    {
                        precioUnitario=CHURRO*0.9;
                    }
                    else
                    {
                        if(cantidadProducto==5)
                        {
                            comproCafe=confirm("Compró café?");
                        }
                        if(comproCafe)
                        {
                            precioUnitario=CHURRO*0.95;
                            acumuladorCafes+=cantidadProducto;
                        }
                    }
                }
            }
        }
        else
        {
            if(tipoProducto=="cafe")
            {
                acumuladorCafes+=cantidadProducto;
            }
        }

        precioTotal = precioUnitario * cantidadProducto;
        if(precioTotal > 1300)
        {
            precioConImpuesto = precioTotal*impuesto;
        }
        


        if(flagCliente==0)
        {
            tipoProductoConMayorCantidadCompras=tipoProducto;
            nombreClienteConMayorCantidadCompras=nombreCliente;
            mayorCantidadDeCompras=cantidadProducto;
            menorCantidadDeCompras=cantidadProducto;
            productoMenosCantidadCompras =tipoProducto;
            flagCliente=1;
        }
        else
        {
            if(cantidadProducto > mayorCantidadDeCompras)
            {
                nombreClienteConMayorCantidadCompras=nombreCliente;
                tipoProductoConMayorCantidadCompras=tipoProducto;
            }
            if(cantidadProducto < menorCantidadDeCompras)
            {
                productoMenosCantidadCompras=tipoProducto;
            }
        }

     
    }    
//****************FIN DE ITERACIÓN************************ */
      if(acumuladorCafes > acumuladorChurros && acumuladorCafes > acumuladorMedialunas)
	{
        productoConMasUnidadesVendidas = "CAFE";
    }else{
        if(acumuladorChurros > acumuladorMedialunas && acumuladorChurros > acumuladorCafes)
		{
            productoConMasUnidadesVendidas = "CHURROS";
        }else{
            productoConMasUnidadesVendidas = "MEDIALUNAS";
        }
    }
  

	//muestro
	mensaje = "\n cantidad de medialunas compradas durante toda la jornada " + acumuladorMedialunas;
	mensaje += "\n producto Con Mas Unidades Vendidas" + productoConMasUnidadesVendidas;
	
	mensaje += "\n nombre Cliente Con Mayor Cantidad Compras " + nombreClienteConMayorCantidadCompras;
	mensaje += "\n tipo Producto Con Mayor Cantidad Compras" + tipoProductoConMayorCantidadCompras;
	mensaje += "\n el tipo de producto con menos cantidad de compras " + productoMenosCantidadCompras;

	alert(mensaje);
    
}


// if(cantidadProducto ==24 && tipoProducto=="medialunas")
// {
//     precioUnitario= MEDIALUNA*0.7;
// }
// else
// {
//     if(cantidadProducto==12 && tipoProducto=="medialunas")
//     {
//         precioUnitario = MEDIALUNA*0.8;
//     }
//     else
//     {
//         if(cantidadProducto==10 && tipoProducto=="medialunas")
//         {
//             precioUnitario=MEDIALUNA*0.9;
//         }
//         else
//         {
//             if(cantidadProducto==5 && tipoProducto=="medialunas")
//             {
//                 comproCafe = confirm("Compró cafe?");
//             }
//             if(comproCafe)
//             {
//                 precioUnitario = MEDIALUNA*0.95;
//             }
//         }
//     }
// }

// if(cantidadProducto ==24 && tipoProducto=="churros")
// {
//     precioUnitario= CHURRO*0.7;
// }
// else
// {
//     if(cantidadProducto==12 && tipoProducto=="churros")
//     {
//         precioUnitario = CHURRO*0.8;
//     }
//     else
//     {
//         if(cantidadProducto==10 && tipoProducto=="churros")
//         {
//             precioUnitario=CHURRO*0.9;
//         }
//         else
//         {
//             if(cantidadProducto==5 && tipoProducto=="churros")
//             {
//                 comproCafe= confirm("Compró cafe?");
//             }
//             if(comproCafe)
//             {
//                 precioUnitario=CHURRO*0.95;
//             }
//         }
//     }
// }





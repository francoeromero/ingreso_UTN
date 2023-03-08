/*
Un maxikiosko solicita la creación de una aplicación simple para ir controlando la mercadería vendida durante el transcurso del día laboral. Se ingresarán un total de 10 ventas, incluyendo una serie de datos: 


Nombre del producto, 
Tipo de producto ("golosinas", "bebidas", "cigarrillos"), Precio unitario del producto (desde 1,00$ hasta 1000,00$), Cantidad de unidades por venta (entre 1 y 10). Se deberá calcular e informar:

a) El total bruto recaudado con las 10 ventas.
b) El promedio de unidades por compra de golosinas (en caso de no realizar ninguna venta de golosinas, informarlo). 
c) De los cigarrillos más caros, el nombre y su precio unitario. 
d) De las 10 ventas, que porcentaje de ventas le pertenece a las bebidas.
*/

function comenzar()
{
    let i;
	let mensaje;
    let nombreProducto;
    let tipoProducto;
    let precioUnitarioProducto;
    let precioTotal;
    let cantidadUnidadesPorVenta;
    let acumuladorBrutoRecaudado=0;
    let contadorGeneral=0;
    let promedioGolosinas;
    let acumuladorGolosinas=0;
    let flagCigarrillo=0;
    let precioCigarrilloMasCaro;
    let nombreCigarrilloMasCaro;
    let acumuladorBebidas=0;
    let porcentajeBebidas;
    

	for (i = 0; i < 10; i++) {

        do
        {
            nombreProducto = prompt("Ingrese nombreProducto").toLowerCase();
        }while(!isNaN(nombreProducto));
        do
        {
            tipoProducto = prompt("Ingrese tipoProducto").toLowerCase();
        }while(tipoProducto != "golosinas" && tipoProducto != "bebidas" && tipoProducto != "cigarrillos");
        do
        {
            precioUnitarioProducto = prompt("Ingrese precioUnitarioProducto");
            precioUnitarioProducto = parseFloat(precioUnitarioProducto);
        }while(isNaN(precioUnitarioProducto) || precioUnitarioProducto < 0 || precioUnitarioProducto > 1001);
        do
        {
            cantidadUnidadesPorVenta = prompt("Ingrese cantidadUnidadesPorVenta");
            cantidadUnidadesPorVenta = parseFloat(cantidadUnidadesPorVenta);
        }while(cantidadUnidadesPorVenta < 0 || cantidadUnidadesPorVenta > 11);    
        //a
        precioTotal= cantidadUnidadesPorVenta*precioUnitarioProducto;
        acumuladorBrutoRecaudado+=precioTotal;
        //b
        if(tipoProducto=="golosinas")
        {
            acumuladorGolosinas+=cantidadUnidadesPorVenta;
        }
        else
        {
            if(tipoProducto=="cigarrillos")
            {
                if(flagCigarrillo==0)
                {
                    precioCigarrilloMasCaro = precioUnitarioProducto;
                    nombreCigarrilloMasCaro=nombreProducto;
                    flagCigarrillo=1;
                }
                else
                {
                    if(precioUnitarioProducto>precioCigarrilloMasCaro)
                    {
                        precioCigarrilloMasCaro=precioUnitarioProducto;
                        nombreCigarrilloMasCaro=nombreProducto;
                    }
                }
            }
            else
            {
                acumuladorBebidas+=precioUnitarioProducto;
            }
        }
        
	}
	//****************FIN DE ITERACIÓN************************ */
    
    //b
    if(contadorGolosinas!=0)
    {
        promedioGolosinas=acumuladorGolosinas/i;
    }
    else
    {
        promedioGolosinas="ninguna venta de golosinas";
    }
    //porcentaje bebidas
    // acumuladorBrutoRecaudado($) ____100%
    // acumuladorBebidas($)____________x%
    if(acumuladorBebidas!=0)
    {
        porcentajeBebidas= (acumuladorBebidas*100 )/ acumuladorBrutoRecaudado;
    }
    else
    {
        porcentajeBebidas=0;
    }
	//muestro
	mensaje = "\n a) El total bruto recaudado con las 10 ventas. " + acumuladorBrutoRecaudado;
	mensaje += "\n b) El promedio de unidades por compra de golosinas " + promedioGolosinas;
	mensaje += "\n c) De los cigarrillos más caros, el nombre y su precio unitario. " + nombreCigarrilloMasCaro + " y su precio es: "+ precioCigarrilloMasCaro;
	mensaje += "\n d) de las 10 ventas porcentaje de las bebidas " + porcentajeBebidas + "%";
	
	alert(mensaje);
}
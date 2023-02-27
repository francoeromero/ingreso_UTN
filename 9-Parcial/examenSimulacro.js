/**************************

Enunciado:
Una empresa de mercaderia nos pide un sistema de almacenamiento para sus productos.
La empresa dispone de 3 bodegas para almacenar los productos: 
- Avellaneda (20.000KG)
- CABA (25.000KG) 
- Lanus (15.000 KG)

Para poder almacenar los productos correctamente se debera ingresar el deposito, siempre y cuando este disponible,
una descripcion del producto en cuestion, 
y el peso del nuevo ingreso a la bodega. Hasta que el usuario desee.

pido: descripcion, peso, 

Se debera informar:
a) Cual fue el producto con mas peso entre las tres bodegas, e indicar el promedio
b) Cual fue la bodega con mas ingresos.
c) Cual es la bodega mas llena.
d) Porcentaje disponible de cada bodega.

***************************/
/*
function comenzar()
{
    let mensaje;
    let preguntar = "y";
    let descripcion;
    let peso;
    let productoMasPesado;
    let flagMasPesado;
    let maxPeso;
    let bodega;
    while(preguntar == "y")
    {
        bodega= prompt("Ingrese a que bodega depositara: avellaneda, caba o lanus");
        while(bodega != "avellaneda" && bodega != "caba" && bodega != "lanus")
        {
            bodega= prompt("ERROR");
        }
        descripcion = prompt("Ingrese la descripcion del producto: ").toLowerCase();
        while(isNaN(descripcion)== false)
        {
            descripcion = prompt("ERROR").toLowerCase();
        }
        peso = prompt("Ingrese el peso KG");
        peso = parseFloat(peso);
        while(isNaN(peso)== true)
        {
            peso = prompt("ERROR");
            peso = parseFloat(peso);
        }
        if(bodega == "avellaneda")
        {

        }
        else
        {
            if(bodega == "caba")
            {

            }
            else //lanus
            {

            }
        }

        //a) Cual fue el producto con mas peso entre las tres bodegas, e indicar el promedio
        if(flagMasPesado == 0 || peso > maxPeso)
        {
            maxPeso = peso;
            flagMasPesado==1;
        }

        preguntar = prompt("Quiere almacenar algo mas?");
    }
}*/

/*
Una aerolinea nos contrata con el fin de crear una aplicacion para administrar la venta de pasajes.
Se sabe que por el momento solamente disponen de 

3 vendedores de paquetes de viajes (Pepepeposo, Quinoto y Huesos). 

Cualquiera de los unicos 3 vendedores disponibles de la empresa es capaz de vender un paquete de viaje el cual


    puede tener desde 1 pasaje hasta 5 pasajes para todo un grupo familiar. 
    Para vender un paquete de viaje se necesitan los siguientes datos.

Nombre del vendedor (validar los nombres ya mencionados).
Nombre del comprador (validar que no sea un numero).
Cantidad de pasajes (validar teniendo en cuenta lo mencionado anteriormente).
Precio total del paquete de viaje (validar el rango posible de precio).
Tipo de asiento (validar clase economica, clase ejecutiva, primera clase).

    Nota: los paquetes de viajes en clase economica no tienen ningun descuento ni aumento, los de clase ejecutiva tienen un 20% de aumento
    y los de primera clase tienen un 35% de aumento sobre el precio base del paquete.

Tipo de viaje (validar si el viaje es directo o con escala).
Tipo de destino (validar si es nacional o internacional).

La empresa tambien nos pide realizar los algoritmos necesarios para poder saber:

A) El total de pesos recaudados de cada vendedor.
B) El vendedor que mas recaudo y la cantidad de pesos recaudados por ese vendedor.
C) El porcentaje de paquetes de vuelos nacionales e internacionales vendidos.
D) Cual es la cantidad de paquetes de viaje vendidos que sean directos e internacionales.
E) Calcular el precio final del paquete de viaje teniendo en cuenta el tipo de asiento e informarlo antes de la proxima venta con un alert
F) El promedio de ventas de los paquetes de viajes con respecto al tipo de asiento seleccionado por el cliente.
*/

function comenzar()
{
    let mensaje;
    let preguntar = "y";
    let nombreVendedor;
    let nombreComprador;
    let cantidadPasajes;
    let precioTotal;
    let tipoAsiento;
    let tipoViaje;
    let tipoDestino;

    let flagMasRecaudado = 0;
    let precioTotalMax;
    let nombreVendedorMax;

    while(preguntar == "y")
    {
        //Pepepeposo, Quinoto y Huesos
        nombreVendedor = prompt("Ingrese el nombre del vendedor:").toLowerCase;
        while(nombreVendedor!="pepepeposo" && nombreVendedor != "quinoto" && nombreVendedor!="huesos")
        {
            nombreVendedor = prompt("ERROR, pepepeposo, quinoto o huesos");
        }
        nombreComprador = prompt("Ingrese el nombre del comprador: ").toLowerCase;
        while(isNaN(nombreComprador) ==false)
        {
            nombreComprador = prompt("ERROR");
        }
        cantidadPasajes = prompt("Ingrese la cantidad de pasajes: ");
        cantidadPasajes= parseFloat(cantidadPasajes);
        while(isNaN(cantidadPasajes)==true)
        {
            cantidadPasajes = prompt("ERROR");
        }
        precioTotal = prompt("Ingrese el precio total: ");
        precioTotal = parseFloat(precioTotal);
        while(precioTotal < 0)
        {
            precioTotal = prompt("ERROR");
        }
        //Tipo de asiento (validar clase economica, clase ejecutiva, primera clase).
        tipoAsiento = prompt("Ingrese tipo de asiento: clase economica, clase ejecutiva, primera clase: ").toLowerCase;
        while(tipoAsiento != "clase economica" && tipoAsiento != "clase ejecutiva" && tipoAsiento != "primera clase")
        {
            tipoAsiento = prompt("ERROR clase economica, clase ejecutiva, primera clase");
        }
        tipoViaje = prompt("Ingrese el tipo de viaje directo o escala")
        while(tipoViaje != "directo" && tipoViaje != "escala")
        {
            tipoViaje = prompt("ERROR directo o escala");
        }
        tipoDestino = prompt("Ingrese el tipo de destino: nacional o internacional")
        while(tipoDestino != "nacional" && tipoDestino != "internacional")
        {
            tipoDestino = prompt("ERROR nacional o internacional");
        }
        //A) El total de pesos recaudados de cada vendedor.
        acumuladorPrecioTotal += precioTotal;
        //B) El vendedor que mas recaudo y la cantidad de pesos recaudados por ese vendedor.
        if(flagMasRecaudado == 0 || precioTotal > precioTotalMax)
        {
            precioTotalMax = precioTotal;
            nombreVendedorMax = nombreVendedor;
        }
        //C) El porcentaje de paquetes de vuelos nacionales e internacionales vendidos.

    }
    mensaje = acumuladorPrecioTotal;
    mensaje += "cantidad de pesos del vendedor que mas recaudo" + nombreVendedor;
    mensaje += "el vendedor que mas recaudo" + precioTotalMax;

}
/*
Romero Montero Franco Ezequiel
fecha: 8/03/2023
division K 
turno Noche
dni 40143483
Ej 1



En una hamburguesería el cajero debe ir cargando los pedidos de los clientes.
Los datos que se tienen que ingresar son:
Nombre, Apellido, edad.

Que tipo de hamburguesa (simple, doble o veggie), cantidad de hamburguesas. La simple vale 125, la doble 185 y la veggie 145.
Esto se debe cargar hasta que el cajero decida.
Al final, se deberá presentar:

A)Cuál fue el tipo de hamburguesa más comprada.

B)Cual fue el promedio de compra por tipo de hamburguesa.

C)El nombre y apellido de la persona que realizó la compra más barata.


*/

function comenzar()
{
    let continua;
	let mensaje;
    let nombreCliente;
    let apellidoCliente;
    let edadCliente;
    let tipoHamburguesa;
	let precio;
    let contadorDoble=0;
    let contadorVeggie=0;
    let contadorSimple=0;
    let laMasComprada;
    let acumuladorDoble=0;
    let acumuladorSimple=0;
    let acumuladorVeggie=0;
    let promedioSimple;
    let promedioDoble;
    let promedioVeggie;
    let flag = 0;
    let minCompra;
    let nombreMinCompra;
    let cantidadHamburguesas;
	

	do
	{
        do
        {
            nombreCliente = prompt("Ingrese nombreCliente");
            nombreCliente = nombreCliente.toLowerCase();
        }while(!isNaN(nombreCliente));

        do
        {
            apellidoCliente = prompt("Ingrese apellidoCliente");
            apellidoCliente = apellidoCliente.toLowerCase();
        }while(!isNaN(apellidoCliente));

        let precioTotal;
        do
        {
            edadCliente = prompt("Ingrese edadCliente");
            edadCliente = parseInt(edadCliente);
        }while(isNaN(edadCliente) || edadCliente < 0);  

        do
        {
            tipoHamburguesa = prompt("Ingrese tipo de hamburguesa(simple, doble o veggie)");
            tipoHamburguesa = tipoHamburguesa.toLowerCase();
        }while(tipoHamburguesa != "simple" && tipoHamburguesa != "doble" && tipoHamburguesa != "veggie");

        do
        {
            cantidadHamburguesas = prompt("Ingrese cantidadHamburguesas");
            cantidadHamburguesas = parseInt(cantidadHamburguesas);
        }while(isNaN(cantidadHamburguesas) || cantidadHamburguesas < 0);
        //A
        switch (tipoHamburguesa) 
        {
            case "doble":
                precio=185;
                contadorDoble++;
                acumuladorDoble+=precio;
            break;
            case "simple":
                precio=125;
                acumuladorSimple+=precio;
            break;
            default:
                precio=145;
                contadorVeggie++;
                acumuladorVeggie+=precio;
            break;
        }
        precioTotal = precio * cantidadHamburguesas;
        //C
        if(flag == 0 || precioTotal < minCompra)
        {
            minCompra = precioTotal;
            nombreMinCompra = nombreCliente;
            apellidoMinCompra=apellidoCliente;
            flag = 1;
        }
    
		continua = confirm("Quieres continuar?");
	}while(continua);
	//****************FIN DE ITERACIÓN************************ */
    //A
	if(contadorDoble > contadorSimple && contadorDoble > contadorVeggie)
	{
        laMasComprada = "contadorDoble";
    }else{
        if(contadorSimple > contadorVeggie && contadorSimple > contadorDoble)
		{
            laMasComprada = "contadorSimple";
        }else{
            laMasComprada = "contadorVeggie";
        }
    }
    //b
    if(contadorSimple!=0 )
    {
        promedioSimple= acumuladorSimple/contadorSimple;
    }
    else
    {
        promedioSimple=0;
    }
    if(contadorDoble!=0)
    {
        promedioDoble = acumuladorDoble/contadorDoble;
    }
    else
    {
        promedioDoble=0;
    }
    if(contadorVeggie!=0)
    {
        promedioVeggie=acumuladorVeggie/contadorVeggie;
    }
    else
    {
        promedioVeggie=0;
    }

	//muestro
	mensaje = "\n A- la Mas Comprada " + laMasComprada;
	mensaje += "\n B- promedio Veggie " + promedioVeggie;
	mensaje += "\n B- promedio Doble " + promedioDoble;
	mensaje += "\n B- promedio Simple " + promedioSimple;
	mensaje += "\n C- nombre Minima Compra " + nombreMinCompra;
	mensaje += "\n C- apellido Minima Compra" + apellidoMinCompra;

	alert(mensaje);
}
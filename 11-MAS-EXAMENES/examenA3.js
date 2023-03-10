/*
Romero Montero Franco Ezequiel
fecha: 8/03/2023
division K 
turno Noche
dni 40143483
Ej 3

Una librería desea corroborar quién es el mejor vendedor para poder premiarlo y destacarlo como empleado del mes. Para ello se deben ingresar los siguientes datos dependiendo de las cantidades de venta que hubo en el día.

-Carnet de vendedor: (AA203 -A3246 -A8898)
-Genero vendido: (Terror, Infantil, Autoayuda, Mezclado)
-El total vendido
-Estrellas puestas por el cliente (se ingresa un campo numérico que va del 1 al 5)


Una vez finalizado la carga total del día calcular:


1)Cual fue el género más vendido.
2)Cuál fue el vendedor que tiene el menor promedio de estrellas.
3)Si el vendedor superó una cantidad total de $3020 le corresponde una comisión del %12, sino del %6. Mostrar la venta mas barata.


*/

function comenzar()
{
    let continua;
	let mensaje;
    let carnetVendedor;
    let generoVendido;
    let totalVendido;
    let estrellasClientes;
    let contadorAutoayuda=0;
    let contadorMezclado=0;
    let contadorTerror=0;
    let contadorInfantil=0;
    let acumuladorUnoEstrellas=0;
    let contadorUnoEstrellas=0;
    let generoMasVendido;
    let vendedorConPromedioMenor;
	let contadorDosEstrellas=0;
    let acumuladorDosEstrellas=0;
    let contadorTresEstrellas=0;
    let acumuladorTresEstrellas=0;
    let comision;
    let promedioUno;
    let promedioDos;
    let promedioTres;
    let importeTotal;
    let flag = 0;
    let minVenta;
    let carnetVendedorVentaMasBarata;
	
	do
	{
        do
        {
            carnetVendedor = prompt("Ingrese carnetVendedor (AA203 -A3246 -A8898)");
            carnetVendedor = parseInt(carnetVendedor);
        }while(carnetVendedor < 0);
        do
        {
            generoVendido = prompt("Ingrese generoVendido (Terror, Infantil, Autoayuda, Mezclado)");
            generoVendido = generoVendido.toLowerCase();
        }while(generoVendido != "terror" && generoVendido != "infantil" && generoVendido != "infantil"&& generoVendido != "autoayuda"&& generoVendido != "mezclado");    
        do
        {
            totalVendido = prompt("Ingrese totalVendido");
            totalVendido = totalVendido.toLowerCase();
        }while(!isNaN(totalVendido));
        do
        {
            estrellasClientes = prompt("Ingrese estrellasClientes del 1 al 5");
            estrellasClientes = parseFloat(estrellasClientes);
        }while(estrellasClientes < 1 || estrellasClientes > 5);    

        switch (generoVendido) {
            case "autoayuda":
                contadorAutoayuda++;
            break;
            case "infantil":
                contadorInfantil++;
            break;
            case "mezclado":
                contadorMezclado++;
            break;    
            default:
                contadorTerror++;
            break;
        }
        if(carnetVendedor=="AA203")
        {
            acumuladorUnoEstrellas+=estrellasClientes;
            contadorUnoEstrellas++;
        }
        else
        {
            if(carnetVendedor=="A3246")
            {
                acumuladorDosEstrellas+=estrellasClientes;
                contadorDosEstrellas++;
            }
            else
            {
                if(carnetVendedor=="A8898")
                {
                    acumuladorTresEstrellas+=estrellasClientes;
                    contadorTresEstrellas++;
                }
            }
        }
        //C
        if(totalVendido > 3020)
        {
            comision = 0.12;
            mensaje="\n corresponde un 12% de comision";
        }
        else
        {
            comision = 0.06;
            mensaje="\n corresponde un 6% de comision";
        }

        
        if(flag == 0 || totalVendido < minVenta)
        {
            minVenta = totalVendido;
            carnetVendedorVentaMasBarata = carnetVendedor;
            flag = 1;
        }

		continua = confirm("Quieres continuar?");
	}while(continua);
	//****************FIN DE ITERACIÓN************************ */
    //A
	if(contadorAutoayuda > contadorInfantil && contadorAutoayuda > contadorTerror&& contadorAutoayuda > contadorMezclado)
	{
        generoMasVendido = "AUTOAYUDA";
    }
    else
    {
        if(contadorInfantil > contadorTerror && contadorInfantil > contadorAutoayuda&& contadorInfantil> contadorMezclado)
		{
            generoMasVendido = "INFANTIL";
        }
        else
        {
            if(contadorMezclado > contadorAutoayuda&& contadorMezclado>contadorInfantil && contadorMezclado>contadorTerror)
            {
                generoMasVendido ="MEZCLADO";
            }
            else
            {
                generoMasVendido = "TERROR";
            }
        }
    }
    //B
    if(contadorDosEstrellas!=0)
    {
        promedioUno= acumuladorUnoEstrellas/contadorUnoEstrellas;
    }
    else
    {
        promedioUno=0;
    }
    if(contadorDosEstrellas!=0)
    {
        promedioDos = acumuladorDosEstrellas/contadorDosEstrellas;
    }
    else
    {
        promedioDos=0;
    }
    if(contadorTresEstrellas!=0)
    {
        promedioTres=acumuladorTresEstrellas/contadorTresEstrellas;
    }
    else
    {
        promedioTres=0;
    }
    if(promedioUno < promedioDos && promedioUno < promedioTres)
    {
        vendedorConPromedioMenor="vendedor AA203";
    }
    else
    {
        if(promedioDos < promedioUno && promedioDos < promedioTres)
        {
            vendedorConPromedioMenor= "vendedor A3246";
        }
        else
        {
            vendedorConPromedioMenor= "vendedor A8898";
        }
    }
    //C
    importeTotal = totalVendido + (totalVendido*comision);

	//muestro
	mensaje = "\n A- el genero mas vendido es " + generoMasVendido;
	mensaje += "\n B- el vendedor que tiene el menor promedio de estrellas " + vendedorConPromedioMenor;
	mensaje += "\n C- Quedando en total " + importeTotal;
    mensaje += "\n la venta mas barata" + minVenta;
	alert(mensaje);
	
}
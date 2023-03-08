
/*


1-Un bar nos contrato para administrar el consumo de los clientes en las distintas mesas del local. 
Para esto debemos desarrollar un algoritmo que nos permita el ingreso de los siguientes datos de varias mesas:
Nombre del cliente (no puede ser un número)
la edad,
Tipo de bebida (validar cerveza, limonada, gaseosa, ninguno)
Tipo de comida (papitas, hamburguesa, rabas, ninguno)
Importe total

	

Necesitamos saber:
a-El tipo de bebida más vendida
b-la edad del que pago el importe total mas alto
c-Cuanta gente mayor a 18 no pidio bebida
*/

function comenzar()
{
    let continua;
	let mensaje;
    let nombreCliente;
    let edadCliente;
    let tipoBebida;
    let tipoComida;
    let flag=0;
    let edadImporteMaximo;
    let importeMaximo;
    let contadorCerveza=0;
    let contadorGaseosa=0;
    let contadorLimonada=0;
    let tipoBebidaMasVendida;
    let contadorNoPidioBebida=0;
	
	
	do
	{
			
	do
	{
		nombreCliente = prompt("Ingrese nombreCliente");
		nombreCliente = nombreCliente.toLowerCase();
	}while(!isNaN(nombreCliente));
	do
	{
		edadCliente = prompt("Ingrese edadCliente");
		edadCliente = parseInt(edadCliente);
	}while(isNaN(edadCliente) || edadCliente < 0);
	do
	{
		tipoBebida = prompt("Ingrese tipoBebida");
		tipoBebida = tipoBebida.toLowerCase();
	}while(tipoBebida != "cerveza" && tipoBebida != "limonada" && tipoBebida != "gaseosa" && tipoBebida != "ninguno");
	do
	{
		tipoComida = prompt("Ingrese tipoComida");
		tipoComida = tipoComida.toLowerCase();
	}while(tipoComida != "papitas" && tipoComida != "rabas" && tipoComida != "hamburguesa" && tipoComida != "ninguno");
    let importeTotal;
	do
	{
		importeTotal = prompt("Ingrese importeTotal");
		importeTotal = parseFloat(importeTotal);
	}while(isNaN(importeTotal) || importeTotal < 0);
    //A
    switch (tipoBebida) 
    {
        case "cerveza":
            contadorCerveza++;
        break;
        case "gaseosa":
            contadorGaseosa++;
        break;
        case "limonada":
            contadorLimonada++;
        break;
        default:
            if(edadCliente>17)
            {
                contadorNoPidioBebida++;
            }
        break;
    }
    //B
    if(flag==0)
    {
        importeMaximo=importeTotal;
        edadImporteMaximo=edadCliente;
    }
    else
    {
        if(importeTotal>importeMaximo)
        {
            edadImporteMaximo=edadCliente;
        }
    }


		continua = confirm("Quieres continuar?");
	}while(continua);
	//****************FIN DE ITERACIÓN************************ */
    //a
    if(contadorCerveza > contadorGaseosa && contadorCerveza > contadorLimonada)
	{
        tipoBebidaMasVendida = "CERVEZA";
    }else{
        if(contadorGaseosa > contadorLimonada && contadorGaseosa > contadorCerveza)
		{
            tipoBebidaMasVendida = "GASEOSA";
        }else{
            tipoBebidaMasVendida = "LIMONADA";
        }
    }

	//muestro
	mensaje = "\n A- tipo Bebida Mas Vendida" + tipoBebidaMasVendida;
	mensaje += "\n B- edad del cliente que pago mas " + edadImporteMaximo;
	mensaje += "\n C- personas mayores a 18 No Pidio Bebida " + contadorNoPidioBebida;
	
	alert(mensaje);
	

}
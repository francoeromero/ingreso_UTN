/*
Una empresa de viajes le solicita ingresar que continente le gustaria visitar
y la cantidad de días , la oferta dice que por día se cobra $100 , que se puede pagar de todas las maneras
continente
cantidad de dias 

Si es América tiene un 15% de descuento y si ademas paga por débito se le agrega un 10% mas de descuento

Si es África u Oceania tiene un 30% de descuento y si además paga por mercadotipoPago o efectivo se le agrega un 15% mas de descuento

Si es Europa tiene un 20% de descuento y si ademas paga por débito se le agrega un 15% , por mercadotipoPago un 10% y cualquier otro medio 5%

cualquier otro continente tiene un recargo del 20%
en cualquier continenete , si paga con cheque, se recarga un 15% de impuesto al cheque
*/

function mostrar()
{
    var continua;
	var mensaje;
	var continente;
	var cantidadDias;
	var tipoPago;
	var descuentoContinente;
	var descuentoTipoPago;
	var descuentoTotal;
	var a;
	var a;
	do
	{
		do
		{
			continente = prompt("Ingrese el continente").toLowerCase();
		}while(continente != "europa" && continente != "america" && continente != "oceania" && continente != "africa" && continente != "asia");
		do
		{
			cantidadDias = prompt("Ingrese la cantidad de dias: ");
			cantidadDias = parseInt(cantidadDias);
		}while(isNaN(cantidadDias) && cantidadDias < 0);
		
		do
		{
			tipoPago = prompt("Ingrese el tipo de pago:  debito o mercadotipopago o cheque o efectivo").toLowerCase();
		}while(!isNaN(tipoPago) || (tipoPago != "debito" && tipoPago != "mercadotipopago" && tipoPago != "cheque" && tipoPago != "efectivo"));

        //Si es América tiene un 15% de descuento y si ademas paga por débito se le agrega un 10% mas de descuento
        if(continente == "america")
        {
            descuentoContinente = 0.15;
            // descuentoTotal = descuentoContinente;
            if(tipoPago == "debito")
            {
                descuentoTipoPago = 0.10;
            }
        }
        //Si es África u Oceania tiene un 30% de descuento y si además paga por mercadotipoPago o efectivo se le agrega un 15% mas de descuento
        //Si es Europa tiene un 20% de descuento y si ademas paga por débito se le agrega un 15% , por mercadotipoPago un 10% y cualquier otro medio 5%
        else 
        {
            if(continente == "africa" || continente == "oceania")
            {
                descuentoContinente = 0.3;
                if(tipoPago == "mercadotipopago" ||tipoPago == "efectivo")
                {
                    descuentoContinente = 0.45;
                }
                else
                {
                    descuentoContinente = 0;
                }
            }
            else
            {
                if(continente == "europa")
                {
                    descuentoContinente = 0.2;
                    if(tipoPago == "debito")
                    {
                        descuentoTipoPago = 0.15;
                    }
                    else
                    {
                        if(tipoPago == "mercadotipopago")
                        {
                            descuentoTipoPago = 0.10;
                        }
                        else
                        {
                            descuentoTipoPago = 0.05;
                        }
                    }
                }
                else
                {
                    descuentoContinente = 0;
                }
                descuentoContinente = 0;
            }
        }
        descuentoTotal = descuentoContinente + descuentoTipoPago;
		
		continua = confirm("Quieres continuar?");
	}while(continua);
	//calculo o comparcantidadDiasion 
	//muestro
	mensaje = "\n " + a;
	mensaje += "\n " + a;
	mensaje += "\n " + a;
	mensaje += "\n " + a;
	mensaje += "\n " + a;
	mensaje += "\n " + a;
	mensaje += "\n " + a;
	mensaje += "\n " + a;
	alert(mensaje);

}

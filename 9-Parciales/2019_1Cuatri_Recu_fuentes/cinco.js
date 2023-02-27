/*
Una empresa de viajes le solicita ingresar que continente le gustaria visitar
y la cantidad de días , la oferta dice que por día se cobra $100 , que se puede importeTotal de todas las maneras
datos: 
-por día se cobra $100

validar: 
- continente
- cantidad de dias 
- tipo de pago : debito, efectivo, mercadotipoPago, cheque

calculos:
/******************************************************************************************************************
continente       descuento Continente            tipo de pago            descuento tipoPago         recargo
America                   15%                       debito                  10%                     0%
Africa Oceania            30%           mercadotipopago o efectivo          15%                     0%
Europa                    20%                       debito                  15%                     0%
Europa                     0%                     mercadotipopago            10%                    0% 
Europa                     0%        todos menos debito y mercadotipopago    5%                     0%
Demas continentes          0%                          todos                  0%                    20%
Demas continentes          0%                        cheque                   0%                    15% (impuesto)
*******************************************************************************************************************/
/*
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
	var porcentajeContinente;
	var porcentajeTipoPago;
	var porcentajeTotal;
    var porcentajeImpuesto = 0;
	var porcentajeRecargo = 0;
	var dia = 100;
    var importe;
    var porcentajeDescuento;
	var importeTotal;
    var aviso;
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
        /******************************************************************************************************************
        continente       descuento Continente            tipo de pago            descuento tipoPago         recargo
        America                   15%                       debito                  10%                     0%
        Africa Oceania            30%           mercadotipopago o efectivo          15%                     0%
        Europa                    20%                       debito                  15%                     0%
        Europa                     0%                     mercadotipopago            10%                    0% 
        Europa                     0%        todos menos debito y mercadotipopago    5%                     0%
        Demas continentes          0%                          todos                  0%                    20%
        Demas continentes          0%                        cheque                   0%                    15% (impuesto)
        *******************************************************************************************************************/
        if(continente == "america")
        {
            porcentajeContinente = 0.15;
            aviso = "Se hizo un descuento de continente del 15% ";
            if(tipoPago == "debito")
            {
                porcentajeTipoPago = 0.1;
                aviso += "y se sumó un descuento de pago del 10% ";
            }
            else
            {
                porcentajeTipoPago = 0;
                aviso + "pero no se sumo un descuento de pago ";
            }
        }
        else
        {
            if(continente=="africa" || continente == "oceania")
            {
                porcentajeContinente = 0.3;
                aviso = "Se hizo un descuento de continente del 30% ";
                if(tipoPago == "mercadotipopago" || tipoPago == "efectivo")
                {
                    porcentajeTipoPago = 0.15;
                    aviso += "y se sumó un descuento de pago del 15%";
                }
                else 
                {
                    porcentajeTipoPago = 0;
                    aviso += "pero no se sumó ningun descuento de pago";
                }
                aviso += "pero no se sumó ningun descuento de pago";
            }
            else
            {
                if(continente == "europa")
                {
                    porcentajeContinente = 0.20;
                    aviso = "Se hizo un descuento de continente del 20%";
                    if(tipoPago == "debito")
                    {
                        porcentajeTipoPago = 0.15;
                        aviso += "y se sumó un descuento de pago del 15%";
                    }
                    else
                    {
                        if(tipoPago == "mercadotipopago")
                        {
                            porcentajeTipoPago = 0.10;
                            aviso += "y se sumó un descuento de pago del 10% ";
                        }
                        else
                        {
                            porcentajeTipoPago = 0.05;
                            aviso += "y se sumó un descuento de pago del 5%";
                        }
                    }
                }
                else
                {
                    porcentajeContinente = 0;
                    porcentajeRecargo = 0.2;
                    aviso = "No se hizo un descuento de continente y se recarga un 20% ";
                    if(tipoPago == "cheque")
                    {
                        porcentajeImpuesto = 0.15;
                        aviso += "y por pagar con cheque usted paga un impuesto del 15%";
                    }
                    else
                    {
                        porcentajeImpuesto = 0;
                        aviso += "y no paga impuestos de tipo de pago";
                    }

                }
            }
        }
        porcentajeTotal = porcentajeContinente + porcentajeTipoPago;
        recargoTotal = porcentajeRecargo + porcentajeImpuesto;
		//fin while
		continua = confirm("Quieres continuar?");
	}while(continua);
	//calculo o comparcantidadDiasion 
    importe = dia * cantidadDias;
    porcentajeDescuento = importe * porcentajeTotal;
    importeTotal = importe - porcentajeDescuento + recargoTotal; 
	//muestro
	mensaje = "\n Tenias que pagar: " + importe;
	mensaje += "\n Se hizo un descuento segun el continente y su tipo de pago usted paga: " + importeTotal;
    mensaje += "\n los porcentajes de descuentos son los siguientes: " + aviso; 
	alert(mensaje);

}

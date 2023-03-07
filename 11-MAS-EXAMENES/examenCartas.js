
/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
 /*
Una negocio de comics se especializa en la compra y venta de un juego de cartas muy conocido. Para poder organizar mejor el inventario y el stock.
Para lograr construir dicho sistema se necesita pedir y validar los siguientes datos:

Nombre de la carta (no puede ser un valor que contenga numeros)
Tipo de carta (Heroe, Magica, Moneda, Trampa)
Precio de la carta (Se sabe que la carta mas barata vale 500 pesos y la mas cara puede llegar a valer como maximo 4000 pesos)
Rareza de la carta (Hay 3 tipos de cartas Comun, Rara, Super Rara)

Con esos datos nos piden lo siguiente:
a) el porcentaje de cartas de cada TIPO
b) la cantidad de cartas segun su rareza
c) de las cartas de tipo Super Rara, se necesita saber el nombre y el precio de la carta mas cara
d) de las cartas de tipo Comun, se necesita saber el tipo y el precio de la mas barata
e) de la venta mas cara, el precio, el tipo de carta y su rareza

Finalmente, debemos informar por document.Write los datos pedidos en los puntos a, b, c, d, e.
*/


function comenzar()
{
    let continua;
	let mensaje;
    let tipoCarta;
    let nombreCarta;
    let precioCarta;
    let rarezaCarta;
    let contadorTrampa=0;
    let contadorHeroe=0;
    let contadorMoneda=0;
    let contadorMagica=0;
    let contadorCartasGenetales=0;
    let porcentajeHeroe;
    let porcentajeMagica;
    let porcentajeMoneda;
    let porcentajeTrampa;
    let contadorRarezaComun=0;
    let contadorRarezaSuperRara=0;
    let contadorRarezaRara=0;
    let banderaGeneral=0;
    let precioSuperRaraMasCara;
    let nombreSuperRaraMasCara;
    let nombreTipoComunMasBarata;
    let precioTipoComunMasBarata;
    let precioGeneralVentaMasCara;
    let tipoCartaGeneralVentaMasCara;
    let rarezaGeneralVentaMasCara;
    
	
	
	do
	{
        do
        {
            nombreCarta = prompt("Ingrese nombreCarta").toLowerCase();
        }while(!isNaN(nombreCarta));
        do
        {
            tipoCarta = prompt("Ingrese tipoCarta").toLowerCase();
        }while(tipoCarta != "heroe" && tipoCarta != "magica" && tipoCarta != "moneda" && tipoCarta != "trampa");
        do
        {
            precioCarta = prompt("Ingrese precioCarta");
            precioCarta = parseInt(precioCarta);
        }while(isNaN(precioCarta) || precioCarta < 499 || precioCarta > 4001);
        do
        {
            rarezaCarta = prompt("Ingrese rarezaCarta").toLowerCase();
        }while(rarezaCarta != "comun" && rarezaCarta != "rara" && rarezaCarta != "super rara");
        if(tipoCarta =="heroe")
        {
            contadorHeroe++;
        }
        else
        {
            if(tipoCarta=="magica")
            {
                contadorMagica++;
            }
            else
            {
                if(tipoCarta=="moneda")
                {
                    contadorMoneda++;
                }
                else
                {
                    contadorTrampa++;
                    //trampa
                }
            }
        }
        contadorCartasGenetales++;

        if(banderaGeneral==0)
        {
            
            nombreSuperRaraMasCara=nombreCarta; //c
            precioSuperRaraMasCara=precioCarta; //c
            nombreTipoComunMasBarata=nombreCarta;//d
            precioTipoComunMasBarata=precioCarta;//d
            precioGeneralVentaMasCara=precioCarta;//e
            tipoCartaGeneralVentaMasCara=tipoCarta;//e
            rarezaGeneralVentaMasCara=rarezaCarta;//e
            banderaGeneral=1;
        }
        else
        {
            //C
            if(rarezaCarta=="super rara")
            {
                contadorRarezaSuperRara++;//b
                if(precioCarta>precioSuperRaraMasCara)
                {
                    nombreSuperRaraMasCara=nombreCarta;
                    precioSuperRaraMasCara=precioCarta;
                }
            }
            //D
            else
            {
                contadorRarezaComun++;//b
                if(rarezaCarta=="comun")
                {
                    if(precioCarta < precioComunMasBarata)
                    {
                        nombreTipoComunMasBarata=nombreCarta;
                        precioTipoComunMasBarata=precioCarta;
                    }
                }
                else
                {
                    contadorRarezaRara++;//b
                }
            }
            //E
            if(precioCarta > precioGeneralVentaMasCara)
            {
                precioGeneralVentaMasCara=precioCarta;//e
                tipoCartaGeneralVentaMasCara=tipoCarta;//e
                rarezaGeneralVentaMasCara=rarezaCarta;//e
            }
        }

		continua = confirm("Quieres continuar?");
	}while(continua);
	//****************FIN DE ITERACIÓN************************ */
    //porcentae
    if(contadorHeroe!=0)
    {
        porcentajeHeroe= (contadorHeroe*100 )/ contadorCartasGenetales;
    }
    else
    {
        porcentajeHeroe = 0;
    }
    
    if(contadorMagica!=0)
    {
        porcentajeMagica = (contadorMagica*100 )/ contadorCartasGenetales;
    }
    else
    {
        porcentajeMagica =0;
    }
    if(contadorMoneda!=0)
    {
        porcentajeMoneda=(contadorMoneda*100)/contadorCartasGenetales;
    }
    else
    {
        porcentajeMoneda=0;
    }
    if(contadorTrampa!=0)
    {
        porcentajeTrampa=(contadorTrampa*100) / contadorCartasGenetales;
    }
    else
    {
        porcentajeTrampa=0;
    }
	//muestro
	mensaje = "\n a) porcentaje de carta trampa" + porcentajeTrampa + "%";
	mensaje += "\n a) porcentaje de carta moneda" + porcentajeMoneda + "%";
	mensaje += "\n a) porcentaje de carta magica" + porcentajeMagica + "%";
	mensaje += "\n a) porcentaje de carta heroe" + porcentajeHeroe + "%";
    mensaje += "\n b) cantidad de cartas de rareza comun" + contadorRarezaComun;
    mensaje += "\n b) cantidad de cartas de rareza rara" + contadorRarezaRara;
    mensaje += "\n b) cantidad de cartas de rareza super rara" + contadorRarezaSuperRara;
	mensaje += "\n c) nombre Super Rara Mas Cara"+ nombreSuperRaraMasCara;
	mensaje += "\n c) su precio de la super rara mas cara es: "+ precioSuperRaraMasCara;
	mensaje += "\n d)tipo de Carta Comun Mas Barata " + nombreTipoComunMasBarata;
	mensaje += "\n d) precio Comun Mas Barata "+ precioTipoComunMasBarata;
	mensaje += "\n e) precio de la venta mas cara "+ precioGeneralVentaMasCara;
	mensaje += "\n e) tipo de carta de la venta mas cara "+ tipoCartaGeneralVentaMasCara;
	mensaje += "\n e) rareza de la venta mas cara "+ rarezaGeneralVentaMasCara;
    
	alert(mensaje);
}


/*Nos ingresan una cantidad indeterminada de estadías de  vacaciones,
validando los datos ingresados:
nombre del titular ,
lugar ( “Puerto Madryn”, “Villa Gessel” o “Córdoba”),
temporada(“alta”, “baja”),
cantidad de días que durará el viaje.
importe del viaje
altura del pasajero
peso del pasajero
sexo pasajero (F o M o NB)
Viaja con equipaje de mano?
paga con mercado , tarjeta o efectivo
a- cantidad de personas que viajan en cada temporada ( contador)
b- el peso acumulado de todos los que viajan a villa gessel ( acumulador peso)
c- el lugar con la mayor cantidad de dias acumulados (con if y voy acumulando todos, fuera del while comparo)
d- la suma de todos los importes (acumulador de todos los importes que ingresan en el while)
e-el nombre del más pesado de los pasajeros y el del más liviano (1 solo flag e igualo max min peso )
f-el lugar donde se pagó el mayor importe (1 flag max importe)
g-el nombre de la mujer más alta (1 flag max altura)
h- Cuál fue la forma de pago más utilizada()
i- en qué temporada se viajó más
j- qué lugar tuvo más pasajeros
k- qué porcentaje usa equipaje de mano
l- que porcentaje hay de cada sexo
*/



function comenzar()
{
    let continua;
	let mensaje;
    let nombreTitular;
    let lugarDestino;
    let temporada;
    let cantidadDias;
    let pesoPasajero;
    let sexoPasajero;
    let alturaPasajero;
    let equipajeMano;
    let importe;
    let tipoPago;
    let contadorAlta=0;
    let contadorBaja=0;
    let acumuladorPesoVillaGessel=0;
    let acumuladorVillaGessel=0;
    let acumuladorPuertoMadryn=0;
    let acumuladorCordoba=0;
    let acumuladorImporteVillaGessel=0;
    let acumuladorImporteCordoba=0;
    let acumuladorImporteMadryn=0;
    let lugarConMayorCantidadDias;
    let importeTotal;
    let flagPeso = 0;
    let maxPeso;
    let nombrePasajeroMasPesado;
    let flagImporte = 0;
    let mayorImporte;
    let lugarConMayorImporte;
    let contadorEfectivo=0;
    let contadorMercadoPago=0;
    let contadorTarjeta=0;
    let flagAltura = 0;
    let maximaAltura;
    let nombreMujerMasAlta;
    let formaDePagoMasUtilizada;
    let contadorPasajerosGessel=0;
    let contadorPasajerosCordoba=0;
    let contadorPasajerosMadryn=0;
    let lugarDondeHuboMasPasajeros;
    let temporadaQueSeViajoMas;
    let contadorEquipajeMano=0;
    let contadorNOEquipajeMano=0;
    let contadorGeneralPasajerosIngresados=0;
    let porcentajeEquipajeMano;
    let contadorPasajerasMujeres=0;
    let contadorPasajerosHombres=0;
    let porcentajeMujeres;
    let porcentajeHombres;
    
	do
	{
        do
        {
            nombreTitular = prompt("Ingrese nombreTitular").toLowerCase();
        }while(!isNaN(nombreTitular));
        do
        {
            lugarDestino = prompt("Ingrese lugarDestino ( “Puerto Madryn”, “Villa Gessel” o “Córdoba”)").toLowerCase();
        }while(lugarDestino != "puerto madryn" && lugarDestino != "villa gessel" && lugarDestino != "cordoba");
        do
        {
            temporada = prompt("Ingrese temporada").toLowerCase();
        }while(temporada != "alta" && temporada != "baja");
        do
        {
            cantidadDias = prompt("Ingrese cantidadDias");
            cantidadDias = parseInt(cantidadDias);
        }while(isNaN(cantidadDias) || cantidadDias < 0);
        do
        {
            alturaPasajero = prompt("Ingrese alturaPasajero");
            alturaPasajero = parseFloat(alturaPasajero);
        }while(isNaN(alturaPasajero) || alturaPasajero < 0);
        do
        {
            pesoPasajero = prompt("Ingrese pesoPasajero");
            pesoPasajero = parseInt(pesoPasajero);
        }while(isNaN(pesoPasajero) || pesoPasajero < 0);
        do
        {
            sexoPasajero = prompt("Ingrese sexoPasajero f femenino m masculino").toLowerCase();
        }while(sexoPasajero != "f" && sexoPasajero != "m" );
        do
        {
            equipajeMano = prompt("Ingrese equipaje a Mano si o no").toLowerCase();
        }while(equipajeMano != "si" && equipajeMano != "no" );
        do
        {
            tipoPago = prompt("Ingrese tipo de Pago: tarjeta, mercado pago o efectivo").toLowerCase();
        }while(tipoPago != "tarjeta" && tipoPago != "mercado pago" && tipoPago != "efectivo");
        do
        {
            importe = prompt("Ingrese importe");
            importe = parseFloat(importe);
        }while(isNaN(importe) || importe < 0);
        //A
        if(temporada =="alta")
        {
            contadorAlta++;
        }
        else
        {
            contadorBaja++;
        }
        // //D- CORRECCION
        // let acumuladorGeneralImportes=0;
        // acumuladorGeneralImportes += importe ;
        //B
        if(lugarDestino=="villa gessel")
        {
            acumuladorPesoVillaGessel += pesoPasajero;//B
            acumuladorVillaGessel+=cantidadDias; //C
            acumuladorImporteVillaGessel+=importe;//D
            contadorPasajerosGessel++;//J
        }
        else
        {
            if(lugarDestino=="cordoba")
            {
                acumuladorCordoba+=cantidadDias;//C
                acumuladorImporteCordoba+=importe;//D
                contadorPasajerosCordoba++;//J
            }
            else
            {
                acumuladorPuertoMadryn+=cantidadDias;//C
                acumuladorImporteMadryn+=importe;//D
                contadorPasajerosMadryn++;//J
            }
        }
        //E - CORRECCION
        // if(flagPeso==0)
        // {
        //     maxPeso = pesoPasajero;
        //     nombrePasajeroMasPesado = nombreTitular;
        //     minPeso=pesoPasajero;
        //     nombrePasajeroMasLiviano = nombreTitular;
        //     flagPeso=1;
        // }
        // else
        // {
        //     if(pesoPasajero > maxPeso)
        //     {
        //         maxPeso = pesoPasajero;
        //         nombrePasajeroMasPesado = nombreTitular;
        //     }
        //     if(pesoPasajero < minPeso)
        //     {
        //         minPeso=pesoPasajero;
        //         nombrePasajeroMasLiviano = nombreTitular;
        //     }
        // }


        if(flag==0)
        {
            //E
            maxPeso = pesoPasajero;
            nombrePasajeroMasPesado = nombreTitular;
            //E
            minPeso=pesoPasajero;
            nombrePasajeroMasLiviano = nombreTitular;
            //F
            mayorImporte = importe;
            lugarConMayorImporte = lugarDestino;
            //G
            maximaAltura = alturaPasajero;
            nombreMujerMasAlta = nombreTitular;
            flag=1;
        }
        else
        {
            if(pesoPasajero > maxPeso )
            {
                maxPeso = pesoPasajero;
                nombrePasajeroMasPesado = nombreTitular;
            }
            if(pesoPasajero < minPeso)
            {
                minPeso=pesoPasajero;
                nombrePasajeroMasLiviano = nombreTitular;
            }
            if(importe > mayorImporte)
            {
                mayorImporte = importe;
                lugarConMayorImporte = lugarDestino;
            }
            if(sexoPasajero =="f")
            {
                contadorPasajerasMujeres++;
                if(alturaPasajero > maximaAltura)
                {
                    maximaAltura = alturaPasajero;
                    nombreMujerMasAlta = nombreTitular;
                }
            }
            
        }









        //E
        if(flagPeso == 0 || pesoPasajero > maxPeso )
        {
            maxPeso = pesoPasajero;
            nombrePasajeroMasPesado = nombreTitular;
        }
        if(flagPeso==0 || pesoPasajero < minPeso)
        {
            minPeso=pesoPasajero;
            nombrePasajeroMasLiviano = nombreTitular;
            flagPeso = 1;
        }
        //F   
        if(flagImporte == 0 || importe > mayorImporte)
        {
            mayorImporte = importe;
            lugarConMayorImporte = lugarDestino;
            flagImporte = 1;
        }
        //G
        if(sexoPasajero =="f")
        {
            contadorPasajerasMujeres++;
            if(flagAltura == 0 || alturaPasajero > maximaAltura)
            {
                maximaAltura = alturaPasajero;
                nombreMujerMasAlta = nombreTitular;
                flagAltura = 1;
            }
        }
        else
        {
            contadorPasajerosHombres++;
        }
        //H
        if(tipoPago =="efectivo")
        {
            contadorEfectivo++;
        }
        else
        {
            if(tipoPago=="mercado pago")
            {   
                contadorMercadoPago++;
            }
            else
            {
                contadorTarjeta++;
            }
        }
        //k
        if(equipajeMano=="si")
        {
            contadorEquipajeMano++;
        }
       
        contadorGeneralPasajerosIngresados++;
        
            


		continua = confirm("Quieres continuar?");
	}while(continua);
	//******************fin de iteracion********************** */
    //C
    if(acumuladorCordoba > acumuladorPuertoMadryn && acumuladorCordoba > acumuladorVillaGessel)
	{
        lugarConMayorCantidadDias = "CORDOBA";
    }else{
        if(acumuladorPuertoMadryn > acumuladorVillaGessel && acumuladorPuertoMadryn > acumuladorCordoba)
		{
            lugarConMayorCantidadDias = "PUERTO MADRYN";
        }else{
            lugarConMayorCantidadDias = "VILLA GESSEL";
        }
    }
    //D
    importeTotal = acumuladorImporteCordoba + acumuladorImporteMadryn + acumuladorImporteVillaGessel;
     //H
     if(contadorEfectivo > contadorMercadoPago && contadorEfectivo > contadorTarjeta)
	{
        formaDePagoMasUtilizada = "EFECTIVO";
    }else{
        if(contadorMercadoPago > contadorTarjeta && contadorMercadoPago > contadorEfectivo)
		{
            formaDePagoMasUtilizada = "MERCADO PAGO";
        }else{
            formaDePagoMasUtilizada = "TARJETA";
        }
    }
    //I
    if(contadorAlta > contadorBaja)
    {
        temporadaQueSeViajoMas= "ALTA";
    }
    else
    {
        if(contadorBaja>contadorAlta)
        {
            temporadaQueSeViajoMas = "BAJA";
        }
        else
        {
            temporadaQueSeViajoMas="AMBAS";
        }
    }
    //J
    if(contadorPasajerosCordoba > contadorPasajerosMadryn && contadorPasajerosCordoba > contadorPasajerosGessel)
	{
        lugarDondeHuboMasPasajeros = "CORDOBA";
    }else{
        if(contadorPasajerosMadryn > contadorPasajerosGessel && contadorPasajerosMadryn > contadorPasajerosCordoba)
		{
            lugarDondeHuboMasPasajeros = "PUERTO MADRYN";
        }else{
            lugarDondeHuboMasPasajeros = "VILLA GESSEL";
        }
    }
    //K
    if(contadorEquipajeMano!=0)
    {
        porcentajeEquipajeMano = (contadorEquipajeMano*100) / contadorGeneralPasajerosIngresados;
    }
    else
    {
        porcentajeEquipajeMano=0;
    }
    //L
    if(contadorPasajerasMujeres!=0)
    {
        porcentajeMujeres = (contadorPasajerasMujeres*100) / contadorGeneralPasajerosIngresados;
    }
    else
    {
        porcentajeMujeres=0;
    }

    if(contadorPasajerosHombres!=0)
    {
        porcentajeHombres= (contadorPasajerosHombres*100 )/ contadorGeneralPasajerosIngresados;
    }
    else
    {
        porcentajeHombres=0;
    }


	//muestro
	mensaje = "\n a- cantidad de personas que viajan en temporada alta " + contadorAlta;
	mensaje += "\n  a- cantidad de personas que viajan en temporada baja " + contadorBaja;
	mensaje += "\n b- el peso acumulado de todos los que viajan a villa gessel " + acumuladorPesoVillaGessel;
	mensaje += "\n c- el lugar con la mayor cantidad de dias acumulados " + lugarConMayorCantidadDias;
	mensaje += "\n d- la suma de todos los importes " + importeTotal;
	mensaje += "\n e-el nombre del más pesado de los pasajeros y el del más liviano " + nombrePasajeroMasPesado;
	mensaje += "\n f-el lugar donde se pagó el mayor importe " + lugarConMayorImporte;
	mensaje += "\n g-el nombre de la mujer más alta" + nombreMujerMasAlta;
	mensaje += "\n h- Cuál fue la forma de pago más utilizada" + formaDePagoMasUtilizada;
	mensaje += "\n i- en qué temporada se viajó más" + temporadaQueSeViajoMas;
	mensaje += "\n j- qué lugar tuvo más pasajeros " + lugarDondeHuboMasPasajeros;
	mensaje += "\n k- qué porcentaje usa equipaje de mano" + porcentajeEquipajeMano;
	mensaje += "\n l- que porcentaje de hombres es: " + porcentajeHombres;
	mensaje += "\n l- porcentaje de mujeres es : " + porcentajeMujeres;
	alert(mensaje);
}
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

a- cantidad de personas que viajan en cada temporada
b- el peso acumulado de todos los que viajan a villa gessel
c- el lugar con la mayor cantidad de dias acumulados
d- la suma de todos los importes

e-el nombre del más pesado de los pasajeros y el del más liviano
f-el lugar donde se pagó el mayor importe
g-el nombre de la mujer más alta

h- Cuál fue la forma de pago más utilizada
i- en qué temporada se viajó más
j- qué lugar tuvo más pasajeros

k- qué porcentaje usa equipaje de mano
l- que porcentaje hay de cada sexo
*/
//variables dato

function comenzar()
{
let preguntar;
let mensaje;
let nombreTitular;
let lugar;
let temporada;
let cantidadDias;
let importeViaje;
let alturaPasajero;
let pesoPasajero;
let sexoPasajero;
let equipaje;
let pago;
//variables acumuladores
let cantidadPersonas = 0;
let pesoAcumuladoGessel = 0;
let diasAcumulados = 0;
//a- contadores
let contadorTemparadaBaja = 0;
let contadorTemporadaAlta = 0;
//b- acumulador
let acumuladorPesoGessel = 0;
//c- acumuladores lugares
let acumuladorGessel = 0;
let acumuladorCordoba = 0;
let acumuladorMadryn = 0;
let maxDiasLugar;
let flagDias = 0;
//d- acumulador importes
let importesAcumulados = 0;
//e- bandera el mas pesado y menos
let maxPeso;
let minPeso;
let flagPeso = 0;
let nombreMasPesado = '';
let nombreMenosPesado = '';
//f bandera importe mas alto
let acumuladorImporteCordoba = 0;
let acumuladorImporteGessel = 0;
let acumuladorImporteMadryn = 0;
let maxImporte;
let lugarMayorImporte = '';
let flagImporte = 0;
//g bandera mujer alta
let flagMujerAlta = 0;
let maxAltura;
let nombreMujerAlta = '';
//h bandera forma de pago 
let flagPago = 0;
let contadorMercadoPago = 0;
let contadorTarjeta = 0;
let maxPago;
//i bandera temporada
let contadorUsoAlta = 0;
let contadorUsoBaja = 0;

let flagTemporada = 0;
let contadorAlta;
let contadorBaja;
let temporadaMasViajada;
//j bandera pasajeros
let contadorCordobaPasajeros = 0;
let contadorGesselPasajeros = 0 ;
let contadorMadrynPasajeros = 0;

let flagPasajeros = 0;
let pasajerosGessel = 0;
let pasajerosCordoba = 0;
let pasajerosMadryn = 0;
let lugarMasPasajeros = '';
//k- equipaje en mano porcentaje
let contadorSi = 0;
let contadorNo = 0;
let contadorIngresados = 0;
let porcentajeEquipaje;
let porcentaje = 100;
//mujeres y hombres porcentaje
let contadorHombres = 0;
let contadorMujeres = 0;
let porcentajeMujeres;
let porcentajeHombres;

preguntar = "y";

while(preguntar=="y")
{
    //pido al usuario el dato que quiero(Nombre del titular)
    nombreTitular = prompt("Ingrese nombre del titular: ").toLowerCase();
    //valido el dato 
    while(isNaN(nombreTitular) == false)
    {
        nombreTitular = prompt("Error, ingrese el nombre del titular");
    }
    //pido al usuario el dato que quiero (lugar: “Puerto Madryn”, “Villa Gessel” o “Córdoba”)
    lugar = prompt("\n Elija el lugar: \n Puerto Madryn, Villa Gessel o Cordoba").toLowerCase();
    //valido 
    while(lugar != "cordoba" && lugar != "puerto madryn" && lugar != "villa gessel")
    {
        lugar = prompt("\n Error, ingrese los 3 lugares disponibles correctamente: \n Puerto Madryn, Villa Gessel y Cordoba ").toLowerCase();
    }
    //pido al usuario la temporada
    temporada = prompt("\n Ingrese temporada: \n alta o baja ").toLowerCase();
    //valido
    while(temporada != "alta" &&  temporada != "baja")
    {
        temporada = prompt("Ingrese solo alta o baja: ").toLowerCase();
    }
    //pido cantidad de dias que se queda 
    cantidadDias = prompt("Ingrese la cantidad de dias que se queda: \n solo el numero");
    //utilizo numeros enteros porque se trata de dias
    cantidadDias = parseInt(cantidadDias);
    while(isNaN(cantidadDias) == true)
    {
        cantidadDias = prompt("Error, escriba solo la cantidad de dias, \n ejemplo 2 dias entonces 2");
        cantidadDias = parseInt(cantidadDias);
    }
    //pido importe de viaje
    importeViaje = prompt("\n Ingrese el importe: \n solo el monto en dolares");
    //como se trata de dinero lo convierto en numeros decimales
    importeViaje = parseFloat(importeViaje);
    //valido
    while(isNaN(importeViaje) == true )
    {
        importeViaje = prompt("\n Error: \n ingrese solo el numero");
        importeViaje = parseFloat(importeViaje);
    }
    //pido altura
    alturaPasajero = prompt("\n Ingrese la altura en metros: \n solo el numero");
    alturaPasajero = parseFloat(alturaPasajero);
    while(isNaN(alturaPasajero)== true)
    {
        alturaPasajero = prompt("\n Error: \n Ingrese solo el numero");
        alturaPasajero = parseFloat(alturaPasajero);
    }
    pesoPasajero = prompt("\n Ingrese el peso en Kg: \n solo el numero");
    pesoPasajero = parseFloat(pesoPasajero);
    while(isNaN(pesoPasajero) == true)
    {
        pesoPasajero = prompt("\n Error: \n solo el numero");
        pesoPasajero= parseFloat(pesoPasajero);
    }
    sexoPasajero = prompt("\n Ingrese su genero: \n m como masculino o f como femenino").toLowerCase();
    while(sexoPasajero != "m" && sexoPasajero != "f")
    {
        sexoPasajero = prompt("\n Error: \n solo m o f ");
    }
    equipaje = prompt("\n Ira con equipaje en mano: \n si o no").toLowerCase();
    while(equipaje != "si" && equipaje != "no")
    {
        equipaje = prompt("\n Error: \n escriba si o no");
    }
    pago = prompt("\n Pago: \n 'mercado pago' o 'tarjeta de credito'").toLowerCase();
    while(pago != "mercado pago" && pago != "tarjeta de credito")
    {
        pago = prompt("\nError: \nIngrese 'mercado pago' o 'tarjeta de 'credito' ").toLowerCase();
    }
    //-------------------------------------------------------
    //a- cantidad de personas que viajan en cada temporada
    //-------------------------------------------------------
    if(temporada=="alta")
    {
        contadorTemporadaAlta = contadorTemporadaAlta + 1;
        contadorUsoAlta++;
    }
    else
    {
        contadorTemparadaBaja = contadorTemparadaBaja + 1;
        contadorUsoBaja++;
    }
    //-------------------------------------------------------
    //b- el peso acumulado de todos los que viajan a villa gessel
    //-------------------------------------------------------
    if(lugar == "villa gessel")
    {
        acumuladorPesoGessel += pesoPasajero;
    }    
    //-------------------------------------------------------
    //c- el lugar con la mayor cantidad de dias acumulados
    //-------------------------------------------------------
    if(lugar == "cordoba")
    {
        acumuladorCordoba = acumuladorCordoba + cantidadDias;
        acumuladorImporteCordoba += importeViaje; 
        contadorCordobaPasajeros++;
    }
    else
    {
        if(lugar == "puerto madryn")
        {
            acumuladorMadryn = acumuladorMadryn + cantidadDias;
            acumuladorImporteMadryn += importeViaje;
            contadorMadrynPasajeros++;
        }
        else
        {
            acumuladorGessel = acumuladorGessel + cantidadDias;
            acumuladorImporteGessel += importeViaje;
            contadorGesselPasajeros++;
        }
    }
    // if(flagDias == 0 || cantidadDias > maxDiasLugar)
    // {
    //     maxDiasLugar = cantidadDias;
    //     flagDias = 1;
    // }
    // if(flagDias == 0)
    // {
    //     maxDiasLugar = cantidadDias;
    //     flagDias = 1;
    // }
    // else
    // {
    //     if( cantidadDias > maxDiasLugar)
    //     {
    //         if(lugar == "cordoba")
    //         {
    //             acumuladorCordoba = acumuladorCordoba + cantidadDias;
    //         }
    //         else
    //         {
    //             if(lugar == "puerto madryn")
    //             {
    //                 acumuladorMadryn = acumuladorMadryn + cantidadDias;
    //             }
    //             else
    //             {
    //                 acumuladorGessel = acumuladorGessel + cantidadDias;
    //             }
    //         }
    //     }
    //     else
    //     {
    //         if(cantidadDias == maxDiasLugar)
    //         {
    //             if(lugar == "cordoba")
    //             {
    //                 acumuladorCordoba = acumuladorCordoba + cantidadDias; 
    //             }
    //             else
    //             {
    //                 if(lugar == "puerto madryn")
    //                 {
    //                     acumuladorMadryn = acumuladorMadryn + cantidadDias;
    //                 }
    //                 else
    //                 {
    //                     acumuladorGessel = acumuladorGessel + cantidadDias;
    //                 }
    //             }
    //         }
    //     }
    // }
    //-------------------------------------------------------
    //d- la suma de todos los importes
    //-------------------------------------------------------
    importesAcumulados += importeViaje;
    //-------------------------------------------------------
    //e-el nombre del más pesado de los pasajeros y el del más liviano
    //-------------------------------------------------------
    if(flagPeso == 0 || pesoPasajero > maxPeso)
    {
        maxPeso = pesoPasajero;
        nombreMasPesado = nombreTitular;
    }
    if(flagPeso == 0 || pesoPasajero < minPeso)
    {
        minPeso = pesoPasajero;
        nombreMenosPesado = nombreTitular;
        flagPeso = 1;
    }    
    
    
    // if(flagPeso == 0)
    // {
    //     maxPeso = pesoPasajero;
    //     minPeso = pesoPasajero;
    //     flagPeso = 1;
    //     nombreMasPesado = nombreTitular;
    //     nombreMenosPesado = nombreTitular;
    // }
    // else
    // {
    //     if(pesoPasajero > maxPeso)
    //     {
    //         maxPeso = pesoPasajero;
    //         nombreMasPesado = nombreTitular;
    //     }
    //     else
    //     {
    //         if(pesoPasajero < minPeso)
    //         {
    //             minPeso = pesoPasajero;
    //             nombreMenosPesado = nombreTitular;
    //         }
    //     }
    // }
    //-------------------------------------------------------
    //f-el lugar donde se pagó el mayor importe
    //-------------------------------------------------------

    // if(flagImporte == 0)
    // {
    //     maxImporte = importeViaje;
    //     flagImporte = 1;
    //     lugarMayorImporte = lugar;
    // }
    // else
    // {
    //     if(importeViaje > maxImporte)
    //     {
    //         maxImporte = importeViaje;
    //         lugarMayorImporte = lugar;
    //     }
    // }
    //-------------------------------------------------------
    //g-el nombre de la mujer más alta
    //-------------------------------------------------------
    if(sexoPasajero == "f")
    {
        contadorMujeres++;
        if(flagMujerAlta == 0 || alturaPasajero > maxAltura)
        {
            maxAltura = alturaPasajero;
            flagMujerAlta = 1;
        }  
    }
    else
    {
        contadorHombres++;
    }
    
    // if(flagMujerAlta == 0)
    // {
    //     maxAltura = alturaPasajero;
    //     flagMujerAlta = 1;
    //     nombreMujerAlta = nombreTitular;
    // }
    // else
    // {
    //     if(alturaPasajero > maxAltura && sexoPasajero == 'f')
    //     {
    //         maxAltura = alturaPasajero;
    //         nombreMujerAlta = nombreTitular;
    //     }
    // }
    //-------------------------------------------------------
    //h- Cuál fue la forma de pago más utilizada
    //-------------------------------------------------------
    if(pago == "mercado pago")
    {
        contadorMercadoPago++;
    }
    else
    {
        contadorTarjeta++;
    }
    // if(flagPago == 0)
    // {
    //     maxPago = pago;
    //     flagPago = 1;
    // }
    // else
    // {
    //     if(pago == "mercado pago")
    //     {
    //         contadorMercadoPago++;
    //     }
    //     else
    //     {
    //         contadorTarjeta++;
    //     }
    // }
    // if(contadorMercadoPago > contadorTarjeta)
    // {
    //     maxPago = "Mercado pago";
    // }
    // else
    // {
    //     if(contadorMercadoPago == contadorTarjeta)
    //     {
    //         maxPago = "ambos";
    //     }
    //     else
    //     {
    //         maxPago = "Tarjeta de Credito";
    //     }
    // }
    //-------------------------------------------------------
    //i- en qué temporada se viajó más
    //-------------------------------------------------------

    // if(flagTemporada == 0)
    // {
    //     temporadaMasViajada = temporada;
    //     flagTemporada = 1;
    // }
    // else
    // {
    //     if(temporada == "alta")
    //     {
    //         contadorAlta++;
    //     }
    //     else
    //     {
    //         contadorBaja++;
    //     }
    // }
    // if(contadorAlta > contadorBaja)
    // {
    //     temporadaMasViajada = "Alta";
    // }
    // else
    // {
    //     if(contadorAlta == contadorBaja)
    //     temporadaMasViajada = "Ambos";
    //     else
    //     {
    //         temporadaMasViajada = "Baja";
    //     }
    // }
    //-------------------------------------------------------
    //j- qué lugar tuvo más pasajeros
    //-------------------------------------------------------
    // if(flagPasajeros == 0)
    // {
    //     lugarMasPasajeros = lugar;
    //     flagPasajeros = 1;
    // }
    // else
    // {
    //     if(lugar == "cordoba")
    //     {
    //         pasajerosCordoba++;
    //     }
    //     else
    //     {
    //         if(lugar == "puerto madryn")
    //         {
    //             pasajerosMadryn++;
    //         }
    //         else
    //         {
    //             pasajerosGessel++;
    //         }
    //     }
    // }
    // if(pasajerosCordoba > pasajerosGessel && pasajerosCordoba > pasajerosMadryn)
    // {
    //     lugarMasPasajeros = "Cordoba";
    // }
    // else 
    // {
    //     if(pasajerosGessel > pasajerosCordoba && pasajerosGessel > pasajerosMadryn)
    //     {
    //         lugarMasPasajeros = "Villa Gessel";
    //     }
    //     else
    //     {
    //         lugarMasPasajeros = "Puerto Madryn";
    //     }
    // }
    // //-------------------------------------------------------
    // //k- porcentaje equipaje a mano
    // //-------------------------------------------------------
    if(equipaje == "si")
    {
        contadorSi++;
    }
    contadorIngresados++;
    
    //-------------------------------------------------------
    //l- que porcentaje hay de cada sexo
    //-------------------------------------------------------
    // if(sexoPasajero == "f")
    // {
    //     contadorMujeres++;
    // }
    // else
    // {
    //     contadorHombres++;
    // }
    // contadorIngresados++;
    // porcentajeHombres = contadorIngresados / contadorHombres * 100;
    // porcentajeMujeres = contadorIngresados / contadorMujeres * 100;
    
    preguntar = prompt("Otro usuario?? y/n: ");
}
//c - 
if(acumuladorCordoba > acumuladorGessel && acumuladorCordoba > acumuladorMadryn)
{
    maxDiasLugar = acumuladorCordoba;
}
else
{
    if(acumuladorGessel > acumuladorCordoba && acumuladorGessel > acumuladorMadryn)
    {
        maxDiasLugar = acumuladorGessel;
    }
    else
    {  
        maxDiasLugar = acumuladorMadryn;
    }
}
//f
if (acumuladorImporteCordoba > acumuladorImporteGessel && acumuladorImporteCordoba > acumuladorImporteMadryn)
{
    maxImporte = "Cordoba es el mayor importe";
}
else 
{
    if(acumuladorGessel > acumuladorCordoba && acumuladorGessel > acumuladorImporteMadryn)
    {
        maxImporte = "Gessel es el mayor importe";
    }
    else
    {
        maxImporte = "Madryn es el mayor importe";
    }
}
//h
if(contadorMercadoPago > contadorTarjeta)
{
    maxPago = "Mercado Pago";
}
else
{
    maxPago = "Tarjeta de credito";
}
//j
if(contadorCordobaPasajeros > contadorGesselPasajeros && contadorCordobaPasajeros > contadorMadrynPasajeros)
{
    lugarMasPasajeros = "Cordoba";
}
else 
{
    if(contadorGesselPasajeros > contadorCordobaPasajeros && contadorGesselPasajeros > contadorMadrynPasajeros)
    {
        lugarMasPasajeros = "Villa Gessel";
    }
    else
    {
        lugarMasPasajeros = "Puerto Madryn";
    }
}
//k
// contadorIngresados___100
// contadorSi_____x
porcentajeEquipaje = (contadorSi * 100) / contadorIngresados;
//l
porcentajeHombres = (contadorHombres * 100) / contadorIngresados;
porcentajeMujeres = (contadorMujeres * 100) / contadorIngresados;

//muestro 
mensaje = "\n La cantidad de personas en temporada Alta es: " + contadorTemporadaAlta;
mensaje += "\n La cantidad de personas en temporada Baja es: " + contadorTemparadaBaja;
mensaje += "\n El peso de todos los que viajan a Villa Gessel es: " + acumuladorPesoGessel;
mensaje += "\n El maximo acumulador de dias es : " + maxDiasLugar;
mensaje += "\n La suma de todos los importes es : " + importesAcumulados;
mensaje += "\n El nombre del pasajero Mas pesado es: " + nombreMasPesado;
mensaje += "\n El nombre del pasajero Menos pesado es: " + nombreMenosPesado;
mensaje += "\n El nombre del Lugar donde se pago mas: " + lugarMayorImporte;
mensaje += "\n El nombre de la mujer mas alta es: " + nombreMujerAlta;
mensaje += "\n La forma de pago mas utilizada es: " + maxPago;
mensaje += "\n La temporada mas viajada es: " + temporadaMasViajada;
mensaje += "\n El lugar con mas pasajeros es: " + lugarMasPasajeros;
mensaje += "\n El porcentaje de equipaje a mano es: " + porcentajeEquipaje + "%";
mensaje += "\n EL porcentaje de Hombres es : " + porcentajeHombres + "%";
mensaje += "\n El porcentaje de Mujeres es: " + porcentajeMujeres + "%";
alert(mensaje);
}
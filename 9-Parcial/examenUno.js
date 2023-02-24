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
let preguntar;
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
//acumuladores lugares
let acumuladorGessel = 0;
let acumuladorCordoba = 0;
let acumuladorMadryn = 0;
let maxLugar;
let flagLugar = 0;
do
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
        lugar = prompt("\n Error, ingrese los 3 lugares disponibles correctamente: \n Puerto Madryn, Villa Gessel y Cordoba ").toLowerCase;
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
    //a- cantidad de personas que viajan en cada temporada
    cantidadPersonas = cantidadPersonas + 1;
    //b- el peso acumulado de todos los que viajan a villa gessel
    pesoAcumuladoGessel = pesoAcumuladoGessel + pesoPasajero;
    //c- el lugar con la mayor cantidad de dias acumulados
    if(flagLugar == 0){
        maxLugar = cantidadDias;
        flagLugar = 1;
    }
    else
    {
        if(cantidadDias > maxLugar)
        {
            if(lugar == "cordoba")
            {
                acumuladorCordoba = acumuladorCordoba + cantidadDias;
            }
            else
            {
                if(lugar == "puerto madryn")
                {
                    acumuladorMadryn = acumuladorMadryn + cantidadDias;
                }
                else
                {
                    acumuladorGessel = acumuladorGessel + cantidadDias;
                }
            }
        }
    }

    preguntar = confirm("Desea ingresar otro pasajero? ");
}while(preguntar);


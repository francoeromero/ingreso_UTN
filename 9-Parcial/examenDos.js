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
    let mensaje;
    let preguntar = 'y';
    let nombreCarta;
    let tipoCarta;
    let precioCarta;
    let rarezaCarta;
    //a
    let cartasIngresadas = 0;
    let contadorCartasIngresadas = 0;
    let contadorMagica = 0;
    let contadorMoneda = 0;
    let contadorHeroe = 0;
    let contadorTrampa = 0;
    let porcentajeMagica;
    let porcentajeMoneda;
    let porcentajeHeroe;
    let porcentajeTrampa;
    //b
    let contadorSuperRara = 0;
    let contadorRara = 0;
    let contadorComun = 0;
    //c
    let precioMax = 0; //sino me da undefined
    let nombreSuperRaraCara = "no hay"; //sino me da undefined
    let flagMasCara = 0;
    //d
    let flagMasBarata=0;
    let precioMin = 0; //sino me da undefined
    let nombreComunBarata = "no hay"; //sino me da undefined
    //e
    let tipoCartaRarezaMaxTotal;
    let tipoCartaMaxTotal;
    let precioMaxTotal;
    let flagMaxTotal = 0;
    while(preguntar == 'y')
    {
        //Nombre de la carta (no puede ser un valor que contenga numeros)
        nombreCarta = prompt("Ingrese el nombre de la carta: ");
        while(isNaN(nombreCarta) == false)
        {  
            nombreCarta = prompt("ERROR: ingrese un nombre:");
        }
        //Tipo de carta (Heroe, Magica, Moneda, Trampa)
        tipoCarta = prompt("Ingrese tipo de carta (Heroe, Magica, Moneda, Trampa): ").toLowerCase();
        while(tipoCarta != "heroe" && tipoCarta != "magica" && tipoCarta != "moneda" && tipoCarta != "trampa")
        {
            tipoCarta = prompt("ERROR: Heroe, Magica, Moneda, Trampa ");
        }
        //Precio de la carta
        precioCarta = prompt("Ingrese el precio de la carta");
        precioCarta = parseFloat(precioCarta);
        while(isNaN(precioCarta) == true)
        {
            precioCarta = prompt("ERROR: ingrese el numero");
            precioCarta = parseFloat(precioCarta);
        }
        //Rareza de la carta (Hay 3 tipos de cartas Comun, Rara, Super Rara)
        rarezaCarta = prompt("Ingrese su rareza: comun, rara o super rara");
        while(rarezaCarta != "comun" && rarezaCarta != "rara" && rarezaCarta != "super rara")
        {
            rarezaCarta = prompt("ERROR: comun, rara o super rara");
        }
        //a) el porcentaje de cartas de cada TIPO(Heroe, Magica, Moneda, Trampa)
        
        if(tipoCarta == "heroe")
        {
            contadorHeroe++;
        }
        else
        {
            if(tipoCarta == "magica")
            {
                contadorMagica++;
            }
            else
            {
                if(tipoCarta == "moneda")
                {
                    contadorMoneda++;
                }
                else
                {
                    if(tipoCarta == "trampa")
                    {
                        contadorTrampa++;
                    }
                }
            }
        }
        cartasIngresadas++;
        //b) la cantidad de cartas segun su rareza comun rara super rara
        if(rarezaCarta == "super rara")
        {
            contadorSuperRara++;
            //c nombre y precio de la mas cara
            if(flagMasCara == 0 || precioCarta > precioMax)
            {
                precioMax = precioCarta;
                nombreSuperRaraCara = nombreCarta;
                flagMasCara = 1;
            }
        }
        else
        {
            if(rarezaCarta == "rara")
            {
                contadorRara++;
            }
            else
            {
                contadorComun++;
                //d - tipo de carta y precio de la mas barata
                if(flagMasBarata == 0 || precioMin < precioCarta) 
                {
                    precioMin = tipoCarta;
                    nombreComunBarata = nombreCarta;
                    flagMasBarata = 1;
                }
            }
        }
        //e) de la venta mas cara, el precio, el tipo de carta y su rareza
        if(flagMaxTotal == 0 || precioCarta > precioMaxTotal)
        {
            precioMaxTotal = precioCarta;
            tipoCartaMaxTotal =  tipoCarta;
            tipoCartaRarezaMaxTotal = rarezaCarta;
            flagMaxTotal = 1;
        }

        //segundo intento
        // //a) el porcentaje de cartas de cada TIPO(Heroe, Magica, Moneda, Trampa)
        // if(tipoCarta == "heroe")
        // {
        //     contadorHeroe++;
        // }
        // else 
        // {
        //     if(tipoCarta == "magica")
        //     {
        //         contadorMagica++;
        //     }
        //     else
        //     {
        //         if(tipoCarta == "moneda")
        //         {
        //             contadorMoneda++;
        //         }
        //         //trampa
        //         else
        //         {
        //             contadorTrampa++;
        //         }
        //     }
        // }
        // //Rareza de la carta (Hay 3 tipos de cartas Comun, Rara, Super Rara)
        // //c) de las cartas de tipo Super Rara, se necesita saber el nombre y el precio de la carta mas cara
        // //d) de las cartas de tipo Comun, se necesita saber el tipo y el precio de la mas barata
        // if(rarezaCarta == "comun")
        // {
        //     contadorComun++;
        //     if(flagMasBarata == 0) 
        //     {
        //         precioMin = precioCarta;
        //         flagMasBarata = 1;
        //     }
        //     else 
        //     {
        //         if(precioCarta < precioMin)
        //         {
        //             precioMin = precioCarta;
        //             nombreComunBarata = nombreCarta;
        //             tipoCartaMin =  tipoCarta;
        //         }
        //     }
        // }
        // else
        // {
        //     if(rarezaCarta == "rara")
        //     {
        //         contadorRara++;
        //     }
        //     else //super rara
        //     {
        //         contadorSuperRara++;
        //         if(flagMasCara == 0)
        //         {
        //             precioMax = precioCarta;
        //             flagMasCara = 1;
        //         }
        //         else
        //         {
        //             {
        //                 if(precioCarta > precioMax)
        //                 {
        //                     precioMax = precioCarta;
        //                     nombreSuperRaraCara = nombreCarta;
        //                 }
        //             }
        //         }
        //     }
        // }
        // //e) de la venta mas cara, el precio, el tipo de carta y su rareza
        // if(flagMaxTotal == 0)
        // {
        //     precioMaxTotal = precioCarta;
        //     flagMaxTotal = 1;
        // }
        // else
        // {
        //     if(precioCarta > precioMaxTotal)
        //     {
        //         precioMaxTotal = precioCarta;
        //         tipoCartaMaxTotal = precioCarta;
        //         tipoCartaRarezaMaxTotal = rarezaCarta;
        //     }
        // }


        //primer intento

        // //a) el porcentaje de cartas de cada TIPO
        // if(tipoCarta == "heroe")
        // {
        //     contadorHeroe++;
        // }
        // else
        // {
        //     if(tipoCarta == "magica")
        //     {
        //         contadorMagica++;
        //     }
        //     else
        //     {
        //         if(tipoCarta == "moneda")
        //         {
        //             contadorMoneda++;
        //         }
        //         else
        //         {
        //             contadorTrampa++;
        //         }
        //     }
        // }
        // contadorCartasIngresadas++;
        // //b) la cantidad de cartas segun su rareza
        // if(rarezaCarta == "comun")
        // {
        //     contadorComun++;
        //     //d
        //     if(flagMasBarata == 0 || precioCarta < precioMin)
        //         {
        //             precioMin = precioCarta;
        //             nombreComunBarata = nombreCarta;
        //             flagMasBarata = 1;
        //         }
        //     //fin d
        // }
        // else
        // {
        //     if(rarezaCarta == "rara")
        //     {
        //         contadorRara++;
        //     }
        //     else
        //     {
        //         contadorSuperRara++;
        //         //c
        //         if(flagMasCara == 0 || precioCarta > precioMax)
        //         {
        //             precioMax = precioCarta;
        //             nombreSuperRaraCara = nombreCarta;
        //             flag = 1;
        //         }
        //         //fin c
        //     }
        // }
        // //e) de la venta mas cara, el precio, el tipo de carta y su rareza
        // if(flagMaxTotal == 0 || precioCarta > precioMaxTotal)
        // {
        //     precioMaxTotal = precioCarta;
        //     tipoCartaMaxTotal = precioCarta;
        //     tipoCartaRarezaMaxTotal = rarezaCarta;
        //     flagMaxTotal = 1;
        // }

        //fin
        preguntar = prompt("Otro usuario?? y/n: ");
    }
    //calculo
    //a
    //porcentajeEquipaje = (contadorSi * 100) / contadorIngresados;
    
    porcentajeHeroe = (contadorHeroe * 100) / cartasIngresadas;
    porcentajeMoneda = (contadorMoneda * 100) / cartasIngresadas;
    porcentajeMagica = (contadorMagica*100)  / cartasIngresadas;
    porcentajeTrampa = (contadorTrampa*100) / cartasIngresadas;
    
    //b

    //muestro
    mensaje = "\n El porcentaje de Heroe es: " + porcentajeHeroe + "%";
    mensaje += "\n El porcentaje de Moneda es: " + porcentajeMoneda + "%";
    mensaje += "\n El porcentaje de Magica es: " + porcentajeMagica + "%";
    mensaje += "\n El porcentaje de Trampa es: " + porcentajeTrampa + "%";
    mensaje += "\n La cantidad de cartas comunes son : " + contadorComun;
    mensaje += "\n La cantidad de cartas raras son: " + contadorRara;
    mensaje += "\n La cantidad de cartas super raras: " + contadorSuperRara;
    mensaje += "\n El nombre de la carta super rara mas cara es: " + nombreSuperRaraCara; //
    mensaje += "\n El precio de la carta super rara es : " + precioMax;
    mensaje += "\n El nombre de la carta comun mas barata es: " + nombreComunBarata;
    mensaje += "\n El precio de la carta comun mas barata es : " + precioMin; //
    mensaje += "\n Rareza de la carta mas cara: " + tipoCartaRarezaMaxTotal;
    mensaje += "\n El tipo de carta mas cara: " + tipoCartaMaxTotal;
    // mensaje += "\n El precio de la mas cara: $" + precioMaxTotal;
    alert(mensaje);

}
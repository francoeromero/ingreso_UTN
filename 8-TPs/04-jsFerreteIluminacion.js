/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $unidad pesos final.
Las lámparas están al mismo precio de $35 pesos final.

A.	Si compra 6 o más  lamparitas 50%. 

B.	Si compra 5  lamparitas  
        marca "ArgentinaLuz" descuento del 40 % 
        Si es de otra marca el descuento es del 30%.

C.	Si compra 4  lamparitas 
         marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % 
         otra marca el descuento es del 20%.

D.	Si compra 3  lamparitas 
         si es marca "ArgentinaLuz"  el descuento es del 15%, 
         si es  “FelipeLamparas” se hace un descuento del 10 % 
         si es de otra marca un 5%.

E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

*/

/*
    LAMPARAS        MARCA                     PORCENTAJE DE DESCUENTO
    6 o mas         todas                                50%

    5               "ArgentinaLuz"                       40%
    5               otra marca                           30% 

    4               "ArgentinaLuz"                       25%
    4               “FelipeLamparas”                     25%
    4                otra marca                          20%

    3               "ArgentinaLuz"                       15%
    3               “FelipeLamparas”                     10%
    3                otra marca                          5%
*/
//---------------------------------------
//SWITCH
//---------------------------------------
// function CalcularPrecio()
// {
//     let precioDescuento;
//     let precioNormal;
//     let cantidadLamparas;
//     let marca;
//     let unidad = 35;
//     let porcentaje;
//     let precioImpuesto;
//     let mensaje;
//     // asigno el id a las variables
//     cantidadLamparas = document.getElementById("txtIdCantidad").value;
//     marca = document.getElementById("Marca").value;
//     //convierto en numero decimales
//     cantidadLamparas = parseFloat(cantidadLamparas);
//     switch(cantidadLamparas)
//     {
//         case 5:
//             switch(marca)
//             {
//                 case "ArgentinaLuz":
//                     porcentaje = 0.6;
//                     mensaje = "Se aplica el 40% de descuento";
//                 break;
//                 default:
//                     porcentaje = 0.7;
//                     mensaje = "Se aplica el 30% de descuento";
//                 break;    
//             }
//         break;
//         case 4:
//             switch(marca)
//             {
//                 case "ArgentinaLuz":
//                 case "FelipeLamparas":
//                     porcentaje = 0.75;
//                     mensaje = "Se aplica el 25% de descuento";
//                 break;
//                 default:
//                     porcentaje = 0.80;
//                     mensaje = "Se aplica el 20% de descuento";
//                 break;
//             }
//         break;
//         case 3:
//             switch(marca)
//             {
//             case "ArgentinaLuz":
//                 porcentaje = 0.85;
//                 mensaje = "Se aplica el 15% de descuento";
//             break;
//             case "FelipeLamparas":
//                 porcentaje = 0.90;
//                 mensaje = "Se aplica el 10% de descuento";
//             break;
//             default:
//                 porcentaje = 0.95;
//                 mensaje = "Se aplica el 5% de descuento";
//             break;
//             }
//         break;
//         case 2:
//         case 1:
//             porcentaje = 1;
//             mensaje = "No se aplica ningun descuento";
//         break;
//         default:
//             porcentaje = 0.5;
//             mensaje = "Se aplica el 50% de descuento";
//         break;
//     }
//     //calculo
//     precioNormal = cantidadLamparas * unidad; 
//     precioDescuento = precioNormal * porcentaje;  
//     //E
//     if(precioDescuento > 120)
//     {
//         precioImpuesto = precioDescuento + (precioDescuento * 0.1);
//         mensaje = mensaje + " pero se suma un 10% de impuesto de IIBB";
//     }
//     //muestro
//     alert(mensaje);
//     document.getElementById("txtIdprecioDescuento").value = precioDescuento;
// }
//---------------------------------------
//SWITCH - IF 
//---------------------------------------
function CalcularPrecio() 
{
    let precioDescuento;
    let precioNormal;
    let cantidadLamparas;
    let marca;
    let unidad = 35;
    let porcentaje;
    let precioImpuesto;
    let mensaje;
    //asigno el id a las variables
    cantidadLamparas = document.getElementById("txtIdCantidad").value;
    marca = document.getElementById("Marca").value;
    //convierto en numero decimales
    cantidadLamparas = parseFloat(cantidadLamparas);
    //valido a que porcentaje pertenece
    switch (cantidadLamparas)
    {
		case 5:
            if(marca == "ArgentinaLuz")
            {
                porcentaje = 0.6;
                mensaje = "Se aplica el 40% de descuento";   
            }
            else
            {
                porcentaje = 0.7;
                mensaje = "Se aplica el 30% de descuento";
            }	
		break;
        case 4:
            if(marca == "ArgentinaLuz" || marca == "FelipeLamparas")
            {
                porcentaje = 0.75;
                mensaje = "Se aplica el 25% de descuento";
            }
            else
            {
                porcentaje = 0.8;
                mensaje = "Se aplica el 20% de descuento";
            }
        break;
        case 3:
            if(marca == "ArgentinaLuz")
            {
                porcentaje = 0.85;
                mensaje = "Se aplica el 15% de descuento";
            }
            else
            {
                if(marca == "FelipeLamparas")
                {
                    porcentaje = 0.9;
                    mensaje = "Se aplica el 10% de descuento";
                }
                else
                {
                    porcentaje = 0.95;
                    mensaje = "Se aplica el 5% de descuento";
                }
            }
        break;
        default:
            if(cantidadLamparas > 5)
            {
                porcentaje = 0.5;
                mensaje = "Se aplica un 50% de descuento";
            }
            else
            {
                porcentaje = 1;
                mensaje = "No se aplica ningún descuento";
            }
        break;
	}
	//calculo
    precioNormal = cantidadLamparas * unidad;
    precioDescuento = precioNormal * porcentaje;
    //E
    if(precioDescuento > 120)
    {
        precioImpuesto = precioDescuento + (precioDescuento * 0.1);
        mensaje = mensaje + " pero se suma un 10% de impuesto de IIBB";
    }
    //muestro
    alert(mensaje);
    document.getElementById("txtIdprecioDescuento").value = precioDescuento;
}







    // let precioDescuento;
    // let precioNormal;
    // let cantidadLamparas;
    // let marca;
    // let unidad = 35;
    // let porcentaje;
    // let precioImpuesto;
    // let aumento;
    // let mensaje;
    // //asigno el id a las variables
    // cantidadLamparas = document.getElementById("txtIdCantidad").value;
    // marca = document.getElementById("Marca").value;
    // //convierto en numero decimales
    // cantidadLamparas = parseFloat(cantidadLamparas);
    // //valido a que porcentaje pertenece
    // if(cantidadLamparas > 5)
    // {
    //     porcentaje = 0.5;
    //     mensaje = "Se aplica el 50% de descuento";
    // }
    // else
    // {
    //     if(cantidadLamparas == 5)
    //     {
    //         if(marca == "ArgentinaLuz")
    //         {
    //             porcentaje = 0.4;
    //             mensaje = "Se aplica el 40% de descuento";
    //         }
    //         else
    //         {
    //             porcentaje = 0.3;
    //             mensaje = "Se aplica el 30% de descuento";
    //         }
    //     }
    //     else
    //     {
    //         if(cantidadLamparas == 4)
    //         {
    //             if(marca == "ArgentinaLuz" || marca == "FelipeLamparas")
    //             {
    //                 porcentaje = 0.25;
    //                 mensaje = "Se aplica el 25% de descuento";
    //             }
    //             else
    //             {
    //                 porcentaje = 0.2;
    //                 mensaje = "Se aplica el 20% de descuento";
    //             }
    //         }
    //         else
    //         {
    //             if(cantidadLamparas == 3)
    //             {
    //                 if(marca == "ArgentinaLuz")
    //                 {
    //                     porcentaje = 0.15;
    //                     mensaje = "Se aplica el 15% de descuento";
    //                 }
    //                 else
    //                 {
    //                     if(marca == "FelipeLamparas")
    //                     {
    //                         porcentaje = 0.1;
    //                         mensaje = "Se aplica el 10% de descuento";
    //                     }
    //                     else
    //                     {
    //                         porcentaje = 0.05;
    //                         mensaje = "Se aplica el 5% de descuento";
    //                     }
    //                 }
    //             }
    //             else 
    //             {
    //                 porcentaje = 0;
    //                 mensaje = "No se aplica ningun descuento";
    //             }
    //         }
    //     }
    // }
    // //calculo
    // precioNormal = cantidadLamparas * unidad;
    // precioDescuento = precioNormal - (precioNormal * porcentaje);
    // //E
    // if(precioDescuento > 120)
    // {
    //     precioImpuesto = precioDescuento + (precioDescuento * 0.1);
    //     mensaje = mensaje + " pero se suma un 10% de impuesto de IIBB"
    // }
    // //muestro
    // alert(mensaje);
    // document.getElementById("txtIdprecioDescuento").value = precioDescuento;





























// function CalcularPrecio()
// {
//     let cantidadLamparas;
//     let marca;
//     let descuento;
//     let porcentajeDescuento;
//     let unidad = 35;
//     let mensaje = "";
//     let precioNormal;
//     let precioDescuento;
//     let impuesto = 0.1;
//     let precioImpuesto;
    

//     //asigno el id a la variable
//     cantidadLamparas = document.getElementById("txtIdCantidad").value;
//     marca = document.getElementById("Marca").value;
//     //parseo
//     cantidadLamparas = parseFloat(cantidadLamparas);
//     //valido segun q porcentajeDescuento corresponde
//     if(cantidadLamparas > 5)
//     {
//         porcentajeDescuento = 0.5;
//         mensaje = "Se aplicó el 50% de descuento";
//     }
//     else
//     {
//         if(cantidadLamparas == 5)
//         {
            
//             if(marca == "ArgentinaLuz")
//             {
//                 porcentajeDescuento = 0.4;
//                 mensaje = "Se aplicó el 40% de descuento";
//             }
//             else
//             {
//                 porcentajeDescuento = 0.3;
//                 mensaje = "Se aplicó el 30% de descuento";
//             }
            
//         }
//         else
//         {
//             if(cantidadLamparas == 4)
//             {
//                 if(marca == "ArgentinaLuz" || marca == "FelipeLamparas")
//                 {
//                     porcentajeDescuento = 0.25;
//                     mensaje = "Se aplicó el 25% de descuento";
//                 }
//                 else
//                 {
//                     porcentajeDescuento = 0.20;
//                     mensaje = "Se aplicó el 20% de descuento";
//                 }
//             }
//             else 
//             {
//                 if(cantidadLamparas == 3)
//                 {
//                     if(marca == "ArgentinaLuz")
//                     {
//                         porcentajeDescuento = 0.15;
//                         mensaje = "Se aplicó el 15% de descuento";
//                     }
//                     else
//                     {
//                         if(marca == "FelipeLamparas")
//                         {
//                             porcentajeDescuento = 0.10;
//                             mensaje = "Se aplicó el 10% de descuento";
//                         }
//                         else {
//                             porcentajeDescuento = 0.05;
//                             mensaje = "Se aplicó el 5% de descuento";
//                         }
//                     }
//                 }
//                 else
//                 {
//                     porcentajeDescuento = 0;
//                     mensaje = "No se aplicó ningun descuento";
//                 }
//             }
//         }
//     }
//     //ahora que se cual es el porcentajeDescuento de descuento que corresponde calculo:
//     precioNormal = cantidadLamparas * unidad; 
//     descuento = precioNormal * porcentajeDescuento;
//     precioDescuento = precioNormal - descuento;

//     if(precioDescuento > 120)
//     {
//         precioImpuesto = precioDescuento - (precioDescuento * impuesto);
//         mensaje = mensaje + " pero usted pagó un 10% de impuesto de IIBB";
//     }
    

//     //Ahora muestro el resultado
//     alert("Tenias que pagar $" + precioNormal + " y " + mensaje );
//     document.getElementById("txtIdprecioDescuento").value = precioDescuento;

// }
















// function  CalcularPrecioss()
// {   
//     //declaro variables
//     let unidad = 35;
//     let precioNormal;
//     let precioDescuento;
//     let cantidadLamparas;
//     let marca;
//     let descuento;
//     let porcentajeDescuento;
//     let mensaje;
//     let impuesto;
//     //asigno el id  a las variables correspondientes
//     cantidadLamparas = document.getElementById("txtIdCantidad").value;
//     marca = document.getElementById("Marca").value;
//     //convierto a numeros decimales
//     cantidadLamparas = parseFloat(cantidadLamparas);
//     //valido el dato ingresado a que porcentajeDescuento de descuento pertenece
//     //A - Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
//     if(cantidadLamparas > 5)
//     {
//         porcentajeDescuento = 0.5;
//         mensaje = "Se aplicó el 50% de descuento";
//     }
//     //B - 5  lamparitas  marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
//     if(cantidadLamparas == 5)
//     {
//         if(marca == "ArgentinaLuz")
//         {
//             porcentajeDescuento = 0.4;
//             mensaje = "Se aplicó el 40% de descuento";
//         }
//         else
//         {
//             porcentajeDescuento = 0.3;
//             mensaje = "Se aplicó el 30% de descuento";      
//         }
//     }
//     //C - 4  lamparitas marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.

//     if(cantidadLamparas == 4)
//     {
//         if(marca == "ArgentinaLuz" || marca == "FelipeLamparas")
//         {
//             porcentajeDescuento = 0.25;
//             mensaje = "Se aplicó un 25% de descuento";
//         }
//         else
//         {
//             porcentajeDescuento = 0.2;
//             mensaje = "Se aplicó un 20% de descuento";
//         }
//     }
//     //D - 3  lamparitas marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas”  descuento del 10 % y si es de otra marca un 5%.

//     if(cantidadLamparas == 3)
//     {
//         if(marca == "ArgentinaLuz"){
//             porcentajeDescuento = 0.15;
//             mensaje = "Se aplicó un 15% de descuento";
//         }
//         else 
//         {
//             if(marca == "FelipeLamparas")
//             {
//                 porcentajeDescuento = 0.1;
//                 mensaje = "Se aplicó un 10% de descuento";
//             }
//             else
//             {
//                 porcentajeDescuento = 0.05;
//                 mensaje = "Se aplicó un 5% de descuento";
//             }
//         }
//     }
//     else {
//         porcentajeDescuento = 1;
//         mensaje = "No se aplicó ningun descuento";
//     }
    

//     //ahora que ya se el porcentajeDescuento de descuento hago el calculo
//     precioNormal = cantidadLamparas * unidad;  // 1 * 35 = 35
//     descuento = precioNormal * porcentajeDescuento; // 35 * 1 = 35
//     precioDescuento = precioNormal - descuento; //35 - 35 = 0

//     //E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% 
//     if(precioDescuento > 120){
//         impuesto = precioDescuento * 0.1;
//         precioDescuento = precioDescuento + impuesto;
//         mensaje = mensaje + " Pero usted pagó de IIBB $" + precioDescuento +  " siendo el impuesto $" + impuesto + " que se pagó";
//     }//Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

//     //Ahora muestro el resultado
//     alert("Tenias que pagar $" + precioNormal + " y " + mensaje);
//     document.getElementById("txtIdprecioDescuento").value = precioDescuento;

// }

















// function  CalcularPrecios()
// {
//       //declaro variables    
//       const unidad = 35;
//       let cantLamparasIngresado;
//       let cantLamparas;
//       let marca;
//       let porcentajeDescuento;
//       let mensaje;
//       let precioNormal;
//       let descuento;
//       let precioDescuento;
//       let impuesto;
//       const AUMENTO = 0.1;
//       let precioFinal;
//       //asigno los id a las variables
//       cantLamparasIngresado = document.getElementById("txtIdCantidad").value;
//       marca = document.getElementById("Marca").value;
//       //convierto a numeros decimales porque son precios
//       cantLamparas = parseFloat(cantLamparasIngresado);
//       //lo divido en 3 if, 

//       // A y B los anido de un if principal que tengan en comun la cantidad de lamparas
//       if (cantLamparas >= 6) {
//         porcentajeDescuento = 0.5;
//         mensaje = "Se aplicó el 50%";
//       }
//       else if (cantLamparas === 5 && marca == "ArgentinaLuz"){
//         porcentajeDescuento = 0.4;
//         mensaje = "Se aplicó el 40%";
//       }
//       else {
//         porcentajeDescuento = 0.3;
//         mensaje = "Se aplicó el 30%";
//       }
//       //C anido con un if ppal que tengan en comun 
//       if(cantLamparas === 4)
//       {
//          if(marca == "ArgentinaLuz" || marca == "FelipeLamparas")
//          {
//          porcentajeDescuento = 0.25;
//          mensaje = "Se aplicó el 25%";
//          }
//          else 
//          {
//          porcentajeDescuento = 0.2;
//          mensaje = "Se aplicó el 20%";
//          }
//      }
//      //D anido con un if ppal que tengan en comun
//      if(cantLamparas === 3)
//      {
//             if(marca == "ArgentinaLuz")
//             {
//                 porcentajeDescuento = 0.15;
//                 mensaje = "Se aplicó el 15%";
//             }      
//             else if (marca == "FelipeLamparas")
//             {
//                 porcentajeDescuento = 0.10;
//                 mensaje = "Se aplicó el 10%";
//             }
//             else {
//                 porcentajeDescuento = 0.05;
//                 mensaje = "Se aplicó el 5%";
//             }
//     }
//       //Ahora que ya se cual es el porcentajeDescuento para el descuento, calculo:
//       precioNormal = cantLamparas * unidad; //4 * 35 = 140
//       descuento = precioNormal * porcentajeDescuento;// 140 * 0.25 = 35
//       precioDescuento = precioNormal - descuento; // 140 - 35 = 105

//       //E - si ese precio calculado supera 120 entonces le agrego un 10% de impuesto
//       if(precioDescuento > 120){
//         impuesto = precioDescuento * AUMENTO;
//         precioFinal = precioDescuento + impuesto;
//         alert("De IIBB usted debe pagar como precio final " + precioFinal.toFixed(2));
//       }
//        //muestro
//       alert(mensaje);
//       document.getElementById("txtIdprecioDescuento").value = precioDescuento;    
//     }



//       //D
//       if(cantLamparas === 3 && marca == "ArgentinaLuz"){
//         porcentajeDescuento = 0.15;
//         mensaje = "Se aplicó el 15%";
//       }
//       else if (cantLamparas === 3 && marca == "FelipeLamparas"){
//         porcentajeDescuento = 0.10;
//         mensaje = "Se aplicó el 10%";
//       }
//       else {
//         porcentajeDescuento = 0.05;
//         mensaje = "Se aplicó el 5%";
//       }
//       //calculo
//       precioNormal = cantLamparas * unidad; //4 * 35 = 140
//       descuento = precioNormal * porcentajeDescuento;// 140 * 0.25 = 35
//       precioDescuento = precioNormal - descuento; // 140 - 35 = 105

//       //E
//       if(precioDescuento > 120){
//         impuesto = precioDescuento * AUMENTO;
//         precioFinal = precioDescuento + impuesto;
//         alert(`de IIBB usted debe pagar como precio final $ ${precioFinal.toFixed(2)} `);
//       }
//       //muestro
//       alert(mensaje);
//       document.getElementById("txtIdprecioDescuento").value = precioDescuento;    
      
// }









/*

function CalcularPrecio()
{
    //Declaro variables
    let cantLamparasIngresado;
    let cantLamparas;
    const unidad = 35;
    let precio;
    let marca;
    let porcentajeDescuento;
    let descuento;
    let precioDescuento;
    const AUMENTOIIBB = 0.1;
    let ingresosBrutos;
    let impuesto;
    //paso el valor de la entrada a la variable
    cantLamparasIngresado = document.getElementById("txtIdCantidad").value;
    //paso el valor del elemento select a la variable
    marca = document.getElementById("Marca").value;
    //a la entrada la convierto en numeros decimales porque son precios y asigno a la variable
    cantLamparas = parseFloat(cantLamparasIngresado);
    //-------------------------- A ------------------------------------
    //Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%
    if(cantLamparas >= 6){
        porcentajeDescuento = 0.5;
        alert("Se aplicó el 50% de descuento");
    }
    //-------------------------- B ------------------------------------
    //B - Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 %
    else if (cantLamparas == 5 && marca == "ArgentinaLuz"){
        porcentajeDescuento = 0.4;
        alert("Se aplicó el 40% de descuento");
    }
    //B - y si es de otra marca el descuento es del 30%
    else if (cantLamparas == 5 && marca != "ArgentinaLuz"){
        porcentajeDescuento = 0.3;
        alert("Se aplicó el 30% de descuento");
    }
    //-------------------------- C ------------------------------------
    //C - si compro 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % 
    else if (cantLamparas == 4 && (marca == "ArgentinaLuz" || marca == "FelipeLamparas") ){
        porcentajeDescuento = 0.25;
        alert("Se aplicó el 25% de descuento");
    }
    // C  - si es de otra marca el descuento es del 20%.
    else if (cantLamparas == 4 && (marca != "ArgentinaLuz" || marca != "FelipeLamparas") ){
        porcentajeDescuento = 0.20;
        alert("Se aplicó el 20% de descuento");
    }
    //-------------------------- D ------------------------------------
    //D - Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%
    else if(cantLamparas == 3 && marca == "ArgentinaLuz"){
        porcentajeDescuento = 0.15;
        alert("Se aplicó el 15% de descuento");
    }
    //D - si es  “FelipeLamparas” se hace un descuento del 10 % 
    else if(cantLamparas == 3 && marca == "FelipeLamparas"){
        porcentajeDescuento = 0.10;
        alert("Se aplicó el 10% de descuento");
    }
    //D - y si es de otra marca un 5%.
    else if(cantLamparas == 3 && (marca != "ArgentinaLuz" || marca != "FelipeLamparas")){
        porcentajeDescuento =  0.05;
        alert("Se aplicó el 5% de descuento");
    }
    //Ahora que ya se a que porcentajeDescuento pertenece, hago el calculo:
    precio = cantLamparas * unidad;
    descuento = precio * porcentajeDescuento;
    precioDescuento = precio - descuento;
    // asigno el precioDescuento a la entrada
    document.getElementById("txtIdprecioDescuento").value = precioDescuento;
     //-------------------------- E ------------------------------------
    //en caso de que supere 120 le agrego el 10% de impuestos
    if (precioDescuento > 120) {
        ingresosBrutos = precioDescuento * AUMENTOIIBB;
        impuesto = precioDescuento + ingresosBrutos;
        //muestro
        alert(`Tenias que pagar ${precioDescuento.toFixed(2)} pero de IIBB usted debe pagar como precio final $ ${impuesto.toFixed(2)} siendo $ ${ingresosBrutos.toFixed(2)} el 10% de impuesto que se agregó`);
        //asigno el nuevo precio final
        document.getElementById("txtIdprecioDescuento").value = impuesto;
    }
    else{
        alert("EL precio no supera $ 120 para aplicar IIBB");
    }
}


*/
 /*
 Asignacion  --->  = 

CONDICIONALES operadores booleanos = operaciones relacionales
if solo una vez luego if else pueden ser infinitas y else es la sobra, si no es ninguno de todos los que escribiste

se compone por 3 bloques if, if else y else

if {}  si 
if else {}  sino es 
else{} sino cumple con ninguno

ejemplo:
la condicion es una declaracion de una variable, por ejemplo b = 4

if(condicion){
    alert("estoy dentro del if")
}
alert("estoy despues del bloque if")

 */
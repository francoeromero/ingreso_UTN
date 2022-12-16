/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.

A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 

B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.

C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.

D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.

E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
    // let cantlamparas;
    
    // let precio = cantlamparas * 35;
    // let descuento = precio * 0.5;
    // let preciofinal;

    cantlamparas = parseInt(document.getElementById("txtIdCantidad").value);
    marca = document.getElementById("Marca").value;

    //  A
    if(cantlamparas >= 6){
        let precio = cantlamparas * 35;
        let descuento = precio * 0.5;
        preciofinal = precio - descuento;
        alert("descuento 50 % - el precio es de:  $ " + preciofinal );
    }

    // B
    else if (cantlamparas == 5 && marca == "ArgentinaLuz"){
        let precio = cantlamparas * 35;
        let descuento = precio * 0.4;
        preciofinal = precio - descuento;
        alert("descuento 40 %  - el precio es de:  $ " + preciofinal );
    }
    else if (cantlamparas == 5 && marca != "ArgentinaLuz"){
        let precio = cantlamparas * 35;
        let descuento = precio * 0.3;
        preciofinal = precio - descuento;
        alert("descuento 30 %  - el precio es de:  $ " + preciofinal );
    }
    //C
    else if (cantlamparas == 4 && marca == "ArgentinaLuz"){
        let precio = cantlamparas * 35;
        let descuento = precio * 0.25;
        preciofinal = precio - descuento;
        alert("descuento 25 %  - el precio es de:  $ " + preciofinal );
    } 
    else if (cantlamparas == 4 && marca == "FelipeLamparas"){
        let precio = cantlamparas * 35;
        let descuento = precio * 0.25;
        preciofinal = precio - descuento;
        alert("descuento 25 %  - el precio es de:  $ " + preciofinal );
    }
    else if (cantlamparas == 4 || marca != "ArgentinaLuz" || marca != "FelipeLamparas"){
        let precio = cantlamparas * 35;
        let descuento = precio * 0.20;
        preciofinal = precio - descuento;
        alert("descuento 20 %  - el precio es de:  $ " + preciofinal );
    }
    
    


 
}
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
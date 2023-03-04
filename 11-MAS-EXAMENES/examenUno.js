/*
Desarrollar y probar el código en Entrada y salida Ej 1:

1- Un local de computación que se especializa en venta de insumos importados desea calcular ciertas métricas en base a las ventas de sus productos.

Se ingresa de cada venta: (Ingresa mínimo 6 ventas)
-Nombre del producto.
-Género: (Memorias – Discos – Motherboards)
-Tipo de Venta: (Online – Local)
-Importe: (No pueden ser números negativos ni mayor a los $45500)


Se pide:
A- La más barata de las “Motherboards” con su importe .
B- De la venta más cara, el nombre del producto.
C- El importe promedio del total.
D- La cantidad de ventas online que sean de “Discos” y cuesten menos de $945.

*/


function comenzar()
{
    
	let i;
    let mensaje;
    let tipoVenta;
    let nombreProducto;
    let flag = 0;
    let minimoImporte;
    let nombreMinimoImporte;
    let generoProducto;
    let importeProducto;
    let acumuladorImporte = 0;
    let contadorDiscos=0;
    let promedioImporte;
    let flagMasCara = 0;
    let maxImporte;
    let nombreMaxImporte;

	for (i = 0; i < 6; i++) {

        do
        {
            nombreProducto = prompt("Ingrese nombreProducto").toLowerCase();
        }while(!isNaN(nombreProducto));

        do
        {
            generoProducto = prompt("Ingrese generoProducto Memorias – Discos – Motherboards").toLowerCase();
        }while(generoProducto != "memorias" && generoProducto != "discos" && generoProducto != "motherboards");

        do
        {
            tipoVenta = prompt("Ingrese tipoVenta(Online – Local)").toLowerCase();
        }while(tipoVenta != "online" && tipoVenta != "local");

        do
        {
            importeProducto = prompt("Ingrese importeProducto No pueden ser números negativos ni mayor a los $45500)");
            importeProducto = parseInt(importeProducto);
        }while(isNaN(importeProducto) || importeProducto < 0 || importeProducto >45500);
        
        //A- La más barata de las “Motherboards” con su importe .
        if(generoProducto=="motherboards")
        {
            if(flag == 0 || importeProducto < minimoImporte)
            {
                minimoImporte = importeProducto;
                nombreMinimoImporte = nombreProducto;
                flag = 1;
            }
        }
        else
        {
            if(generoProducto == "discos")
            {
                if(importeProducto < 945)
                {
                    contadorDiscos++;
                }
            }
        }
        // B- De la venta más cara, el nombre del producto.
        
        if(flagMasCara == 0 || importeProducto > maxImporte)
        {
            maxImporte = importeProducto;
            nombreMaxImporte = nombreProducto;
            flagMasCara = 1;
        }
        //C- El importe promedio del total.
        acumuladorImporte += importeProducto;
	}
	//**************************************** */
    //C
    if(acumuladorImporte ===0)
    {
        promedioImporte= "nose puede sacar el promedio";
    }
    else
    {
        promedioImporte = acumuladorImporte / i;
    }
	//muestro
	mensaje = "\n A- La más barata de las “Motherboards” con su importe . " + nombreMinimoImporte;
	mensaje += "\n B- De la venta más cara, el nombre del producto. " + nombreMaxImporte;
	mensaje += "\n C- Importe promedio total es " + promedioImporte;
	mensaje += "\n D- La cantidad de ventas online que sean de “Discos” y cuesten menos de $945 es de : " + contadorDiscos;
	
	alert(mensaje);

}
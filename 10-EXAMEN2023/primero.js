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
    let continua;
	let mensaje;
    let nombreProducto;
    let flag = 0;
    let maxImporte;
    let nombreMasImporte;
    let primerIngreso = 0;
    let menorImporte;
    let nombreMenorImporte;
    let genero;
    let importe;
    let tipoVenta;
    let promedioImporte;
    let acumuladorImporte =0;
    let contadorImporte=0;
    let contadorDiscos=0;
    

	
	do
	{
        do
        {
            nombreProducto = prompt("Ingrese nombreProducto").toLowerCase();
        }while(!isNaN(nombreProducto));

        do
        {
            genero = prompt("Ingrese genero : discos - memorias -motherboards ").toLowerCase();
        }while(genero != "memorias" && genero != "discos" && genero != "motherboards");

        do
        {
            tipoVenta = prompt("Ingrese tipoVenta: online - local ").toLowerCase();
        }while(tipoVenta != "online" && tipoVenta != "local" );

        do
        {
            importe = prompt("Ingrese importe");
            importe = parseFloat(importe);
        }while(importe < 0 || importe > 45500);

        //a
        if(primerIngreso == 0 || importe < menorImporte)
        {
            menorImporte = importe;
            nombreMenorImporte = nombreProducto;
            primerIngreso = 1;
        }
       //b 
        if(flag == 0 || importe > maxImporte)
        {
            maxImporte = importe;
            nombreMasImporte = nombreProducto;
            flag = 1;
        }
        //c
        acumuladorImporte += importe;
        contadorImporte++;
        //d
        if(genero=="discos")
        {
            if(importe < 944)
            {
                contadorDiscos++;
            }
        }
		
		continua = confirm("Quieres continuar?");
	}while(continua);
	//**************************************** */
    promedioImporte = acumuladorImporte / contadorImporte;
   
	//muestro
	mensaje = "\n A- La más barata de las “Motherboards” con su importe  " + nombreMasImporte;
	mensaje += "\n B- De la venta más cara, el nombre del producto. " + nombreMenorImporte;
	mensaje += "\n C- El importe promedio del total." + promedioImporte;
	mensaje += "\n D- La cantidad de ventas online que sean de “Discos” y cuesten menos de $945 es de : " + contadorDiscos;
	
	alert(mensaje);
}
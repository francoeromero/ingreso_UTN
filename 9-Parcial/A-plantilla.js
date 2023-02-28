/*

Porcentaje = (suma de manzanas(acumulador) / total ingresados (contador)) * 100
if(acumulador === 0)
{
	No se puede dividir por cero;
}


Promedio = suma de algo (acumulador)/ contador

if(suma de algo === 0)
{
	Nose puede dividir por cero;
}

flag se usa:
	cuando paso la primera vez o una sola vez 
	para saber los max y min  

*/
	/******************************************************** */
	/*WHILE INFINITO*/
	/******************************************************** */
	var continua;
	var mensaje;
	var a;
	var a;
	var a;
	var a;
	var a;
	var a;
	var a;
	var a;
	do
	{
		
		continua = confirm("Quieres continuar?");
	}while(continua);
	//calculo o comparacion 
	//muestro
	mensaje = "\n " + a;
	mensaje += "\n " + a;
	mensaje += "\n " + a;
	mensaje += "\n " + a;
	mensaje += "\n " + a;
	mensaje += "\n " + a;
	mensaje += "\n " + a;
	mensaje += "\n " + a;
	alert(mensaje);
	
	/******************************************************** */
	/*FOR LIMITES*/
	/******************************************************** */
	var i;
	for (i = 0; i < 5; i++) {

	}
	/******************************************************** */
	/*CADENAS */
	/******************************************************** */
	do
	{
		01 = prompt("Ingrese 01").toLowerCase();
	}while(01 != "a" && 01 != "a" && 01 != "a");
	
	do
	{
		02 = prompt("Ingrese 02").toLowerCase();
	}while(!isNaN(02));

	do
	{
		03 = prompt("Ingrese 02").toLowerCase();
	}while(!isNaN(03) || (03 != "a" && 03 != "a"));
	/******************************************************** */
	/*NUMEROS */
	/******************************************************** */
	do
	{
		04 = prompt("Ingrese 04");
		04 = parseInt(04);
	}while(isNaN(04) && 04 < 0);
	
	do
	{
		05 = prompt("Ingrese 05");
		05 = parseFloat(05);
	}while(05 < 10 || 05 > 100);

	do
	{
		06 = prompt("Ingrese 06");
		06 = parseFloat(06);
	}while(isNaN(06) && (06 < 10 || 06 > 100));
	/******************************************************** */
	/*FLAG 
	001 = flag 
	002 = maximo o minimo 
	003 = dato ingresado 
	004 = variable resultado de lo que me pide
	005 = otro dato ingresado que pide para almacenarlo al 004*/
	/******************************************************** */
	if(001 == 0)
	{
		002 = 003;
		001 = 1;
		004 = 005;
	}
	else
	{
		if(003 > 002)
		{
			002 = 003;
			004 = 005;
		}
	}
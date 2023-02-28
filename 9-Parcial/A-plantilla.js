/*

PORCENTAJE:

CABA(kg)________________100%
pesoAcumulado(kg)_______x %
Porcentaje = (suma de manzanas(acumulador) / total ingresados (contador)) * 100
porcentaje = pesoAvellaneda * 100 / AVELLANEDA 


********************************

if(acumulador o contador > 0)
{
	//aca calculo el promedio
	 promedio = (suma de los términos) / (número de términos);
}
else
{
	promedio = 0;
	mensaje = "No se puede calcular";
}
******************************

ingreso neto = ingreso bruto - (ingreso neto * 0.21)


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
	let continua;
	let mensaje;
	
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
	let i;
	for (i = 0; i < 5; i++) {

	}
	/******************************************************** */
	/*CADENAS */
	/******************************************************** */
	let 01;
	do
	{
		01 = prompt("Ingrese 01").toLowerCase();
	}while(01 != "a" && 01 != "a" && 01 != "a");
	
	let 02;
	do
	{
		02 = prompt("Ingrese 02").toLowerCase();
	}while(!isNaN(02));

	let 03;
	do
	{
		03 = prompt("Ingrese 02").toLowerCase();
	}while(!isNaN(03) || (03 != "a" && 03 != "a"));
	/******************************************************** */
	/*NUMEROS */
	/******************************************************** */
	let 04;
	do
	{
		04 = prompt("Ingrese 04");
		04 = parseInt(04);
	}while(isNaN(04) || 04 < 0);
	
	let 05;
	do
	{
		05 = prompt("Ingrese 05");
		05 = parseFloat(05);
	}while(05 < 10 || 05 > 100);

	let 06;
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
	let 001 = 0;
	let 002;
	let 004;
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
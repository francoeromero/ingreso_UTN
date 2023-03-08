/*
*******************************
PORCENTAJE:
*******************************
	porcentaje1 = acumuladorOcontador1 * 100 / contadorPrincipal;
    porcentaje2 = acumuladorOcontador3  * 100 / contadorPrincipal;
    porcentaje3 = aculadorOcontador2  * 100 / contadorPrincipal;


// CABA(kg)________________100%
// pesoAcumulado(kg)_______x %
// porcentaje = pesoAvellaneda * 100 / AVELLANEDA 


Porcentaje = (suma de manzanas(acumulador) / total ingresados (contador)) * 100

 //para saber cuanto es el porcentaje que acumulo
    // limitebodega (kg)_______100%
    // acumulador(kg)_________x%(porcentajeAcumulado)
    //porcentajeDisponible = 100 - porcentajeAcumulado 
   
    // para saber cuanto es el resto que queda
    // acumulador(kg)_______100%
    // limiteBodega(kg)_____x%
********************************
PROMEDIO 
********************************
//PROMEDIO

// acumuladorDeAlgo += cantidadEseAlgoIngresado; //adentro del for/while
// promedio = acumuladorDeAlgo  / contadorPrincipal; //afuerta del for/while


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
	//****************FIN DE ITERACIÓN************************ */

	//muestro
	// mensaje = "\n " + a;
	// mensaje += "\n " + a;
	// mensaje += "\n " + a;
	// mensaje += "\n " + a;
	// mensaje += "\n " + a;
	// mensaje += "\n " + a;
	// mensaje += "\n " + a;
	// mensaje += "\n " + a;
	alert(mensaje);
	

	/******************************************************** */
	/*FOR LIMITES*/
	/******************************************************** */




	let i;
	let mensaje;
	for (i = 0; i < 5; i++) {

	}
	//****************FIN DE ITERACIÓN************************ */

	//muestro
	// mensaje = "\n " + a;
	// mensaje += "\n " + a;
	// mensaje += "\n " + a;
	// mensaje += "\n " + a;
	// mensaje += "\n " + a;
	// mensaje += "\n " + a;
	// mensaje += "\n " + a;
	// mensaje += "\n " + a;
	alert(mensaje);



	
	/******************************************************** */
	/*CADENAS */
	/******************************************************** */
	let 01;
	do
	{
		01 = prompt("Ingrese 01");
		01 = 01.toLowerCase();
	}while(01 != "a" && 01 != "a" && 01 != "a");
	
	let 02;
	do
	{
		02 = prompt("Ingrese 02");
		02 = 02.toLowerCase();
	}while(!isNaN(02));

	let 03;
	do
	{
		03 = prompt("Ingrese 02");
		03 = 03.toLowerCase();
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
	/*FLAG  MAXIMO Y MINIMO 
	/******************************************************** */
	let primerIngreso = 0;
	let max;
	let min;
	let nombreMaximo;
	let nombreMinimo;
	let DatoCantidadIngresado;
	let nombreIngresado;
	if(primerIngreso == 0)
	{
		max = DatoCantidadIngresado;
		min = DatoCantidadIngresado;
		nombreMaximo = nombreIngresado;
		nombreMinimo = nombreIngresado;
		primerIngreso = 1;
	}
	else
	{
		if(DatoCantidadIngresado > max)
		{
			max = DatoCantidadIngresado;
			nombreMaximo = nombreIngresado;
		}
		else
		{
			if(numIngresado < min)
			{
				min = numIngresado;
				nombreMinimo = nombreIngresado;
			}
		}
	}
	/************************************************************** */
	/*				FLAG  MAS CORTO 
	/************************************************************** */

	let flag = 0;
	let maxOmin;
	let loQueMePide;
	if(flag == 0 || DatoUnoIngresado > maxOmin)
	{
		maxOmin = DatoUnoIngresado;
		loQueMePide = DatoDosIngresado;
		flag = 1;
	}
	
	/************************************************************** */
	/*				FLAG  MAS CORTO MINIMO Y MAXIMO
	/************************************************************** */

	let flag = true;
	let MAX;
	let MIN;
	let nombreMAX;
	let nombreMIN;
	if(flag==true)
	{
		MAX = DatoIngresadoCantidad;
		MIN = DatoIngresadoCantidad;
		nombreMAX = DatoIngresadoNombre;
		nombreMIN = DatoIngresadoNombre;
		flag = false;
	}
	else
	{
		if(DatoCantidadIngresado > MAX)
		{
			MAX = DatoCantidadIngresado;
			nombreMAX = DatoIngresadoNombre;
		}
		if(DatoCantidadIngresado < MIN)
		{
			MIN = DatoCantidadIngresado;
			nombreMIN = DatoIngresadoNombre;
		}
	}


	/************************************************************** */
	/*				CONTADOR O ACUMULADOR CON 3 VARIABLES
	/************************************************************** */
	switch(condicion){
		case "valor1":
			contador1 ++;
			acumulador1+=variable1;
			break;
		case "valor2":
			contador2 ++;
			acumulador2+=variable1;
			break;
		default:
			contador3 ++;
			acumulador3+=variable1;
			break;
	}
	/************************************************************** */
	/*				CUAL ES EL MAYOR DE LOS 3
	/************************************************************** */
	if(condicion1 > condicion2 && condicion1 > condicion3)
	{
        elQueTieneMayorCantidadEs = "condicion1";
    }else{
        if(condicion2 > condicion3 && condicion2 > condicion1)
		{
            elQueTieneMayorCantidadEs = "condicion2";
        }else{
            elQueTieneMayorCantidadEs = "condicion3";
        }
    }

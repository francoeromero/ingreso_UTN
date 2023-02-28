/*
En una carga indefinida de datos (hasta que el usuario quiera) se desea llevar a cabo el registro diario de una granja de minería en Bitcoin y Ethereum.
Se requieren los siguientes datos:

-c Nombre de la criptomoneda (VALIDAR EL INGRESO solo de BTC o ETH).
-n Cantidad de BTC o ETH minado ese día - Número positivo.
-n Cotización diaria en USD - Número positivo inclusive 0.

INFORMAR
A) Nombre y cantidad de la criptomoneda más minada.
B) Nombre de la criptomoneda que mayor cotización tuvo.
C) Cantidad total de ingreso bruto en USD de cada criptomoneda.

D) Sabiendo que el coste de electricidad para:
BTC es de un 7% y para ETH es un 4% calcular el ingreso total neto en USD.

E) Convertir el ingreso neto en ARS solo para ETH. Sabiendo que la cotización de 1 USD a ARS es de $337.
arg = 337
if()
Si el ingreso supera los 100.000 ARS calcular impuesto de AFIP del 21% e informar
"El ingreso neto por ETH es de X1 pesos y se descontó X2 pesos de AFIP".

Siendo .X1 el neto en ARS y X2 el impuesto aplicado.
*/


function mostrar()
{
	let continua;
	let mensaje;
	let nombreCripto;
	let cotizacionUsd;
	let cantidadCripto;
	let flagMasMinada = 0;
	let masMinada;
	let nombreMasMinada;
	let flagMayorCotizacion = 0;
	let mayorCotizacion;
	let nombreMayorCotizacion;
	let acumuladorUsdBtc = 0;
	let acumuladorUsdEth = 0;
	let pesosArg=337;
	let cantidadMasMinada;
	//c
	let cantidadTotalIngresosBrutosUsd;
	//d
	let ingresoNetoBtc;
	let ingresoNetoEth;
	let ingresoBrutoBtc;
	let ingresoBrutoEth;
	let pesoArg = 337;
	let impuestoUsd = 0.1;
	let impuestoArg = 0.21; 
	let descuentoImpuesto;
	let ingresoNetoTotal;
	//e
	let pesosArgBtc;
	let pesosArgEth;
	let aviso;
	let ingresoNetoArgEth;
	do
	{
		do
		{
			nombreCripto = prompt("Ingrese nombreCripto BTC o ETH").toLowerCase();
		}while(nombreCripto != "btc" && nombreCripto != "eth" );
		do
		{
			cantidadCripto = prompt("Ingrese cantidadCripto");
			cantidadCripto = parseInt(cantidadCripto);
		}while(isNaN(cantidadCripto) || cantidadCripto < 0);
		do
		{
			cotizacionUsd = prompt("Ingrese cotizacionUsd");
			cotizacionUsd = parseInt(cotizacionUsd);
		}while(isNaN(cotizacionUsd) || cotizacionUsd < 0);
		//A) Nombre y cantidad de la criptomoneda más minada.
		if(flagMasMinada == 0)
		{
			masMinada = cantidadCripto;
			flagMasMinada = 1;
			nombreMasMinada = nombreCripto;
		}
		else
		{
			if(cantidadCripto > masMinada)
			{
				masMinada = cantidadCripto;
				nombreMasMinada = nombreCripto;
			}
		}
		//B) Nombre de la criptomoneda que mayor cotización tuvo.
		if(flagMayorCotizacion == 0)
		{
			mayorCotizacion = cotizacionUsd;
			flagMayorCotizacion = 1;
			nombreMayorCotizacion = nombreCripto;
		}
		else
		{
			if(cotizacionUsd > mayorCotizacion)
			{
				mayorCotizacion = cotizacionUsd;
				nombreMayorCotizacion = nombreCripto;
			}
		}
		//C) Cantidad total de ingreso bruto en USD de cada criptomoneda.
		if(nombreCripto=="btc")
		{
			acumuladorUsdBtc+=cotizacionUsd;
			
		}
		else
		{
			acumuladorUsdEth+=cotizacionUsd;
			
		}
		
		continua = confirm("Quieres continuar?");
	}while(continua);
	
	//calculo o comparacion 
	//c
	cantidadTotalIngresosBrutosUsd = acumuladorUsdBtc + acumuladorUsdEth;
	//d
	
	//muestro
	mensaje = "\n A- Nombre y cantidad de la criptomoneda más minada." + nombreMasMinada + " y la cantidad es " + masMinada;
	mensaje += "\n B- Nombre de la criptomoneda que mayor cotización tuvo." + nombreMayorCotizacion;
	mensaje += "\n C- Cantidad total de ingreso bruto en USD de cada criptomoneda." + cantidadTotalIngresosBrutosUsd;
	
	alert(mensaje);
}










/*
segundo intento d y e
//D) Sabiendo que el coste de electricidad para:
	// BTC es de un 7% y para ETH es un 4% calcular el ingreso total neto en USD.
	
	// ingreso neto = ingreso bruto - (ingreso neto * 0.21)


	ingresoBrutoBtc = acumuladorUsdBtc;
	ingresoBrutoEth = acumuladorUsdEth;
	//e
	pesosArgBtc = ingresoBrutoBtc * pesoArg;
	pesosArgEth = ingresoBrutoEth * pesoArg;
	//fin e
	if(nombreCripto == "btc")
	{
		porcentajeElectricidad = 1.07;//7%
		ingresoBrutoBtc * porcentajeElectricidad;
	}
	else
	{
		porcentajeElectricidad = 1.04;//4%
		ingresoBrutoEth * porcentajeElectricidad;
		//e
		if(pesosArgEth > 100000)
		{
			descuentoImpuesto = ingresoBrutoEth * impuestoArg;//21%
			ingresoNetoArgEth =  ingresoBrutoEth - descuentoImpuesto;
			aviso = "/n El ingreso neto por ETH es de " +  ingresoNetoArgEth + " pesos y se desconto " + descuentoImpuesto + " pesos de AFIP";
		}
	}
	
	ingresoNetoBtc = ingresoBrutoBtc - (ingresoBrutoBtc*impuestoUsd);
	ingresoNetoEth = ingresoBrutoEth - (ingresoBrutoEth*impuestoUsd);
	ingresoNetoTotal = ingresoBrutoEth + ingresoBrutoEth;

*/



// let electricidadBtc;
// let electricidadEth;
// let ingresoTotalNeto;
// let ingresoBrutoTotal;
// electricidadBtc = acumuladorUsdBtc*0.07;
// electricidadEth = acumuladorUsdEth*0.04;
// ingresoBrutoTotal = acumuladorUsdBtc + acumuladorUsdEth;
// ingresoTotalNeto = ingresoBrutoTotal +(electricidadBtc + electricidadEth);
// ingresoNetoBtc = acumuladorUsdBtc + (acumuladorUsdBtc*porcentajeElectricidad);
// ingresoNetoEth = acumuladorUsdEth + (acumuladorUsdEth*porcentajeElectricidad);
























/*
segundo intento: (no me da el ultimo)

function mostrar()
{
	let continua;
	let flagMasMinada = 0;
	let cantidadMasMinada;
	let nombreMasMinada;
	let mensaje;
	let nombreCripto;
	let cantidadCripto;
	let cotizacionUsd;
	
	
	let acumuladorIngresosArgEth = 0;
	let acumuladorIngresosBtc=0;
	let acumuladorIngresosEth=0;
	let ingresoTotalUsd;
	let porcentajeBtc = 0.07;
	let porcentajeEth = 0.cantidadCripto;
	let electricidadBtc;
	let electricidadEth;
	let ingresosArgEth;
	let arg=337;
	let flagMayorCotizacion = 0;
	let mayorCotizacion;
	let nombreMayorCotizacion;
	let ingresoNeto;
	let porcentajeAfip = 0.21;
	let mensajeImpuesto;

	do
	{
		do
		{
			nombreCripto = prompt("Ingrese nombreCripto").toLowerCase();
		}while(nombreCripto != "btc" && nombreCripto != "eth");
		
		do
		{
			cantidadCripto = prompt("Ingrese cantidadCripto");
			cantidadCripto = parseInt(cantidadCripto);
		}while(isNaN(cantidadCripto) || cantidadCripto < 0);

		do
		{
			cotizacionUsd = prompt("Ingrese cotizacionUsd");
			cotizacionUsd = parseInt(cotizacionUsd);
		}while(isNaN(cotizacionUsd) || cotizacionUsd < 0);
		// A) Nombre y cantidad de la criptomoneda más minada.
		if(flagMasMinada == 0)
		{
			cantidadMasMinada = cantidadCripto;
			flagMasMinada = 1;
			nombreMasMinada = nombreCripto;
		}
		else
		{
			if(cantidadCripto > cantidadMasMinada)
			{
				cantidadMasMinada = cantidadCripto;
				nombreMasMinada = nombreCripto;
			}
		}
		// B) Nombre de la criptomoneda que mayor cotización tuvo.
		if(flagMayorCotizacion == 0)
		{
			mayorCotizacion = cotizacionUsd;
			flagMayorCotizacion = 1;
			nombreMayorCotizacion = nombreCripto;
		}
		else
		{
			if(cotizacionUsd > mayorCotizacion)
			{
				mayorCotizacion = cotizacionUsd;
				nombreMayorCotizacion = nombreCripto;
			}
		}



		// if(flag == 0)
		// {
		// 	masMinada = cantidadCripto;
		// 	nombreMasMinada = nombreCripto;
		// 	nombreMayorCotizacion = nombreCripto;
		// 	flag = 1;
		// }
		// else
		// {
		// 	if(cantidadCripto > masMinada)
		// 	{
		// 		masMinada = cantidadCripto;
		// 		nombreMasMinada = nombreCripto;
		// 	}
		// 	else
		// 	{
		// 		if(cotizacionUsd > MayorCotizacion)
		// 		{
		// 			MayorCotizacion = cotizacionUsd;
		// 			nombreMayorCotizacion = nombreCripto;
		// 		}
		// 	}
		// }
		// C) Cantidad total de ingreso bruto en USD de cada criptomoneda
		if(nombreCripto == "btc")
		{
			acumuladorIngresosBtc += cotizacionUsd;
		}
		/*
		
E) Convertir el ingreso neto en ARS solo para ETH. Sabiendo que la cotización de 1 USD a ARS es de $337.
arg = 337
if()
Si el ingreso supera los 100.000 ARS calcular impuesto de AFIP del 21% e informar
"El ingreso neto por ETH es de X1 pesos y se descontó X2 pesos de AFIP".
		*/
	// 	else
	// 	{
	// 		acumuladorIngresosEth += cotizacionUsd;
	// 		ingresosArgEth = cotizacionUsd * arg;
	// 		acumuladorIngresosArgEth+=ingresosArgEth;
	// 	}
		
	// 	continua = confirm("Quieres continuar?");
	// }while(continua);
	//calculo o comparacion 
	// D) Sabiendo que el coste de electricidad para:
	// BTC es de un 7% y para ETH es un 4% calcular el ingreso total neto en USD.
	// cripto 				electricidad			bruto 			neto 					ingreso total
	//  btc						7%				cotizacion * 0.07      cotizacion + 0.21	+ cotizacion
	//	eth						4%				cotizacion *0.cantidadCripto 	   cotizacion + 0.21	+ cotizacion
// 	if(nombreCripto == btc)
// 	{
// 		let porcentajeElectricidad;
// 		porcetajeElectricidad = 0.7;
// 	}
// 	else
// 	{
// 		porcentajeElectricidad = 0.4;
// 	}
// 	let brutoElectricidad;
// 	brutoElectricidad = porcentajeElectricidad * cotizacionUsd;
// 	let netoTotalElectricidad;
// 	let neto = cotizacionUsd * 0.21;
// 	netoTotalElectricidad = brutoElectricidad - neto; 

// 	electricidadBtc = porcentajeBtc * acumuladorIngresosBtc;
// 	electricidadEth = porcentajeEth * acumuladorIngresosEth ;
// 	ingresoTotalUsd = (electricidadBtc)+(electricidadEth);

// 	if(acumuladorIngresosArgEth > 100000)
// 	{
// 		ingresoNeto = acumuladorIngresosArgEth + (acumuladorIngresosArgEth * porcentajeAfip);
// 		mensajeImpuesto = "\n El ingreso neto por ETH es de "+acumuladorIngresosArgEth + " pesos y se descontó "+ ingresoNeto +" pesos de AFIP";
// 	}
// 	//muestro
// 	mensaje = "\n A -Nombre y cantidad de la criptomoneda más minada " + nombreMasMinada + " " +cantidadMasMinada;
// 	mensaje += "\n B -Nombre de la criptomoneda que mayor cotización tuvo. " + nombreMayorCotizacion ;
// 	mensaje += "\n C -Cantidad total de ingreso bruto en USD de btc " + acumuladorIngresosBtc;
// 	mensaje += "\n C-Cantidad total de ingreso bruto en USD de eth " + acumuladorIngresosEth;
// 	mensaje += "\n D-ingreso total neto en USD electricidad " + ingresoTotalUsd;
// 	mensaje += "\n E-ingreso neto en pesos argentinos de ETH" + ingresoNeto + " " + mensajeImpuesto;
	
// 	alert(mensaje);
// }

/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/

/*

//Declaro una variable
	let nombreIngresado;

	// asigno el valor que ingrese el usuario de la entrada a la variable nombreIngresado
	nombreIngresado = document.getElementById("txtIdNombre").value;

	//muestro el dato concatenando con un string
	alert("Bienvenido "+nombreIngresado);
	//limpio la entrada para que usarse nuevamente
	document.getElementById("txtIdNombre").value = "";
APUNTES:
renombramos el id de un elemento de html y terminamos con .value

el id de un elemento input 

Codigo ASCII : Una forma de escribir letras en binario

Codigo de standard americano para intercambio de informacion

y lo que hace es asociar un numero a un caracter

string "1" number 1 (no confundir)

Si yo quiero capturar la informacion que el usuario coloca en un input de html, tengo que ir al JS y hacer esto:

1- Creamos una variable (estamos pidiendo un espacio de memoria)
2- asignamos el valor que se coloque llamando al id del input y poniendo ".value"
3- Ese valor tiene que meterse en el espacio de memoria que creamos que seria la variable entonces ponemos variable = infoinput.value; 

Profe:

Como hago para asignar una variable algo que esta escrito en otro archivo?

cuando ponemos "document." te va a aparecer muchas elecciones que podemos hacer con el documento de html vinculado con js 

"document.getElementById" : Tomar un elemento por su identificador. Con esto toma el id de un elemento html por ejemplo el input y agarra el valor de lo que el usuario coloque 

1- Creamo una variable (espacio de memoria)
2- asignamos ala variable un valor
3- llamamos al nombre del id del elemento html document.getElementById("nombredelID")
4- Cuando agregamos un punto podemos crear mas cosas, me va a aparecer diferentes elecciones que puedo hacer con el input.
Pero que es lo que necesito? es el valor que van a escribir adentro del input entonces agrego
.value
quedaria asi:

document.getElementById("nombredelID").value;

5- Ahora llamamos ala variable con un alert para mostrar el valor 

function(mostrar) {
	let nombre;
	nombre = document.getElementById("nombreID").value;
	alert(nombre);
}

Otra alternativa:

let nombre;
nombre = nombreID.value;
aler(nombre);

Otra casa:

si agregamos: document.getElementById("txtIdNombre").value = "";

asignamos una cadena vacia para que se borre lo que esta escrito para volverse a usar

*/

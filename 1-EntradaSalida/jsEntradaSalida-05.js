/*
3. Se debe llevar a cabo el registro de ingresos a un parque de diversiones.  Dicho parque se caracteriza por su variedad de montañas rusas. Se pide el ingreso del 

nombre del visitante,
 la edad (mayores a 12 años), 
 tipo de pasaporte (sin pasaporte, convencional, premium), 
 tipo de montaña rusa (Fantasma, Acuática, Adrenalina100%). 
 
 
 Tener en cuenta:
El valor de acceso a todas las montañas rusas es de $500.

Los visitantes sin pasaporte, abonan al momento de subir al juego. if
Los visitantes con pasaporte convencional, abonan el 30% del valor de la entrada.
Los visitantes con pasaporte premium, no abonan nada.
Se necesita saber: 


La recaudación en efectivo por las tres montañas rusas.
Porcentaje de visitantes que se subieron a cada montaña rusa.
Cuál es el tipo de pasaporte que mas se utilizo (incluyendo los visitantes sin pasaporte)

*/


function mostrar()
{
	let continua;
	let mensaje;
	let edad;
	let nombre;
	let tipoPasaporte;
	let tipoMontañaRusa;
	let contadorConvencional = 0;
	let precio = 500;
	let convencional = 1.3;
	let totalPagar;
	let acumuladorRecaudacion = 0;
	let totalRecaudacion;
	let contadorAcuatica = 0;
	let contadorPremium = 0;
	let contadorAdrenalina = 0;
	let contadorFantasma = 0;
	let contadorIngresadosTotales = 0;
	let contadorSinPasaporte = 0;
	let ;
	do
	{
		do
		{
			nombre = prompt("Ingrese nombre").toLowerCase();
		}while(!isNaN(nombre));
		do
		{
			edad = prompt("Ingrese edad");
			edad = parseInt(edad);
		}while(isNaN(edad) || edad > 11);
		do
		{
			tipoPasaporte = prompt("Ingrese tipoPasaporte").toLowerCase();
		}while(tipoPasaporte != "sin pasaporte" && tipoPasaporte != "convencional" && tipoPasaporte != "premium");

		do
		{
			tipoMontañaRusa = prompt("Ingrese tipoMontañaRusa").toLowerCase();
		}while(tipoMontañaRusa != "fantasma" && tipoMontañaRusa != "acuatica" && tipoMontañaRusa != "adrenalina");
		/********************************* */
		if(tipoPasaporte == "sin pasaporte")
		{
			totalPagar = precio;
			contadorSinPasaporte++;
		}
		else
		{
			if(tipoPasaporte == "convencional")
			{
				totalPagar = precio * convencional;
				contadorConvencional++;
			}
			else
			{
				totalPagar = 0;
				mensajePremium = "No abonas nada";
				contadorPremium++;
			}
		}
		//a
		acumuladorRecaudacion += totalPagar;
		///b
		if(tipoMontañaRusa == "acuatica")
		{
			contadorAcuatica++;
		}
		else
		{
			if(tipoMontañaRusa == "adrenalina")
			{
				contadorAdrenalina++;
			}
			else
			{
				contadorFantasma++;
			}
		}
		contadorIngresadosTotales++
	
		continua = confirm("Quieres continuar?");
	}while(continua);
	//calculo o comparacion 
	totalRecaudacion = acumuladorRecaudacion;

	
	
	
// cantidadvisi total(kg)________________100%
// visitantesingres(kg)_______x %

if(contadorAcuatica > 0)
{
	porcentajeAcuatica = contadorAcuatica *100 / contadorIngresadosTotales;
}
else
{
	mensaje = "\n nadie ingreso en la Acuatica";
}
if(contadorAdrenalina > 0)
{
	porcentajeAdrenalina = contadorAdrenalina *100 / contadorIngresadosTotales;
}
else
{
	mensaje = "\n nadie ingreso en la Adrenalina";
}
if(contadorFantasma > 0)
{
	porcentajeFantasma = contadorFantasma *100 / contadorIngresadosTotales;
}
else
{
	mensaje = "\n nadie ingreso en Fantasma";
}


	
	
}













































/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
// ej.: "Usted se llama José y tiene 66 años" 	*/
// function mostrar()
// {	
// 	//pido espacio de memoria 
// 	let nombre;
// 	let edad;
// 	//asigno los valores de los elemento html a las variables 
// 	nombre = document.getElementById("txtIdNombre").value;
// 	edad = document.getElementById("txtIdEdad").value;
// 	//concateno las variable con strings para mostrarlos en una alerta
// 	alert(`Usted se llama ${nombre} \n y su edad es ${edad}`);
// 	//Limpio las entradas para usarse de nuevo
// 	document.getElementById("txtIdNombre").value = "";
// 	document.getElementById("txtIdEdad").value = "";
// }



// let mensaje;
// mensaje = "Usted se llama";
// mensaje = mensaje + nombre;
// mensaje = " y tiene ";
// mensaje = mensaje + edad;
// mensaje = mensaje + " años";
// /*
// APUNTES:
// Que es lo que tenemos que lo primero? 
// 1-Conseguir espacio de memoria osea crear variable
// 2-Copiar lo que escribio el usuario en los input
// 3-Pegar los datos y que se muestre en la alerta

// // back tik: ´´

// otra opcion:

// alert("Usted se llama $(nombre) y tiene $(edad) de años");

// document = html documento
// getelementbyid = nos interesa los ID de los html
// ("") = especificamente este id
// .value = me interesa el valor que escribio en ese campo de entrada 
// */
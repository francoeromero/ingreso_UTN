/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	//reservo espacio de memoria declarando variables
	let importeIngresado;
	let descuento;
	const PORCENTAJE = 0.25;
	let nuevoImporte;
	//  asigno el campo de entrada ala variable 
	importeIngresado = document.getElementById("txtIdImporte").value;
	//lo convierto en decimales porque el importe es algo financiero  
	importe = parseFloat(importeIngresado);
	//hago la operación 
	descuento = importe * PORCENTAJE;
	nuevoImporte = importe - descuento;
	//asigno el nuevo importe a la segunda entrada 
	document.getElementById("txtIdResultado").value = nuevoImporte;
}

/*
APUNTES: 




*/
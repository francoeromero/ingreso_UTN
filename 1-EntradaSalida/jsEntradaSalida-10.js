/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	//reservo espacio de memoria
	let importe;
	let descuento;
	let nuevoimporte;
	//transformo el importe en valor number de la entrada txtidimporte
	importe = parseInt(document.getElementById("txtIdImporte").value);
	//operacion
	descuento = .25 * importe;
	nuevoimporte = importe - descuento;
	//luego muestro en pantalla el resultado
	document.getElementById("txtIdResultado").value = nuevoimporte;

}

/*
APUNTES: 




*/
function mostrar()
{
	//tomo el mes
	let mes = document.getElementById("txtIdMes").value; // var mesDelAño =txtIdMes.value;
	
	switch (mes){
		case "Marzo" :
			alert("Abrigate que hace frio");
		break;

		case "Mayo" :
			alert("Falta para el invierno");
		break;

		case "Septiembre" :
			alert("Ya pasamos el frio, ahora calor!!!.");
		break;

	}
}
function mostrar()
{
	//tomo el mes
	let mes = document.getElementById("txtIdMes").value; // var mesDelAño =txtIdMes.value;
	
	switch (mes){
		case "Marzo" :
		case "Abril":
		case "Mayo" :
			alert("Falta para el invierno.");
			break;

		case "Junio":
		case "Julio":
		case "Agosto":
			alert("Abrigate que hace frio.");
			break;

		case "Septiembre" :
		case "Octubre" :
		case "Noviembre" :
		case "Diciembre" :
		case "Enero":
		case "Febrero":
			alert("Ya pasamos el frio, ahora calor!!!.");
			break;
	}
}

/*
Aca aprendemos a que podemos dar agrupar case para una sola instruccion 



*/
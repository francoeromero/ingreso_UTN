function mostrar()
{
	//tomo el mes
	let mes = document.getElementById("txtIdMes").value; 
	let mensaje;
	
	switch (mes){
		case "Marzo" :
		case "Abril":
		case "Mayo" :
			mensaje = "Falta para el invierno.";
			break;
		case "Junio":
		case "Julio":
		case "Agosto":
			mensaje = "Abrigate que hace frio.";
			break;
		default:
			mensaje = "Ya pasamos el frio, ahora calor!!!.";
			break;
	}
	alert(mensaje);
}

/*
Aca aprendemos a que podemos dar agrupar case para una sola instruccion 



*/
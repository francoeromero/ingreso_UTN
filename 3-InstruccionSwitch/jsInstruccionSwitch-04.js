function mostrar()
{
	let mes = document.getElementById("txtIdMes").value; 


	switch(mes){
		case "Enero":
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			alert("Tiene 30 dias");
			break;

		case "Febrero":
			alert("Tiene 28 dias");
			break;

		default:
			alert("Tiene 31 dias");
			break;

		// case "Marzo":
		// case "Mayo":
		// case "Julio":
		// case "Agosto":
		// case "Octubre":
		// case "Diciembre":
		// 	alert("Tiene 31 dias");
		// 	break;

	}

	// switch (mes){
	// 	case "Enero":
	// 		alert("tiene 30 días");
	// 		break;

	// 	case "Febrero":
	// 		alert("tiene 28 días");
	// 		break;

	// 	case "Marzo":
	// 		alert("tiene 31 días");
	// 		break;

	// 	case "Abril":
	// 		alert("tiene 30 días");
	// 		break;

	// 	case "Mayo":
	// 		alert("tiene 31 días");
	// 		break;

	// 	case "Junio":
	// 		alert("tiene 30 días");
	// 		break;

	// 	case "Julio":
	// 		alert("tiene 31 días");
	// 		break;

	// 	case "Agosto":
	// 		alert("tiene 31 días");
	// 		break;

	// 	case "Septiembre":
	// 		alert("tiene 30 días");
	// 		break;
			
	// 	case "Octubre":
	// 		alert("tiene 31 días");
	// 		break;

	// 	case "Noviembre":
	// 		alert("tiene 30 días");
	// 		break;

	// 	case "Diciembre":
	// 		alert("tiene 31 días");
	// 		break;
	// }
	
	



}//FIN DE LA FUNCIÓN
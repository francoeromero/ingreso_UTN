function mostrar()
{
	//declaro variables
	let mes;
	let mensaje;
	//asigno el id ala varible
	mes = document.getElementById("txtIdMes").value; 
	//valido
	switch(mes){
		case "Febrero":
			mensaje = "Tiene 28 dias";
			break;
		case "Enero":
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			mensaje ="Tiene 30 dias" ;
			break;	
		default:
			mensaje = "Tiene 31 dias";
			break;
	}
	alert(mensaje);
}	
		// case "Marzo":
		// case "Mayo":
		// case "Julio":
		// case "Agosto":
		// case "Octubre":
		// case "Diciembre":
		// 	alert("Tiene 31 dias");
		// 	break;



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
	
	



//FIN DE LA FUNCIÓN
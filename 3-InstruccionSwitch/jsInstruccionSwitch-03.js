function mostrar()
{
	//declaro variables
	let mes;
	let mensaje;
	//asigno el id ala variable
	mes = document.getElementById("txtIdMes").value; 
	//valido 
	switch(mes){
		case "Febrero":
			mensaje = "Este mes no tiene mas de 29 dias";
		break
		default:
			mensaje = "Este mes tiene mas de 30 dias";
			break;
	}
	alert(mensaje);
}


	// switch (mes){
	// 	case "Febrero" :
	// 		alert("Este mes no tiene mas de 29 dias");
	// 		break;

	// 	default: // es como el else
	// 	alert("Este mes tiene 30 o mas dias");
	// 	break;
	// }

	// if (mes == "Febrero"){
	// 	alert("Este mes no tiene mas de 29 dias");
	// }
	// else {
	// 	alert("Este mes tiene 30 o mas dias");
	// }
	

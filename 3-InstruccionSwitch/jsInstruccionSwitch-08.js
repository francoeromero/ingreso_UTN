function mostrar()
{
	let txtIdDestino = document.getElementById("txtIdDestino").value;
	
	if (txtIdDestino == "Bariloche"){
		alert("En Bariloche hace FRIO");
	}
	else if(txtIdDestino == "Cataratas"){
		alert("En Cataratas hace CALOR");
	}
	else if (txtIdDestino == "Mar del plata"){
		alert("En Mar del plata hace CALOR");
	}
	else {
		alert("En Ushuaia hace FRIO");
	}

	
	// switch (txtIdDestino) {
	// 	case "Bariloche":
	// 		alert("En Bariloche hace FRIO");
	// 		break;
	// 	case "Cataratas":
	// 		alert("En Cataratas hace CALOR");
	// 		break;
	// 	case "Mar del plata":
	// 		alert("En Mar del plata hace CALOR");
	// 		break;
	// 	case "Ushuaia":
	// 		alert("En Ushuaia hace FRIO");
	// 		break;
	// }
}
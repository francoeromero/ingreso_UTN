function mostrar()
{
	let estacion = document.getElementById("txtIdEstacion").value;
	let destino = document.getElementById("txtIdDestino").value;

	// Invierno
	if(estacion == "Invierno" && destino == "Bariloche"){
		alert("En Bariloche hay un aumento del 20% ");
	}
	else if (estacion == "Invierno" && (destino == "Cataratas" || destino == "Cordoba") ){
		alert("En Cataratas o Cordoba hay un aumento del 10%");
	}
	else if (estacion == "Invierno" && destino == "Mar del plata"){
		alert("En Mar del plata hay un descuento del 20%");
	}

	//Verano
	else if(estacion == "Verano" && destino == "Bariloche" ){
		alert("En Bariloche hay un descuento del 20%");
	}
	else if (estacion == "Verano" && (destino == "Cataratas" || destino == "Cordoba")){
		alert("En Cataratas y Cordoba hay un descuento del 10%")
	}
	else if(estacion == "Verano" && destino == "Mar del plata"){
		alert("En Mar del plata hay un aumento del 20%");
	}

	//Otoño y Primavera
	else if((estacion == "Otoño" || estacion == "Primavera") && (destino == "Cataratas" || destino == "Mar del plata")){
		alert("En Cataratas y Mar del plata tiene un aumento del 10%");
	}
	else {
		alert("Cordoba tiene el precio sin descuento");
	}



	
	// switch (txtIdEstacion){
	// 	case "Invierno":
	// 		alert("");
	// 		break;

	// 	case "Verano":
	// 		alert("");
	// 		break;

	// 	case "Otoño":
	// 		alert("");
	// 		break;

	// 	case "Primavera":
	// 		alert("");
	// 		break;
	// }

	// switch(txtIdDestino){
	// 	case "Bariloche":
	// 		alert("");
	// 		break;

	// 	case "Cataratas":
	// 		alert("");
	// 		break;

	// 	case "Mar del plata":
	// 		alert("");
	// 		break;

	// 	case "Cordoba":
	// 		alert("");
	// 		break;
	// }


}
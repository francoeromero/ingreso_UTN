function mostrar()
{
	const PRECIO = 15000;
	let preciofinal;

	let estacion = document.getElementById("txtIdEstacion").value;
	let destino = document.getElementById("txtIdDestino").value;

	// Invierno
	if(estacion == "Invierno" && destino == "Bariloche"){
		preciofinal = (PRECIO * 0.2) + PRECIO;
		alert("El precio es " + preciofinal + " con su aumento del 20% Bariloche");
	}
	else if (estacion == "Invierno" && (destino == "Cataratas" || destino == "Cordoba") ){
		preciofinal = (PRECIO * 0.1) + PRECIO;
		alert("El precio es " + preciofinal + " con su aumento del 10% Cataratas Cordoba");
	}
	else if (estacion == "Invierno" && destino == "Mar del plata"){
		preciofinal = PRECIO - (PRECIO * 0.2) ;
		alert("El precio es " + preciofinal + " con su descuento del 20% incluido Mar del plata");
	}

	//Verano
	else if(estacion == "Verano" && destino == "Bariloche" ){
		preciofinal = PRECIO - (PRECIO * 0.2);
		alert("El precio es " + preciofinal + " con su descuento del 20%");
	}
	else if (estacion == "Verano" && (destino == "Cataratas" || destino == "Cordoba")){
		preciofinal = PRECIO - (PRECIO * 0.1);
		alert("El precio es " + preciofinal + " con su descuento del 10%")
	}
	else if(estacion == "Verano" && destino == "Mar del plata"){
		preciofinal = PRECIO + (PRECIO * 0.2);
		alert("El precio es " + preciofinal + " con su aumento del 20%");
	}

	//Otoño y Primavera
	else if((estacion == "Otoño" || estacion == "Primavera") && (destino == "Cataratas" || destino == "Mar del plata")){
		preciofinal = PRECIO + (PRECIO * 0.1);
		alert("El precio es " + preciofinal + " con su aumento del 10%");
	}
	else {
		alert("El precio es " + PRECIO +  " sin descuento");
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
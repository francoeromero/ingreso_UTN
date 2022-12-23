function mostrar()
{
	let Destino = document.getElementById("txtIdDestino").value;


	// if(Destino == "Bariloche"){
	// 	alert("Bariloche esta en el Oeste");
	// }
	// else if (Destino == "Cataratas"){
	// 	alert("Cataratas esta en el Norte");
	// }
	// else if (Destino == "Mar del plata"){
	// 	alert("Mar del plata esta en el Este");
	// }
	// else{
	// 	alert("Ushuaia esta en el Sur");
	// }
	
	switch (Destino) {
		case "Bariloche":
			alert("Bariloche esta en el Oeste");
			break;
		case "Cataratas":
			alert("Cataratas esta en el Norte");
			break;
		case "Mar del plata":
		alert("Mar del plata esta en el Este");
		break;
		case "Ushuaia":
			alert("Ushuaia esta en el Sur");
			break;
	}

}
function mostrar()
{
	let txtIdDestino = document.getElementById("txtIdDestino").value;
	
	switch (txtIdDestino) {
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
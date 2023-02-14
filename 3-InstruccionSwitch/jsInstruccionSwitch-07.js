function mostrar()
{
	let destino;
	let mensaje;
	destino = document.getElementById("txtIdDestino").value;
	switch (destino) 
	{
		case "Bariloche":
			mensaje = "Bariloche esta en el Oeste";
			break;
		case "Cataratas":
			mensaje = "Cataratas esta en el Norte";
			break;
		case "Mar del plata":
			mensaje = "Mar del plata esta en el Este";
			break;
		default:
			mensaje = "Ushuaia esta en el Sur";
			break;
	}
	alert(mensaje);
}







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
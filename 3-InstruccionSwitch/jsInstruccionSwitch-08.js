function mostrar()
{
	let destino;
	let mensaje;
	destino = document.getElementById("txtIdDestino").value;
	switch (destino) 
	{
		case "Bariloche":
			mensaje = "En Bariloche hace FRIO";
			break;
		case "Cataratas":
			mensaje = "En Cataratas hace CALOR";
			break;
		case "Mar del plata":
			mensaje = "En Mar del plata hace CALOR" ;
			break;
		default:
			mensaje = "En Ushuaia hace FRIO";
			break;
	}
	alert(mensaje);
}
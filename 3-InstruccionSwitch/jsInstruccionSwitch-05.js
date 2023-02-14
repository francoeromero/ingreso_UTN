function mostrar()
{
	let hora;
	let mensaje;
	hora = document.getElementById("txtIdHora").value;
	hora = parseInt(hora); 
	switch (hora){
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
			mensaje = "Es de mañana.";
			break;
	}
	alert(mensaje);
}	
	// switch (hora) {
	// 	case 7 :ee
	// 	break;

	// 	case 8 :
	// 		alert("Es de mañana.");
	// 	break;

	// 	case 9 :
	// 		alert("Es de mañana.");
	// 	break;

	// 	case 10 :
	// 		alert("Es de mañana.");
	// 	break;

	// 	case 11 :
	// 		alert("Es de mañana.");
	// 	break;
	// }


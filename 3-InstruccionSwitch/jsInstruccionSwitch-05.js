function mostrar()
{
	let hora = parseInt(document.getElementById("txtIdHora").value); 
	
	switch (hora){
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
			alert("Es de mañana.");
			break;
	}
	
	// switch (hora) {
	// 	case 7 :
	// 		alert("Es de mañana.");
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

}
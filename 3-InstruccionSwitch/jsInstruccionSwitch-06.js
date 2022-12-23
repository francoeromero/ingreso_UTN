function mostrar()
{
	//tomo la hora
	let hora = parseInt(document.getElementById("txtIdHora").value);
	
	// if(){
	// 	 alert("Es de mañana.");
	// }
	// if else{
	// 	 alert("Es de tarde");
	// }
	// else {
	// 	 alert("La hora no existe");
	// }

	switch(hora) {
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
		 alert("Es de mañana.");
		break;
		case 12:
		case 13:
		case 14:
		case 15:
		case 16:
		case 17:
		case 18:
		case 19:
		 alert("Es de tarde");
		break;

		default:
			 alert("La hora no existe");
		// case 20:
		// case 21:
		// case 22:
		// case 23:
		// case 24:
		//  alert("La hora no existe");
		// break;

	}

}

/*
 
en el DEFAULT no es necesario finalizar con BREAK



*/
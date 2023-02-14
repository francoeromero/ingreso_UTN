function mostrar()
{
	//tomo la hora
	let hora;
	let mensaje;
	hora = document.getElementById("txtIdHora").value;
	hora = parseInt(hora);
	switch(hora)
	{
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
			mensaje = "Es de mañana.";
			break;
		case 20:
		case 21:
		case 22:
		case 23:
		case 24:
			mensaje = "Es de noche";
			alert();
			break;
		default:
			mensaje = "Es de tarde";
			break;
	}
	alert(mensaje);

}


// 	if(hora >= 7 && hora <= 11){
// 		 alert("Es de mañana.");
// 	}
// 	else if (hora >= 12 && hora <= 19){
// 		 alert("Es de tarde");
// 	}
// 	else if (  (hora >= 20 && hora <= 24) || (hora >= 0  &&  hora <= 6) ){
// 		 alert("Es de noche");
// 	}
// 	else {
// 		alert("La hora no existe");
// 	}
// }




		// case 20:
		// case 21:
		// case 22:
		// case 23:
		// case 24:
		//  alert("La hora no existe");
		// break;



/*
 
en el DEFAULT no es necesario finalizar con BREAK

Cuando en la condicional se usa AND y OR, EL AND se agrupa entre parentesis y luego el OR termina la operacion 

(a && b) || (a && b)
	V   ||  F  = V 



*/
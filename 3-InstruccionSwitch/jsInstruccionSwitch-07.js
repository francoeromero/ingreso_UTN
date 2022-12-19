function mostrar()
{
	let txtIdDestino = document.getElementById("txtIdDestino").value;
	
	switch (txtIdDestino) {
		case "Bariloche":
			alert("Bariloche tiene 41°09′S 71°18′O﻿ de coordenadas");
			break;
		case "Cataratas":
			alert("Cataratas tiene 25°41′43″S 54°26′12″O de coordenadas");
			break;
		case "Mar del plata":
		alert("Mar del plata tiene 38°00′S 57°33′O de coordenadas");
		break;
		case "Ushuaia":
			alert("Ushuaia tiene 54°48′58″S 68°19′25″O de coordenas");
			break;
	}

}
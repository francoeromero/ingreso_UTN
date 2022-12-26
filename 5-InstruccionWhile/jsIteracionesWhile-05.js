/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	let sexoIngresado = prompt("ingrese f ó m");
	

	
	while(sexoIngresado == "f" || sexoIngresado == "m"){
	 alert("sexo elegido");
	 sexoIngresado = prompt("vuelve a pedir otro sexo");
	}

	alert("incorrecto");


	
}


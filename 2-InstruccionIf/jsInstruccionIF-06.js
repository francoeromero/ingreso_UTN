function mostrar()
{
	//pido espacio de memoria 

	let edad;

	//asigno al id input
	edad = parseInt(document.getElementById("txtIdEdad").value);

	//hago las sentencias
	if (edad >= 18){
		alert("mayor de edad");
	} else if (edad >= 13 && edad <= 17){
		alert("Adolescente");
	} else if (edad <= 13){
		alert("niño");
	}



}//FIN DE LA FUNCIÓN
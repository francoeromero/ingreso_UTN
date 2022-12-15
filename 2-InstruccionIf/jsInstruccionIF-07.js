function mostrar()
{
	//pedimos espacio de memoria para las variables
	let edad;
	let estadocivil;

	edad = parseInt(document.getElementById("txtIdEdad").value);
	estadocivil = document.getElementById("estadoCivil").value;

	if(edad < 18 || estadocivil == value("casado") || estadocivil == value("divorciado") ){
		alert("Es muy pequeño para NO ser soltero");

	} else if (estadocivil == value("soltero")) {
		alert("Usted es mayor de edad");
	}
	


}//FIN DE LA FUNCIÓN
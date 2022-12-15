function mostrar()
{
	//pido espacio de memoria
	let edad;

	//asigno al input
	edad = parseInt(document.getElementById("txtIdEdad").value);

	//condicional 
	if (edad >= 18){
		alert("Usted No es adolescente");
	} else {
		alert("Usted es adolescente");
	}
}
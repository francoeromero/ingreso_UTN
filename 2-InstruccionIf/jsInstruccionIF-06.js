function mostrar()
{
	//pido espacio de memoria 

	let edad;

	//asigno al id input
	edad = parseInt(document.getElementById("txtIdEdad").value);

	//hago las sentencias
	if(edad >= 13 && edad <= 17){
		alert("Adolescente");
	}
	if(edad > 17){
		alert("Adulto");
	}
	if(edad <13){
		alert("Niño");
	} 
}

/*

1- mayor de edad
2- adolescente
3- niño

primera solucion: 
if (edad >= 18){
		alert("mayor de edad");
	} else if (edad >= 13 && edad <= 17){
		alert("Adolescente");
	} else if (edad <= 13){
		alert("niño");
	}

segunda solucion:

if(edad >= 13 && edad <= 17){
		alert("Adolescente");
	}
if(edad > 17){
		alert("Adulto");
	}
if(edad <13){
		alert("Niño");
	} 




*/
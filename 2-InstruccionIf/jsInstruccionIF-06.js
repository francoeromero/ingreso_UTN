function mostrar()
{
	//pido espacio de memoria 
	let edad;
	let edadIngresada;
	let mensaje;
	//asigno al id input
	edadIngresada = document.getElementById("txtIdEdad").value;
	//convierto en numeros enteros
	edad = parseInt(edadIngresada);
	//valido si el dato ingresado cumple con la siguiente condicional
	if(edad > 17 ){
		mensaje = "Usted es mayor de edad";
	}else {
		if(edad < 13){
			mensaje = "Usted es niño";
		}
		else{
			mensaje = "Usted es adolescente";
		}
	}
	alert(mensaje);
	//limpio la entrada para usarse de nuevo
	document.getElementById("txtIdEdad").value = "";
}

		// if(edad < 12){
		// alert("Usted es niño");
		// }
		// else if (edad < 18){
		// 	alert("Usted es adolescente");
		// }
		// else if (edad < 64){
		// 	alert("Usted es Adulto");
		// }	
		// else {
		// 	alert("Usted es Anciano");
		// }
	


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

tercera solucion:

if(edad >= 13 && edad <= 17){
		alert("Adolescente");
	}
	else if(edad > 17){
		alert("Adulto");
	}
	else{
		alert("Niño");
	} 
}

cuarta solucion:

if(edad >= 13 && edad <= 17){
		alert("Adolescente");
	}
	if (!  (edad >= 13 && edad <= 17)  ){
		alert("Fuera de rango");
	}


solucion del profe: 

if(edad < 13){
		alert("Es niño");
	}
		else{
				if(edad < 18){
				alert("Es adolescente");
				}
				else {
					alert("Es Adulto")
				}
			}

Lo que hizo el profe es, meter un if  y un else, dentro del else agrego un if mas y un else 

Los else no pueden ir condicional entonces dentro del else puso un if, lo que me parece mejor colocar un else if para dar condicional como la primera solucion y el else de ultima opcion para el resto. 
Lo que quiere demostrar el profe es el surgimiento de else if, que nace de ahi  por eso se unen :

if(edad < 13){
	alert("niño")
}
	else if (edad < 18){
		alert("adolescente");
	}

	else {
		alert("Adulto");
	}

*/
function mostrar()
{
	//pido espacio de memoria
	let edad;
	let edadIngresada;
	//asigno al input
	edadIngresada = document.getElementById("txtIdEdad").value;
	edad = parseInt(edadIngresada);
	//condicional 
	if (edad > 17){
		alert(`Usted tiene ${edad} y es mayor de edad`);
	} 	
	else {
		alert(`Usted tiene ${edad} y es menor de edad`);
	}
	//limpio las entradas para usarse de nuevo
	document.getElementById("txtIdEdad").value = "";
}

/*
Acordate que parseInt no existen los . o comas, si para parseFloat que son flotantes 

*/
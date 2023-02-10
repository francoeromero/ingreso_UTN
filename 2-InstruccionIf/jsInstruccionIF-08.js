function mostrar()
{
	//pedimos espacio de memoria para las variables
	let edad;
	let edadIngresada;
	let estadocivil;
	let mensaje;
	//asigno el id a la variable
	edadIngresada = document.getElementById("txtIdEdad").value;
	estadocivil = document.getElementById("estadoCivil").value;
	//convierto en numeros enteros porque son edades
	edad = parseInt(edadIngresada);
	//sentencias

	if(estadocivil == "Soltero" &&  edad >= 18){
			mensaje = "Es soltero y No es menor";
		} 
	
		alert(mensaje);


	// if(estadocivil == "Soltero"){
	// 	if(edad > 17){
	// 		mensaje = "Es soltero y No es menor";
	// 	}
	// 	else{
	// 		mensaje = "ok";
	// 	}
	// }
	// else{
	// 	mensaje = "ok";
	// }
	// alert(mensaje);







	
}

/*
Analisis del enunciado:

"menor a 18 años" y "estado civil distinto a SOLTERO"  =  NO PONER NADA
"Es soltero" "mayor a  18" =  Es soltero y no es menor

otra solucion: 


if ( !(edad < 18  && estadocivil != Soltero) ) {
	alert("Es soltero y no es menor");
}

va OR porque al poner la contraintuitiva, tiene que darme FALSE para revertir a verdadero, y el or me dara FALSO 




*/
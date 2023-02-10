function mostrar()
{
	//pedimos espacio de memoria para las variables
	let edad;
	let edadIngresada;
	let estadoCivil;
	let mensaje;
	//asigno el valor del id a la variable
	edadIngresada = document.getElementById("txtIdEdad").value;
	estadoCivil = document.getElementById("estadoCivil").value;
	//convierto en numeros enteros
	edad = parseInt(edadIngresada);
	//sentencias
	if(edad < 18){
		if(estadoCivil != "Soltero"){
			mensaje = "Es muy pequeño para NO ser soltero.";
		}
		else{
			mensaje = "Estabien es soltero y es joven";
		}
	}
	else {
		mensaje = "ok"
	}
	alert(mensaje);

}

	// if(edad < 18  && estadoCivil != "Soltero"){
	// 	alert("Es muy pequeño para NO ser soltero.");
	// }
	// else {
	// 	alert ( "ok");
	// }


/*

solucion 1:

if(estadocivil == "Casado" || estadocivil == "Divorciado" || edad <= 17){
		alert("Es muy pequeño para NO ser soltero.");
	}
	else if ( edad >= 17  && estadocivil == "Casado"){
		alert("Adulto");
	}

correccion: Al marcar estadocivil como casado y divorciado, lo que sucede que es si alguien es mayor de edad y es casado o divorciado iba a saltar la misma alerta entonces la solucion es colocar un desigual !=  

pero la pregunta si quisiera NO poner el desigual como lo haria ? 

solucion :

if(edad < 18  &&  estadocivil != "Soltero"){
		alert("Es muy pequeño para NO ser soltero.");
	}
	else {
		alert ( "ok");
	}
	

	
Analisis del enunciado:
"edad menor a 18 años" y "un estado civil DISTINTO a soltero"

edad menor a 18 años ---->  edad < 18
un estado civil DISTINTO a soltero ---- >   estadocivil != "Soltero"


if ( condicion1 + operador logico + condicion2)

*/
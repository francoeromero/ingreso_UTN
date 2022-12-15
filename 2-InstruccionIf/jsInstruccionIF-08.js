function mostrar()
{
	//pedimos espacio de memoria para las variables
	let edad;
	let estadocivil;

	edad = parseInt(document.getElementById("txtIdEdad").value);
	estadocivil = document.getElementById("estadoCivil").value;

	if(estadocivil == "Soltero" &&  edad >= 18){
		alert("Es soltero y no es menor");
	} 
	else{
		alert("NO HACER NADA"); //chiste jaja  xD
	}

	

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
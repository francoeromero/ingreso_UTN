function mostrar()
{
	//declaro variables
	let nota;
	let max;
	let min;
	let random;
	let mensaje;
	//asigno los valores limites
	max = 10;
	min = 1;
	//genero un numero random
	random = Math.random() * (max - min + 1);
	//redondeo para convertirlo en numero entero
	nota = Math.ceil(random);
	//valido el numero a que mensaje pertenece
	if(nota > 8){
		mensaje = "Excelente";
	} 
	else{
		if(nota < 4){
			mensaje = "Vamos, la proxima se puede!";
		}
		else{
			mensaje = "Aprobó";
		}
	}
	//muestro en una ventana emergente
	alert(nota + " " + mensaje);
}



	// if (nota >= 9) {
	// 	alert(`${nota} \n EXCELENTE!! `);
	// }
	// else if (nota < 4) {
	// 	alert(`${nota} \n Vamos, la proxima se puede!`);
	// }
	// else {
	// 	alert(`${nota} \n Aprobó!!`);
	// }


/*
solucion !: 


	if (nota >= 9) {
		alert("EXCELENTE " + nota);
	}
	else if (nota >= 4) {
		alert("APROBÓ " + nota);
	}
	else if (nota >= 1){
		alert("Vamos, la proxima se puede! " + nota);
	}


*/
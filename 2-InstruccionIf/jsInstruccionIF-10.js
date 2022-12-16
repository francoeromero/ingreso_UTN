function mostrar()
{
	let nota;

	nota = Math.round(Math.random() * 9 + 1);

	if (nota >= 9) {
		alert("EXCELENTE: " + nota);
	}
	else if (nota < 4) {
		alert("Vamos, la proxima se puede!: " + nota);
	}
	else {
		alert("APROBÓ: " + nota);
	}
}

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
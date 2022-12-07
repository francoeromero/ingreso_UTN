/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

	// let sueldo;
	// let resultado;

	// sueldo = parseInt(document.getElementById("txtIdSueldo").value);

	// resultado = 10 * sueldo / 100;
	
	// resultado = document.getElementById("txtIdResultado").value;
	// alert("El resultado es " + resultado);

	let sueldo;
	let resultado;
	//paso el valor a la variable sueldo y cambio de string a number
	sueldo = parseInt(document.getElementById("txtIdSueldo").value);
	//hago la operacion y lo meto en la variable aumento
	resultado =  10 * sueldo / 100;
	

	resultado = parseInt(document.getElementById("txtIdResultado").value);
	
}

/*
APUNTES:


*/
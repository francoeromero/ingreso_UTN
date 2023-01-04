/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	// var contador;
	// var respuesta;
	// var sumaPositivos;
	// var multiplicacionNegativos;
	// contador=0;
	// sumaPositivos=0;
	// multiplicacionNegativos=1;
	// respuesta='si';


	// txtIdSuma.value=sumaPositivos;
	// txtIdProducto.value=multiplicacionNegativos;
	
	let num = 0;
	let i = 0;
	let preguntar;
	let sumapositivos = 0;
	let multnegativos = 0;

	do {

		num = parseInt(prompt("Ingrese un número: "));

		if (num >= 0) {
			sumapositivos = sumapositivos + num;
		} else {
			multnegativos = multnegativos * num;
		}

		preguntar = prompt("Quieres escribir otro numero?");

		// i = i + 1;

	}while (preguntar == 's');

	document.getElementById("txtIdSuma").value = sumapositivos ;
	 document.getElementById("txtIdProducto").value = multnegativos ;

}
/*
Programa sin codigos (su estructura) : 

//	declaracion de las variables

//	debemos armar un bucle del tipo mientras el usuario quiera (do while)

// pedir los numeros ---> dentro del bucle

// analizar el signo de cada numero (si es positivo o negativo) ---> dentro del bucle

//	acumulamos el numero en el acumulador correspondiente  ---> dentro del bucle

//	mostrar los resultados ---> fuera del bucle


*/

/*
ESTRUCTURA

1 - variable numeros 
2 - variable contador 
3 - variable acumulador

while (i < numVueltas) {

	num = parseInt(prompt("ingresa un numero: "));

	acumulador = acumulador + num; (acumulo)

	contador = contador + 1  (cuento)
}

*/
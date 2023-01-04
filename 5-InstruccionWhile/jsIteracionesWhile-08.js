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

		sumapositivos = num

		preguntar = prompt("Quieres escribir otro numero?");

		i = i + 1;

	}while (preguntar == 's');

	document.getElementById("txtIdSuma").value = num ;
	// document.getElementById("txtIdProducto").value = ;

}


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
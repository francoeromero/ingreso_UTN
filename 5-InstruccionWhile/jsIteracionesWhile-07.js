
//Al presionar el botón pedir números hasta que el USUARIO QUIERA e informar la suma acumulada y el promedio.

function mostrar() {

	let preguntar; // = 's';
	let num = 0;
	let i = 0;

	do {

		//acumulo con la misma variable para que los valores anteriores no se pierda por cada bucle 
		num = num + parseInt(prompt("ingresa un numero: "));

		//con esto hago que el usuario eliga si el bucle va a dar una vuelta o no, porque la variable preguntar es igual a 'si' 
	 	preguntar = prompt("Quiere volver a ingresar otro numero?");

		//el contador es la cantidad de vueltas que se repite el bucle
		i = i + 1;
	
	} while (preguntar == 's'); //la condicional es activar el bucle si llega a ser verdadero 
	
		//saco el promedio con el acumulador num y lo divido por la cantidad de veces que se repitio el bucle
		promedio =  num / i; 

		//muestro en pantalla en los inputs
		document.getElementById("txtIdSuma").value = num;
		document.getElementById("txtIdPromedio").value = promedio;

}


/*


DO:

para no hacer como en la segunda forma de resolverlo que tenemos que crear una variable llamarla en la condicion para que sea verdadera para poder entrar al while, utilizamos el DO, lo que hace el do es se ejecuta las lineas por lo menos una vez y luego se aplica la condicion del while por eso queda en el final y SIEMPRE PONER PUNTO ; 

segunda forma de resolverlo

function mostrar() {

	let preguntar = 's';
	let num = 0;
	let i = 0;

	while (preguntar == 's'){

		//acumulo con la misma variable para que los valores anteriores no se pierda por cada bucle 
		num = num + parseInt(prompt("ingresa un numero: "));

		//con esto hago que el usuario eliga si el bucle va a dar una vuelta o no, porque la variable preguntar es igual a 'si' 
	 	preguntar = prompt("Quiere volver a ingresar otro numero?");

		//el contador es la cantidad de vueltas que se repite el bucle
		i = i + 1;
	
	}
		//saco el promedio con el acumulador num y lo divido por la cantidad de veces que se repitio el bucle
		promedio =  num / i; 

		//muestro en pantalla en los inputs
		document.getElementById("txtIdSuma").value = num;
		document.getElementById("txtIdPromedio").value = promedio;

}




*/



/*
Primera forma de resolverlo:

function mostrar() {

	let preguntar = 'si';
	let num = 0;
	let acumulador = 0;

	while (preguntar == 'si'){

		num = parseInt(prompt("ingresa un numero: "));
		acumulador = acumulador + num;
	 	preguntar = prompt("Quiere volver a ingresar otro numero?");
	
	}

		promedio =  acumulador / 5; 

		document.getElementById("txtIdSuma").value = acumulador;
		document.getElementById("txtIdPromedio").value = promedio;

}


*/





/*

ejemplo simple para aplicar al ejercicio 

function mostrar() {

	let seguir = 'si';  //variable de control del while, osea el i pero no es i 
	
	while (seguir == 'si') { // pongo el mismo valor inicial de la variable de control para que entre al while

		alert("Hola"); //instruccion 

		seguir = prompt("Quiere que lo vuelva a saludar?"); // si el usuario vuelve a poner el valor de la condicional entonces entra al bucle sino sale del bucle.
	}

	//Recordemos que while dentro es la intruccion verdadera y afuera de while seria la instruccion falsa
	alert("Entonces ya no lo saludo mas .. ");

}


*/


/*

'p' esto se representa en js como un caracter nada mas no es string 
"p" esto es un string de un caracter, una cadena que representa un solo caracter

*/

// function mostrar()
// {
// 	//primero pido espacio de memoria creando las variables de los 5 numeros, la suma y el promedio
// 	let num1;
// 	let num2;
// 	let num3;
// 	let num4;
// 	let num5;
// 	let suma;
// 	let promedio;

// 	//luego creamos un prompt para que el usuario ingrese los numeros, le damos paseint porque quiero que sean numeros enteros
// 	num1 = parseInt( prompt("Ingrese numero: "));
// 	num2 = parseInt( prompt("Ingrese numero: "));
// 	num3 = parseInt( prompt("Ingrese numero: "));
// 	num4 = parseInt( prompt("Ingrese numero: "));
// 	num5 = parseInt( prompt("Ingrese numero: "));
	
// 	//ahora hacemos el calculo de los numeros que puso el usuario
// 	suma = num1 + num2 + num3 + num4 + num5;
// 	promedio = suma / 5;
	

// 	//por ultimo arrojamos el resultado en las entradas
// 	document.getElementById("txtIdSuma").value = suma;
// 	document.getElementById("txtIdPromedio").value = promedio;

// }

/*

1- Creamos las variables (espacios de memoria)

2- pedimos al usuario que llene de informacion a esas variables

3- hacemos el calculo con la informacion que puso el usuario

4- mostramos el resultado 

*/



function mostrar() 
{
	let controlVariable = 0;
	let acumulador = 0;
	let promedio;
	let numeroIngresado;
	let num;
	
	while(controlVariable < 5)
	{
		controlVariable = controlVariable + 1;
		numeroIngresado = prompt("Ingrese un numero: ");
		num = parseInt(numeroIngresado);
		acumulador = acumulador + num;
	}
	promedio = acumulador / 5;
	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = promedio;	
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












//los numeros que agregara el usuario
	let num = 0;
	//el contador de vueltas del bucle
	let i = 0;
	//variable de memoria, almacena todos los numeros que agregó y los sumo
	let acumulador = 0;

	//finalmente sacamos el promedio
	let promedio ; 

	while( i < 5) // 5 vueltas
	{
		//pedir numero
		num = parseInt(prompt("ingresa un numero: "));

		acumulador = acumulador + num; // el acumulador es una variable de memoria para recordar el num anterior y sumarlo al que viene num + num + num ... , le suma a otra variable con un valor que puede variar

		i = i + 1; // el contador, una variable auxiliar que ayuda a controlar las repeticiones del bucle, le suma a una constante(1) siempre sera el valor que le pongas
	}

		promedio = acumulador / 5; //el promedio se pone fuera porque se calcula una sola vez el promedio

		//muestro los resultados en la pantalla 
		document.getElementById("txtIdSuma").value = acumulador;
		document.getElementById("txtIdPromedio").value = promedio;
*/


/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
// function mostrar()
// {
// 	//creamos los espacios de memoria
// 	let num = 0; // cero como valor inicial 
// 	let promedio; 
// 	let acumulador = 0; 
// 	let i = 0;
	
// 	//calculo segun los numeros que puso el usuario
	
// 	while(num < 5){  // 5 vueltas del bucle
// 		num = parseInt(prompt("Ingrese el numero : ")); // pido al usuario un valor numerico 

// 		acumulador = acumulador + num; // el acumulador acumula los valores que coloca el usuario para no ser perdidos durante el bucle

// 		i++; //contador  cuenta las veces que va girando el bucle
// 	}

// 	promedio = acumulador / 5; // y luego de las 5 vuelta, el valor del acumulador lo divido por 5 para dar un promedio

// 	//muestro el resultado en las entradas
// 	document.getElementById("txtIdSuma").value = acumulador;
// 	document.getElementById("txtIdPromedio").value = promedio;

	
// }





// //otra forma mas rapida 
// function mostrar() {
// 	let num = 0; //lo uso para guardar numeros y para acumular
// 	let i = 0; // el contador

// 	while(i < 5) {
// 		num = num + parseInt(prompt("Escriba un numero: "));
// 		i++; 
// 	}

// 	document.getElementById("txtIdSuma").value = num;
// 	document.getElementById("txtIdPromedio").value = num / 5;
// }

/*

.....
let numero;
let i = 0;

while(i < 5){
	numero = parseInt(prompt("Ingrese un numero: ")); 
	i++; 
}

Esto lo que va a suceder que cada que escriba un numero el usuario, lo va a pisar por cada vuelta que da, para evitar eso hay que guardarlo en otra variable

let numero;
let i = 0;
let acumulador = 0;

while(i < 5){
	numero = parseInt(prompt("Ingrese un numero: ")); 
	acumulador = acumulador + numero; (se guarda el numero que ingreso anterior para sumar al nuevo)
	i++; (i = i + 1)
}

Entonces hace esto: 

1- pido el numero al usuario 
2- hago el calculo que el numero del usuario que escribio se sume con el acumulador que empieza de cero
3- le sumo 1 a la variable i
4- pido de nuevo otro numero al usuario
5- 

Cual es la diferencia entre el acumulador y el contador i ? 
porq al acumulador se suma una variable = a otra variable + otra variable  
encambio el contador es una variable + un valor constante (1)



*/
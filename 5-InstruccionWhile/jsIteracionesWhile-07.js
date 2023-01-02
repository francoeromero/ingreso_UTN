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

function mostrar() {
	let num = 0;
	let i = 0;
	let acumulador = 0;
	let promedio ; 

	while( i < 3) 
	{
		num = parseInt(prompt("ingresa un numero: "));

		acumulador = acumulador + num; // el acumulador es una variable que se aparta del bucle para recordar el num anterior y sumarlo al que viene num + num + num ... 

		i++; // el contador, una variable auxiliar que ayuda a controlar las repeticiones del bucle 
	}

		promedio = acumulador / 5;

		document.getElementById("txtIdSuma").value = acumulador;
		document.getElementById("txtIdPromedio").value = promedio;

	
}

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
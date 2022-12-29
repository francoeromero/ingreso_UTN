/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	//creamos los espacios de memoria
	let num;
	let suma;
	let promedio;
	let acumulador = 0;
	let i = 0;
	
	//calculo segun los numeros que puso el usuario
	
	while(num < 5){ 
		num = parseInt(prompt("Ingrese el numero : "));

		acumulador = acumulador + num;

		i++;
	}

	promedio = acumulador / 5; // el promedio lo pongo afuera porque solo una vez se calcula el promedio

	//muestro el resultado en las entradas
	document.getElementById("txtIdSuma").value = suma;
	document.getElementById("txtIdPromedio").value = promedio;

	
}

/*
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
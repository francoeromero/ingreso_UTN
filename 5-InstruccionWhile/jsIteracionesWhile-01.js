// function promedio()
// {
// 	let numUno;
// 	let numDos;
// 	let numTres;
// 	let numCuatro;
// 	let numCinco;
// 	let numSeis;
// 	let numSiete;
// 	let numOcho;
// 	let numNueve;
// 	let numDiez;
// 	let numeroIngresado;
// 	let promedio;

// 	numUno = prompt("Ingrese numero : ");
// 	numDos = prompt("Ingrese numero : ");
// 	numTres = prompt("Ingrese numero : ");
// 	numCuatro = prompt("Ingrese numero : ");
// 	numCinco = prompt("Ingrese numero : ");
// 	numSeis = prompt("Ingrese numero : ");
// 	numSiete = prompt("Ingrese numero : ");
// 	numOcho = prompt("Ingrese numero : ");
// 	numNueve = prompt("Ingrese numero : ");
// 	numDiez = prompt("Ingrese numero : ");
// 	promedio = (numUno + numDos + numTres +numCuatro +numCinco+numSeis+numSiete +numOcho+numNueve + numDiez) / 10;
// 	alert(promedio);
// }




function mostrar()
{
	let i = 0;
	while(i < 10)
	{
		i++;
		console.log(i);
	}
	
}









// //declaro varible de control
// let controlVariable = 0;
// let numMostrar = 10;
// while(controlVariable < 10){
// 	//le hago el incremento
// 	controlVariable = controlVariable + 1;
// 	//muestro en la consola dentro del bucle para dejar el valor en cada vuelta
// 	numMostrar = numMostrar - 1;
// 	console.log(controlVariable);







/*
al presionar el botón mostrar 10 repeticiones 
con números ASCENDENTE, desde el 1 al 10.*/


// function mostrar()
// {
// 	//pido espacio de memoria
// 	let i = 1;
// 	// si 1 es menor a 10, se va a sumar 1 (i++)
// 	while(i <= 10){
// 		console.log(i)// alert(i);
// 		i ++; // i = i + 1;
// 	}
// }

//ejemplo

// function mostrar()
// {
// let i = 0; //declaracion e inicializacion de la variable de control

// while (  i  < 3  ) { // variable de control, la cantidad de repeticiones va a depender de la condicion 

// 	alert("Hola"); // instruccion verdadera del while, se repetira 3 veces, hasta que se haga falsa y sale del while

// 	//ahora la modificacion de la variable de control
// 	i = i + 1; // valor del incrmento

// 	//resumen entonces tenemos 3 valores: 
// 	//valor inicial (i=0) valor condicionales(3) y valor del incremento (i = i + 1) 
// 	//Podemos controlar y jugar con esos 3 valores 
// }
// 	alert("estoy despues del while"); // despues de las 3 vueltas sale del while y continua ejecutando las instrucciones

// }

/*


SENTENCIAS SECUENCIALES ( las intrucciones se ejecuta una debajo de la otra)

Las sentencias secuenciales son aquellas que se ejecutan en orden, una detrás de otra. Es decir, se ejecutan de manera secuencial, de la primera a la última.

SENTENCIAS CONDICIONALES (TRUE OR FALSE)(las instrucciones algunas no se ejecutan por ser v o f)

Las sentencias condicionales son aquellas que se ejecutan solo si se cumple cierta condición. Por ejemplo, una sentencia "if" (si) permite ejecutar un bloque de código solo si se cumple una determinada condición.

INSTRUCCIONES ITERATIVAS  O REPETITIVAS (BUCLE) (las instrucciones pueden volver para atras para volver a aplicar la misma instruccion)

Las sentencias iterativas, también conocidas como bucles o ciclos, permiten ejecutar un bloque de código varias veces de manera consecutiva. Por ejemplo, un bucle "for" (para) permite ejecutar un bloque de código un número determinado de veces.

RESUMEN
las sentencias secuenciales son aquellas que se ejecutan en orden una detrás de otra, las sentencias condicionales son aquellas que se ejecutan solo si se cumple una condición, y las sentencias iterativas son aquellas que permiten ejecutar un bloque de código varias veces de manera consecutiva.

estructura de if

if(condicion 1)
{
	instrucciones/sentencias 1
}
if else (condicion 2)
{
	instrucciones/sentencias 2
}
else 
{
	resto : instrucciones/sentencias 
}

estructura switch

swith (variable)
{
	case valor:
		instrucciones/sentencias 1
		break; 
}

estructura while  

la diferencia entre if y while es que While vuelve a evaluar la condicion, osea vuelve para atras, en cambio el if no vuelve para atras sino que continua leyendo las instrucciones

while(condicion) 
{
	instrucciones/sentencias
}

*/
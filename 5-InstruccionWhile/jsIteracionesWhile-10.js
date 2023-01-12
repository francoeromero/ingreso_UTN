/*
Enunciado 
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:

1-Suma de los negativos.

2-Suma de los positivos.

3-Cantidad de positivos.

4-Cantidad de negativos.

5-Cantidad de ceros.

6-Cantidad de números pares.

7-Promedio de positivos.

8-Promedios de negativos.

9-Diferencia entre positivos y negativos, (positvos-negativos). */



function mostrar(){
	
// 1 . declarar variables, meter valores en diferentes cajitas(variables) para ordenarlos a cada uno
	let numero;
	let seguir;
	//los contadores y acumuladores se inicializan con cero
	let contadorPositivos = 0; 
	let contadorNegativos = 0;
	let contadorCeros = 0;
	let contadorPares = 0;
	let acumuladorPositivos = 0;
	let acumuladorNegativos = 0;
	let promedioPositivos;
	let promedioNegativos;
	let diferencia;

// 2. generar un bucle, do while (para que el usuario ponga los numeros que quiera)
	do {
// 3. codigos dentro del bucle
// 		- pido un numero 
		numero = parseInt(prompt("Ingrese un numero: "));
// 		- que tengo que hacer con ese numero?
// 		- analizar el signo del numero y actuar en consecuencia
		if ( numero < 0){
			//negativos
			acumuladorNegativos += numero;
			contadorNegativos++;
		}
		else if (numero == 0){
			//ceros
			contadorCeros++;
		}
		else {
			//positivos
			acumuladorPositivos += numero;
			contadorPositivos++;
		}

// 		- analizar si el num es par 
		if (numero % 2 == 0){
			contadorPares++;
		}
	

		seguir = prompt("Quieres ingresar otro numero?");
	}while(seguir == 's');	

// 4. codigos despues del bucle
		//promedio
		acumuladorPositivos = acumuladorPositivos / contadorPositivos;
		promedioNegativos = acumuladorNegativos / contadorNegativos;
		diferencia = contadorPositivos - contadorNegativos;

// 		-calculos que necesita los datos conseguidos despues del bucle
		
// 5.  muestro los resultados 
		console.log("1 - Suma de los negativos: " + acumuladorNegativos);
		console.log("2 - Suma de los positivos: " + acumuladorPositivos);

		console.log("3 - Cantidad de positivos: " + contadorPositivos);
		console.log("4 - Cantidad de negativos: " + contadorNegativos);

		console.log("5 - Cantidad de ceros: " + contadorCeros);
		console.log("6 - Cantidad de pares: " + contadorPares);

		console.log("7 - Suma de los negativos: " + promedioPositivos);
		console.log("8 - Suma de los negativos: " + promedioNegativos);
		console.log("9 - Suma de los negativos: " + diferencia);
}

/*

1 . declarar variables, meter valores en diferentes cajitas(variables) para ordenarlos a cada uno

2. generar un bucle, do while (para que el usuario ponga los numeros que quiera)

3. codigos dentro del bucle
		- pido un numero 
		- que tengo que hacer con ese numero?
		- analizar el signo del numero y actuar en consecuencia
		- analizar si el num es par 
		-  
		- 
		-

4. codigos despues del bucle
		-calculos que necesita los datos conseguidos despues del bucle
		-
5.  muestro los resultados 




*/

/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	
	let numIngresado;
	let flag = 0;
	let max;
	let min;
	let preguntar;
	do
	{
		do
		{
		numIngresado = prompt("Ingrese un numero: ");
		numIngresado = parseInt(numIngresado);
		}while(isNaN(numIngresado) == true);
		
		//igualamos los valores
		if (flag == 0)
		{
			max = numIngresado;
			min = numIngresado;
			flag = 1;
		}
		else
		{
			//defino si es max  
			if(numIngresado > max)
			{
				max = numIngresado;
			}
			else
			{
				if(numIngresado < min)
				{
					min = numIngresado;
				}
			}
		}
		preguntar = prompt("quieres seguir?");
	}while(preguntar == 's');
	document.getElementById("txtIdMaximo").value = max;
	document.getElementById("txtIdMinimo").value = min;

}
















/*

















// let preguntar;
	// let num;
	// let maximo = 0;
	// let minimo = 0;

	// do {
	// 	num = prompt("Ingrese un numero: ");
		
	// 	if (num > maximo){
	// 		document.getElementById("txtIdMaximo").value = num;
			
	// 	} else {
	// 		document.getElementById("txtIdMinimo").value = num;
	// 	}

	// 	preguntar = prompt("Quieres escribir otro numero?"); 

	// }while(preguntar == 's');

estructura for :

for (valor inicial; condicion ; incremento o decremento){}

//Otra forma de resolverlo:

	//hacemos 2 codicionales lo que es flag == 0 la segunda vuelta dara falso
	// sin flag no arranca el bucle por eso es importante ponerlo y luego solo queda las dos condicionales que nos importan: num > max 
					  num < min 
do {

	if(flag == 0 || num > max){  
		max = num;
	}

	if(flag == 0 || numero < minimo){
		min = num;
		flag = 1; 
	}
	preguntar = prompt('Quieres escribir otro numero?);

}while (seguir == 's');



//INDICE
// Declaramos las variables 

let num;
let max = 0;
let min = 0;


//Decido que tipo de bucle va a ser si es do while o while

//dentro del bucle-------------

	//debe reconocer si estoy pidiendo por primera vez
	//si es asi inicializo max y min
	//caso contrario me fijo si tengo un nuevo maximo o un nuevo minimo
	//y los actualizo de ser necesario 

//despues del bucle--------------










// NO hay que inicializar a max y min por 0, porque en el if siempre dara verdadero en maximo y en minimo nunca ejecutará
	let num;
	let max; // NO se inicializa con 0
	let min; // Tampoco inicializar con 0 porque cuando utilizemos el if siempre dara verdadero en la primera instruccion 
	let preguntar;
	let flag = 0;

	do {
		num = parseInt(prompt("Escribe un numero: "));

		if (flag == 0){
			//igualamos el numero que puso el usuario, lo colocamos en max y min
			max = num; 
			min = num;
			flag = 1; // para que no vuelva a pasar por aca SOLO UNA VEZ 
		}

		if(num > max){
			max = num;
		}
		else if (num < min){
			min = num;
		}

		preguntar = prompt("Quiere escribir otro numero?");

	}while(preguntar == 's');

	document.getElementById("txtIdMaximo").value = max;
	document.getElementById("txtIdMinimo").value = min;

*/
/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	// var banderaDelPrimero;
	// var numeroIngresado;
	// var numeroMaximo;
	// var numeroMinimo;
	// var respuesta;
	// //iniciar variables
	// banderaDelPrimero="es el primero";
	// respuesta='si';
	// while(respuesta=="si")
	// {
		
	// 	respuesta=prompt("desea continuar?");
	// }
	// txtIdMaximo.value=numeroMaximo;
	// txtIdMinimmo.value=numeroMinimo;

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

	let num;
	let max;
	let min;
	let preguntar;
	let flag = 0;

	do {
		//pido numero al usuario
		num = parseInt (prompt("Ingrese el numero: "));
		//reconozco si es la primera vez que pido 
		if(flag == 0){
			//si es asi inicializo max y min
			max = num;
			min = num;
			flag = 1;
		} 

		else if(num > max){
			max = num;
		}

		else if(num < min) {
			min = num;
		}

		preguntar = prompt("Quiere escribir otro numero?");
	}while(preguntar == 's');
	
}

/*

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


*/
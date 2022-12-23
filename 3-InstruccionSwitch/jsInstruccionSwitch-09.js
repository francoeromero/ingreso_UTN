function mostrar()
{
	const PRECIO = 15000;
	let preciofinal;

	let estacion = document.getElementById("txtIdEstacion").value;
	let destino = document.getElementById("txtIdDestino").value;

	// // Invierno
	// if(estacion == "Invierno" && destino == "Bariloche"){
	// 	preciofinal = (PRECIO * 0.2) + PRECIO;
	// 	alert("El precio es " + preciofinal + " con su aumento del 20% Bariloche");
	// }
	// else if (estacion == "Invierno" && (destino == "Cataratas" || destino == "Cordoba") ){
	// 	preciofinal = (PRECIO * 0.1) + PRECIO;
	// 	alert("El precio es " + preciofinal + " con su aumento del 10% Cataratas Cordoba");
	// }
	// else if (estacion == "Invierno" && destino == "Mar del plata"){
	// 	preciofinal = PRECIO - (PRECIO * 0.2) ;
	// 	alert("El precio es " + preciofinal + " con su descuento del 20% incluido Mar del plata");
	// }

	// //Verano
	// else if(estacion == "Verano" && destino == "Bariloche" ){
	// 	preciofinal = PRECIO - (PRECIO * 0.2);
	// 	alert("El precio es " + preciofinal + " con su descuento del 20%");
	// }
	// else if (estacion == "Verano" && (destino == "Cataratas" || destino == "Cordoba")){
	// 	preciofinal = PRECIO - (PRECIO * 0.1);
	// 	alert("El precio es " + preciofinal + " con su descuento del 10%")
	// }
	// else if(estacion == "Verano" && destino == "Mar del plata"){
	// 	preciofinal = PRECIO + (PRECIO * 0.2);
	// 	alert("El precio es " + preciofinal + " con su aumento del 20%");
	// }

	// //Otoño y Primavera
	// else if((estacion == "Otoño" || estacion == "Primavera") && (destino == "Cataratas" || destino == "Mar del plata")){
	// 	preciofinal = PRECIO + (PRECIO * 0.1);
	// 	alert("El precio es " + preciofinal + " con su aumento del 10%");
	// }
	// else {
	// 	alert("El precio es " + PRECIO +  " sin descuento");
	// }

/* correccion: esta bien, otra forma hubiera sido poner las variables descuento y aumento como variables y darles el valor 0
	let descuento = 0;
	let aumento = 0;
*/

	switch(estacion){
		case "Invierno":
			if(destino == "Bariloche"){
				preciofinal = (PRECIO * 0.2) + PRECIO;
				alert("El precio es " + preciofinal + " con su aumento del 20% Bariloche SWITCH");
			} 
			else if (destino == "Cataratas" || destino == "Cordoba"){
				preciofinal = (PRECIO * 0.1) + PRECIO;
				alert("El precio es " + preciofinal + " con su aumento del 10% Cataratas Cordoba  SWITCH");
			}
			else {
				preciofinal = PRECIO - (PRECIO * 0.2) ;
				alert("El precio es " + preciofinal + " con su descuento del 20% incluido Mar del plata  SWITCH");
			}
		break;

		case "Verano":
			if(destino == "Bariloche"){
				preciofinal = PRECIO - (PRECIO * 0.2);
				alert("El precio es " + preciofinal + " con su descuento del 20%  SWITCH");
			}
			else if (destino == "Cataratas" || destino == "Cordoba"){
				preciofinal = PRECIO - (PRECIO * 0.1);
				alert("El precio es " + preciofinal + " con su descuento del 10%  SWITCH")
			}
			else{
				preciofinal = PRECIO + (PRECIO * 0.2);
				alert("El precio es " + preciofinal + " con su aumento del 20%  SWITCH");
			}

		break;

		case "Otoño":
		case "Primavera":
			if(destino == "Cataratas" || destino == "Mar del plata"){
				preciofinal = PRECIO + (PRECIO * 0.1);
				alert("El precio es " + preciofinal + " con su aumento del 10%  SWITCH");
			}
			else {
				alert("El precio es " + PRECIO +  " sin descuento  SWITCH");
			}
		break;
		}
}
/* CORRECCION: lo que te falto es las variables aumento y descuento, solo pones al principio que sean igual 0 
  
luego solo hay que nombrarlas dentro de cada bloque, por ejemplo 

aumento = PRECIO * 0.1 ; 
preciofinal = PRECIO + aumento;


descuento = PRECIO * 0.2;
preciofinal = PRECIO - descuento;


Tambien hay otra forma de resolverlo mas facil usan != 

if (aumento != 0){
	preciofinal = PRECIO + (PRECIO * 0.1)
}


*/
/*
Lo que hago con switch al tener mas de una variable se hace asi: 

switch(estacion){
		case "Invierno":
			instrucciones
		break;

		case "Verano":
			instrucciones
		break;

		case "Otoño":
		case "Primavera":
			instrucciones
		break;
		}

Usamos primero la variable estacion, y lo dividimos en 3 bloques, Otoño y primavera estan juntas porque tienen el mismo resultado como dice el anuncio. Solo ahora nos falta agregar las instrucciones, de ahi aplicamos if, y le agregamos la otra variable destino


switch(estacion){
		case "Invierno":

			if(destino == ""){} 
			else if (){}
			else {}

		break;

		case "Verano":

			if(destino == ""){} 
			else if (){}
			else {}

		break;

		case "Otoño":
		case "Primavera":

			if(destino == ""){} 
			else if (){}
			else {}

		break;
		}

*/
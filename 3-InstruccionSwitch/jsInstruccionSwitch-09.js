function mostrar()
{
	let precio = 15000;
	let preciofinal;
	let aumento = 0;
	let descuento = 0;
	let estacion;
	let destino;
	estacion = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;

	switch(estacion)
	{
		case "Invierno":
			switch(destino)
			{
				case "Bariloche":
					aumento = 0.2;
					mensaje = "Tiene un aumento del 20%";
				break;
				case "Mar del plata":
					descuento = 0.2;
					mensaje = "Tiene un descuento del 20%";
				break;
				default:
					aumento = 0.1;
					mensaje ="Tiene un aumento del 10% ";
				break;
			}
		break;
		case "Verano":
			switch(destino)
			{
				case "Bariloche":
					descuento = 0.2;
					mensaje = "Tiene un descuento del 20%";
				break;
				case "Mar del plata":
					aumento = 0.2;
					mensaje = "Tiene un aumento del 20%";
				break;
				default:
					descuento = 0.1;
					mensaje = "Tiene un descuento del 10%";
				break;
			}
		break;
		default:
			switch(destino)
			{
				case "Bariloche":
				case "Cataratas":
				case "Mar del plata":
					aumento = 0.1;
					mensaje = "Tiene un aumento del 10%"; 
				break;
				default:
					mensaje = "precio sin descuento";
				break;
			}
		break;
	}	
	//calculo
	aumento = precio * aumento;
	descuento = precio * descuento;
	preciofinal = precio + aumento - descuento;
	//muestro
	alert( mensaje + " un total de: $" + preciofinal);
}
























	// // Invierno
	// if(estacion == "Invierno" && destino == "Bariloche"){
	// 	preciofinal = (precio * 0.2) + precio;
	// 	alert("El precio es " + preciofinal + " con su aumento del 20% Bariloche");
	// }
	// else if (estacion == "Invierno" && (destino == "Cataratas" || destino == "Cordoba") ){
	// 	preciofinal = (precio * 0.1) + precio;
	// 	alert("El precio es " + preciofinal + " con su aumento del 10% Cataratas Cordoba");
	// }
	// else if (estacion == "Invierno" && destino == "Mar del plata"){
	// 	preciofinal = precio - (precio * 0.2) ;
	// 	alert("El precio es " + preciofinal + " con su descuento del 20% incluido Mar del plata");
	// }

	// //Verano
	// else if(estacion == "Verano" && destino == "Bariloche" ){
	// 	preciofinal = precio - (precio * 0.2);
	// 	alert("El precio es " + preciofinal + " con su descuento del 20%");
	// }
	// else if (estacion == "Verano" && (destino == "Cataratas" || destino == "Cordoba")){
	// 	preciofinal = precio - (precio * 0.1);
	// 	alert("El precio es " + preciofinal + " con su descuento del 10%")
	// }
	// else if(estacion == "Verano" && destino == "Mar del plata"){
	// 	preciofinal = precio + (precio * 0.2);
	// 	alert("El precio es " + preciofinal + " con su aumento del 20%");
	// }

	// //Otoño y Primavera
	// else if((estacion == "Otoño" || estacion == "Primavera") && (destino == "Cataratas" || destino == "Mar del plata")){
	// 	preciofinal = precio + (precio * 0.1);
	// 	alert("El precio es " + preciofinal + " con su aumento del 10%");
	// }
	// else {
	// 	alert("El precio es " + precio +  " sin descuento");
	// }

/* correccion: esta bien, otra forma hubiera sido poner las variables descuento y aumento como variables y darles el valor 0
	let descuento = 0;
	let aumento = 0;
*/







/* CORRECCION: lo que te falto es las variables aumento y descuento, solo pones al principio que sean igual 0 
  
luego solo hay que nombrarlas dentro de cada bloque, por ejemplo 

aumento = precio * 0.1 ; 
preciofinal = precio + aumento;


descuento = precio * 0.2;
preciofinal = precio - descuento;


Tambien hay otra forma de resolverlo mas facil usan != 

if (aumento != 0){
	preciofinal = precio + (precio * 0.1)
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
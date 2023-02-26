/*
Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:

el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.

Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total
*/
function mostrar()
{
	let preguntar = "y";
	let mensaje;
	let tipoProducto;
	let precioProducto;
	let cantidadProducto;
	let marcaProducto;
	let fabricanteProducto;
	//a
	let fabricanteAlcoholMasBarato;
	let cantidadAlcoholMasBarato;
	let alcoholMasBarato;
	let flagAlcohol = 0;
	//b
	let acumuladorAlcohol = 0;
	let acumuladorBarbijo = 0;
	let acumuladorJabon = 0;
	let contadorProductosIngresados = 0;
	let cantidadProductoMasUnidades;
	let promedioMasUnidades;
	let acumuladorPrecioAlcohol = 0;
	let acumuladorPrecioBarbijo = 0;
	let acumuladorPrecioJabon = 0;
	
	let tipoProductoMasUnidades;
	let flagMasUnidades = 0;
	let mayorCantidadProducto;
	let precioProductoMasUnidades = 0;
	let cantidadTotalMasUnidades = 0;
	
	while(preguntar == "y")
	{
		tipoProducto = prompt("Ingrese el tipo de producto, barbijo, jabon, alcohol").toLowerCase();
		while(tipoProducto != "barbijo" && tipoProducto != "jabon" && tipoProducto != "alcohol")
		{
			tipoProducto = prompt("ERROR: barbijo, jabon, alcohol").toLowerCase();
		}
		precioProducto = prompt("Ingrese el precio: ");
		precioProducto = parseFloat(precioProducto);
		while(precioProducto < 100 || precioProducto > 300 || isNaN(precioProducto)==true)
		{
			precioProducto = prompt("ERROR: entre 100 y 300");
			precioProducto = parseFloat(precioProducto);
		}
		cantidadProducto = prompt("Ingrese la cantidad:");
		cantidadProducto = parseFloat(cantidadProducto);
		while(cantidadProducto < 0 || cantidadProducto == 0 || cantidadProducto > 1000)
		{
			cantidadProducto = prompt("ERROR: numero incorrecto o no debe superar 1000");
			cantidadProducto = parseFloat(cantidadProducto);
		}
		marcaProducto = prompt("Ingrese la marca: ").toLowerCase();
		while(isNaN(marcaProducto)== false || marcaProducto == "")
		{
			marcaProducto = prompt("ERROR: la marca es incorrecta, vuelva a escribir").toLowerCase();
		}

		fabricanteProducto = prompt("Ingrese el fabricante: ").toLowerCase();
		while(isNaN(fabricanteProducto)== false || fabricanteProducto == "")
		{
			fabricanteProducto = prompt("ERROR: el nombre es incorrecto, vuelva a escribir").toLowerCase();
		}
		//a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
		if(flagAlcohol == 0 || precioProducto < alcoholMasBarato)
		{
			alcoholMasBarato = precioProducto;
			cantidadAlcoholMasBarato = cantidadProducto;
			fabricanteAlcoholMasBarato = fabricanteProducto;
			flagAlcohol = 1;
		}
		
		//b) Del tipo con mas unidades, el promedio por compra (suma de los productos / la cantidad total)
			// precioProductoMasUnidades / cantidadTotalMasUnidades
		if(flagMasUnidades == 0 || cantidadProducto > mayorCantidadProducto)
		{
			//el valor de la cantidad mayor
			mayorCantidadProducto = cantidadProducto;
			//acumulacion: la suma de los precios de las unidades
			precioProductoMasUnidades += precioProducto;
			//acumulacion: la cantidad de todas las unidades 
			cantidadTotalMasUnidades += cantidadProducto;
			flagMasUnidades = 1;
		}
		//c unidades de jabon totales
		if(tipoProducto == "jabon")
		{
			acumuladorJabon += cantidadProducto;
		}
		
		//fin while
		preguntar = prompt("quiere agregar otro? y/n");
	}
	//b
	promedioMasUnidades =  precioProductoMasUnidades / cantidadTotalMasUnidades;

	mensaje = "\n El alcohol mas barato su cantidad es: " + cantidadAlcoholMasBarato;
	mensaje += "\n El alcohol mas barato su fabricante es: " + fabricanteAlcoholMasBarato;
	mensaje += "\n El promedio por compra del tipo con mas unidades es: " + promedioMasUnidades;
	 mensaje += "\n La cantidad de jabones fueron: "+ acumuladorJabon;
	alert(mensaje);
}



		// if(tipoProducto == "alcohol")
		// {
		// 	acumuladorAlcohol += cantidadProducto;
		// 	acumuladorPrecioAlcohol += precioProducto * cantidadProducto;
		// }
		// else
		// {
		// 	if(tipoProducto == "barbijo")
		// 	{
		// 		acumuladorBarbijo += cantidadProducto;
		// 		acumuladorPrecioBarbijo += precioProducto * cantidadProducto;
		// 	}
		// 	else//jabon
		// 	{
		// 		acumuladorJabon += cantidadProducto;	
		// 		acumuladorPrecioJabon += precioProducto * cantidadProducto;
		// 	}
		// }
		// contadorProductosIngresados++;



	// //b
	// if(acumuladorAlcohol > acumuladorBarbijo && acumuladorAlcohol > acumuladorJabon)
	// {
	// 	cantidadProductoMasUnidades = acumuladorAlcohol;
	// 	precioProductoMasUnidades = acumuladorPrecioAlcohol;
	// }
	// else
	// {
	// 	if(acumuladorBarbijo > acumuladorAlcohol && acumuladorBarbijo > acumuladorJabon)
	// 	{
	// 		cantidadProductoMasUnidades = acumuladorBarbijo;	
	// 		precioProductoMasUnidades = acumuladorPrecioBarbijo;
	// 	}
	// 	else
	// 	{
	// 		cantidadProductoMasUnidades = acumuladorJabon;
	// 		precioProductoMasUnidades = acumuladorPrecioJabon;
	// 	}
	// }
	// if(cantidadProductoMasUnidades > 0)
	// {
	// 	promedioMasUnidades = precioProductoMasUnidades / cantidadProductoMasUnidades
	// }
	// else
	// {
	// 	promedioMasUnidades = 0;
	// }
	// promedioMasUnidades =  precioProductoMasUnidades / cantidadProductoMasUnidades;

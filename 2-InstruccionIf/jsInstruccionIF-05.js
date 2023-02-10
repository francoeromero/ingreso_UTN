function mostrar()
{
	//pido espacio de memoria
	let edad;
	let edadIngresada;
	//asigno al input
	edadIngresada = document.getElementById("txtIdEdad").value;
	//convierto en numeros enteros
	edad = parseInt(edadIngresada);
	//valido si el dato ingresado cumple con la siguiente condicional
	if (!(edad > 13 && edad < 17)) 
	{
		alert("No es adolescente");
	}
	//limpio la entrada para usarse de nuevo
	document.getElementById("txtIdEdad").value = "";
}

/*

if(true)

tengo que buscar que la condicion me de verdadero para que la alerta salte que no es adolescente

como lo hago? declarando una condicional que me de verdadera por ejemplo edad >= 18

if(edad >= 18){
	alert("No es adolescente");
}

que condicional mas puede poner para que me de verdadero? por ejemplo poner el rango de NO adolescente

if (edad < 13 || edad > 17) {
	alert("No es adolescente");
}

otra condicional mas para agregar? si podemos usar la CONTRAINTUITIVA osea declarando una condicional que sea contradictorio, por ejemplo ponemos una condicional del rango de los menores de edad de 13 a 17, y lo cerramos entreparentesis con el !

if (!  (edad >= 13 && edad <= 17)  )
{
 alert("No es adolescente");
}


*/